/** @jsx jsx */
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx, css, Global} from '@emotion/core'
import {isEmpty} from 'lodash'
import * as Vibrant from 'node-vibrant'

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body {
    font-style: normal;
    padding: 0;
    margin: 0;
    color: #242529;
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: white;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.1;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }
`

function App({resource, parsedReq}) {
  return (
    <div>
      <h1>-----{parsedReq.text}</h1>
    </div>
  )
}

function InstructorGuide({parsedReq}) {
  const {
    text,
    theme,
    md,
    fontSize,
    images,
    bgImage,
    widths,
    heights,
    resourceType,
  } = parsedReq
  console.log('PARSED REQUEST', parsedReq)
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          fontFamily: 'Helvetica, Helvetica Neue, system-ui, Sans-Serif',
          padding: '50px 80px',
          height: '100%',
          backgroundImage: `url(${
            !isEmpty(bgImage)
              ? bgImage
              : 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571300217/og-image-assets/instructor-guide_2x.png'
          })`,
          backgroundSize: 'contain',
        }}>
        <div
          css={{
            position: 'absolute',
            left: 50,
            top: 50,
            display: 'flex',
            alignItems: 'center',
          }}>
          <img src={images[0]} width="70px" />
          <h3 css={{marginLeft: 20}}>
            {/* {resourceType.replace('-', ' ')} */}
            How to egghead
          </h3>
        </div>
        <span
          css={{
            color: 'white',
            backgroundColor: '#242529',
            //backgroundColor: '#FF2D55',
            boxShadow: '32px 0 0 #242529, -32px 0 0 #242529',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: 1.25,
            padding: '8px 0',
            //fontFamily: 'Georgia, Palatino, Bookman, serif',
          }}>
          {text}
        </span>
      </div>
    </React.Fragment>
  )
}

function Podcast({parsedReq, podcast, palette}) {
  const {images} = parsedReq
  console.log('PARSED REQUEST', parsedReq)
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          fontFamily: 'Helvetica, Helvetica Neue, system-ui, Sans-Serif',
          height: '100%',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            left: 50,
            position: 'absolute',
            top: 50,
          }}>
          <img src={images[0]} width="70px" />
          <h3 css={{marginLeft: 20}}>
            {/* {resourceType.replace('-', ' ')} */}
            Podcast
          </h3>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            paddingLeft: 50,
            maxWidth: 600,
          }}>
          <h1 css={{fontSize: 50}}>{podcast.title}</h1>
        </div>

        <img
          src={podcast.image_url}
          width="628px"
          heigh="628px"
          css={{clipPath: 'circle(240px at center)'}}
        />

        <svg
          css={{position: 'absolute', right: 0, height: 627, zIndex: '-1'}}
          xmlns="http://www.w3.org/2000/svg"
          width="612"
          height="628"
          viewBox="0 0 612 628">
          <path
            fill={`rgb(${palette.DarkMuted._rgb[0]}, ${
              palette.DarkMuted._rgb[1]
            }, ${palette.DarkMuted._rgb[2]})`}
            //fill={data.vibrant}
            //fill={!loading ? data.darkMuted : '#1C3338'}
            fillRule="evenodd"
            d="M1200,-1.25055521e-12 L1200,628 L588,627.993089 C634.084302,540.045835 699.436953,482.974431 845.619395,384.902734 C1013.64399,272.177451 1036.00696,121.320442 1008.57836,-0.00722940765 L1200,-1.25055521e-12 Z"
            transform="translate(-588)"
          />
        </svg>
      </div>
    </React.Fragment>
  )
}

export async function getHtml(parsedReq) {
  let markup

  console.log(parsedReq)
  switch (parsedReq.resourceType) {
    case 'instructor-guide':
      markup = renderToStaticMarkup(<InstructorGuide parsedReq={parsedReq} />)
      break
    case 'podcast':
      const podcast = await axios
        .get(`https://egghead.io/api/v1/podcasts/${parsedReq.text}`)
        .then(({data}) => data)
      const palette = await Vibrant.from(podcast.image_url)
        .getPalette()
        .then(palette => palette)
      console.log(palette)
      markup = renderToStaticMarkup(
        <Podcast podcast={podcast} palette={palette} parsedReq={parsedReq} />
      )
      break
    case 'series':
      const resource = await axios
        .get(
          `https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`
        )
        .then(({data}) => data)
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />
      )
      break
    default:
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />
      )
  }
  console.log(markup)
  return markup
}
