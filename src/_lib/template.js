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
    font-family: Arial, Helvetica, sans-serif;
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
    resourceType
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
          //fontFamily: 'Inter, Helvetica, Helvetica Neue, system-ui, Sans-Serif',
          padding: '50px 80px',
          height: '100%',
          backgroundImage: `url(${
            !isEmpty(bgImage)
              ? bgImage
              : 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571300217/og-image-assets/instructor-guide_2x.png'
          })`,
          backgroundSize: 'contain'
        }}
      >
        <div
          css={{
            position: 'absolute',
            left: 50,
            top: 50,
            display: 'flex',
            alignItems: 'center'
          }}
        >
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
            padding: '8px 0'
            //fontFamily: 'Georgia, Palatino, Bookman, serif',
          }}
        >
          {text}
        </span>
      </div>
    </React.Fragment>
  )
}

function Store({parsedReq}) {
  const {
    text,
    theme,
    md,
    fontSize,
    images,
    bgImage,
    widths,
    heights,
    resourceType
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
          //fontFamily: 'Inter, Helvetica, Helvetica Neue, system-ui, Sans-Serif',
          padding: '50px 80px',
          height: '100%',
          backgroundImage: `url(${
            !isEmpty(bgImage)
              ? bgImage
              : 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571300217/og-image-assets/instructor-guide_2x.png'
          })`,
          backgroundSize: '628px 628px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%'
        }}
      >
        <div
          css={{
            position: 'absolute',
            left: 50,
            top: 50,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img src={images[0]} width="70px" />
          <h3 css={{marginLeft: 20}}>
            {/* {resourceType.replace('-', ' ')} */}
            Store
          </h3>
        </div>
        {/* <div
          css={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        > */}
        <h1
          css={{
            color: 'black',
            backgroundColor: 'white',
            //backgroundColor: '#FF2D55',
            boxShadow: '32px 0 0 white, -32px 0 0 white',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: 1.25,
            padding: '10px 0'
            //fontFamily: 'Georgia, Palatino, Bookman, serif',
          }}
        >
          {text}
        </h1>
        {/* </div> */}
      </div>
    </React.Fragment>
  )
}

function Podcast({parsedReq, podcast, palette}) {
  const {images} = parsedReq
  // console.log('PARSED REQUEST', parsedReq)
  // const DarkMuted = `rgba(${palette.DarkMuted._rgb[0]}, ${palette.DarkMuted._rgb[1]}, ${palette.DarkMuted._rgb[2]}, 1)`
  // const DarkMutedOpacity = `rgba(${palette.DarkMuted._rgb[0]}, ${palette.DarkMuted._rgb[1]}, ${palette.DarkMuted._rgb[2]}, .85)`
  // const LightVibrant = `rgba(${palette.LightVibrant._rgb[0]}, ${palette.LightVibrant._rgb[1]}, ${palette.LightVibrant._rgb[2]}, 1)`
  // const Vibrant = `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 1)`
  // const DarkVibrant = `rgba(${palette.DarkVibrant._rgb[0]}, ${palette.DarkVibrant._rgb[1]}, ${palette.DarkVibrant._rgb[2]}, .85)`

  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
            width: '1200px',
            height: '628px',
            backgroundImage: `url(${podcast.image_url})`,
            boxShadow: `inset 0 0 0 1000px ${DarkMutedOpacity}`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '2000px',
            backgroundPosition: '60% 50%',
            filter: 'blur(35px)',
            transform: 'scale(1.1)',
            zoom: 1.2
          }}
        />
        <div
          css={{
            position: 'relative',
            zIndex: 5,
            alignItems: 'center',
            display: 'flex',
            left: 50,
            position: 'absolute',
            top: 50
          }}
        >
          <img src={images[0]} width="80px" />
          <h2 css={{fontSize: 36, marginLeft: 20, color: 'white'}}>
            {/* {resourceType.replace('-', ' ')} */}
            Podcast
          </h2>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingLeft: 50,
            paddingBottom: 50,
            height: 628,
            maxWidth: 630,
            zIndex: 10
            //position: 'absolute',
          }}
        >
          <h1
            css={{
              fontWeight: 600,
              fontSize: 56,
              padding: '32px 10px',
              color: 'white',
              lineHeight: 1.2
            }}
          >
            {podcast.title}
          </h1>
        </div>

        <img
          src={podcast.image_url}
          width="648px"
          heigh="648px"
          css={{
            clipPath: 'circle(220px at center)',
            zoom: 1.1,
            position: 'absolute',
            right: -20,
            top: -40,
            zIndex: 5
          }}
        />
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
    case 'store':
      markup = renderToStaticMarkup(<Store parsedReq={parsedReq} />)
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
