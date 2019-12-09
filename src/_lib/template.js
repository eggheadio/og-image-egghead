/** @jsx jsx */
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx, css, Global} from '@emotion/core'
import {isEmpty} from 'lodash'
import * as Vibrant from 'node-vibrant'
import fonts from './fonts'
import convertTime from './convertTime'

const reset = css`
  ${fonts}
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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
          //fontFamily: 'Inter, Helvetica, Helvetica Neue, system-ui, Sans-Serif',
          padding: '50px 80px',
          height: '100%',
          backgroundImage: `url(${
            !isEmpty(bgImage)
              ? bgImage
              : 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571300217/og-image-assets/instructor-guide_2x.png'
          })`,
          backgroundSize: 'contain',
        }}
      >
        <div
          css={{
            position: 'absolute',
            left: 50,
            top: 50,
            display: 'flex',
            alignItems: 'center',
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
            padding: '8px 0',
            //fontFamily: 'Georgia, Palatino, Bookman, serif',
          }}
        >
          {text}
          {/* emojis: {emojify(sanitizeHtml(text))} */}
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
          backgroundPosition: '50% 50%',
        }}
      >
        <div
          css={{
            position: 'absolute',
            left: 50,
            top: 50,
            display: 'flex',
            alignItems: 'center',
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
            padding: '10px 0',
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
  const vibrant = `rgba(${palette.Vibrant._rgb.toString()}, 1)`

  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          borderTop: `25px solid ${vibrant}`,
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            padding: 50,
            // height: 628,
            width: '100%',
            maxWidth: 640,
            // position: 'absolute',
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={images[0]} width="60px" />
            <h2 css={{fontSize: 34, marginLeft: 14, color: 'rgba(0,0,0,0.8)'}}>
              {/* {resourceType.replace('-', ' ')} */}
              egghead.io<span css={{color: vibrant}}>/podcasts</span>
            </h2>
          </div>
          <h1
            css={{
              fontWeight: 600,
              fontSize: 46,
              padding: '32px 0',
              color: 'rgba(0, 0, 0, 0.9)',
              lineHeight: 1.2,
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
            top: -30,
            zIndex: 5,
            boxShadow:
              '0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)',
          }}
        />
      </div>
    </React.Fragment>
  )
}

function Lesson({lesson, parsedReq, palette}) {
  const vibrant = `rgba(${palette.Vibrant._rgb.toString()}, 1)`
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          borderTop: `25px solid ${vibrant}`,
        }}
      >
        <img
          src={lesson.image_256_url}
          css={{borderRadius: 10, width: '100%', maxWidth: 132}}
        />
        <h1 css={{fontSize: 50, lineHeight: 1.3, margin: '40px 0'}}>
          {lesson.title}
        </h1>
        {/* <p>{lesson.summary}</p> */}
        <div css={{display: 'flex', alignItems: 'center', fontSize: 32}}>
          <div css={{marginRight: 30, display: 'flex', alignItems: 'center'}}>
            <img
              src={lesson.instructor.avatar_64_url}
              css={{
                borderRadius: '50%',
                width: 64,
                height: 64,
                marginRight: 10,
              }}
            />{' '}
            {lesson.instructor.full_name}
          </div>
          {lesson.free_forever && (
            <div css={{marginRight: 30, display: 'flex', alignItems: 'center'}}>
              <svg
                css={{marginRight: 10}}
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="31"
                viewBox="0 0 34 31"
              >
                <g fill={vibrant}>
                  <path d="M31.28,12.58 L26.18,12.58 C25.1373333,10.1093333 22.6666667,8.38666667 19.8106667,8.38666667 C16.0026667,8.38666667 12.8973333,11.4693333 12.8973333,15.2546667 C12.8973333,19.04 16.0026667,22.1226667 19.8106667,22.1226667 C22.6666667,22.1226667 25.1146667,20.4 26.1573333,17.952 L31.28,17.952 C32.776,17.952 34,16.7506667 34,15.2546667 C34,13.804 32.776,12.58 31.28,12.58 Z M19.8106667,17.9293333 C18.3373333,17.9293333 17.136,16.7506667 17.136,15.2773333 C17.136,13.804 18.3373333,12.6253333 19.8106667,12.6253333 C21.284,12.6253333 22.4853333,13.804 22.4853333,15.2773333 C22.4853333,16.7506667 21.284,17.9293333 19.8106667,17.9293333 Z" />
                  <path d="M30.6906667,25.2506667 L26.7013333,21.5786667 C26.4066667,21.3066667 25.976,21.3293333 25.704,21.6013333 C23.9586667,23.256 21.5333333,24.2306667 18.8813333,24.004 C14.5973333,23.664 11.152,20.1733333 10.8573333,15.912 C10.4946667,10.8346667 14.552,6.57333333 19.6066667,6.57333333 C21.828,6.57333333 23.8453333,7.38933333 25.4093333,8.74933333 C25.6813333,8.99866667 26.112,8.99866667 26.384,8.74933333 L30.4413333,5.032 C30.6,4.87333333 30.6226667,4.624 30.464,4.46533333 C27.4946667,1.51866667 23.3466667,-0.226666667 18.7906667,0.0226666667 C11.628,0.385333333 5.712,5.712 4.46533333,12.58 L2.72,12.58 C1.224,12.58 0,13.804 0,15.3 C0,16.796 1.224,18.02 2.72,18.02 L4.46533333,18.02 C5.75733333,25.16 12.036,30.6 19.6066667,30.6 C23.9813333,30.6 27.9026667,28.7866667 30.7133333,25.8853333 C30.872,25.704 30.872,25.432 30.6906667,25.2506667 Z" />
                </g>
              </svg>{' '}
              Community Resource
            </div>
          )}
          <div css={{display: 'flex', alignItems: 'center'}}>
            <svg
              css={{marginRight: 10}}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                fill="#333"
                d="M15,0 C6.71572875,0 0,6.71572875 0,15 C0,23.2842712 6.71572875,30 15,30 C23.2842712,30 30,23.2842712 30,15 C30,11.0217527 28.4196474,7.20644396 25.6066017,4.39339828 C22.793556,1.58035261 18.9782473,0 15,0 Z M15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 C21.627417,3 27,8.372583 27,15 C27,18.1825979 25.7357179,21.2348448 23.4852814,23.4852814 C21.2348448,25.7357179 18.1825979,27 15,27 Z M19.65,15.945 L16.5,14.13 L16.5,7.5 C16.5,6.67157288 15.8284271,6 15,6 C14.1715729,6 13.5,6.67157288 13.5,7.5 L13.5,15.18 C13.5088817,15.283353 13.5342001,15.3846265 13.575,15.48 C13.6058909,15.5689958 13.646115,15.654472 13.695,15.735 C13.7360463,15.8202593 13.786349,15.9007436 13.845,15.975 L14.085,16.17 L14.22,16.305 L18.12,18.555 C18.3486044,18.6845707 18.6072354,18.7518147 18.87,18.7500371 C19.5530894,18.7547759 20.1531318,18.2974189 20.329582,17.6374952 C20.5060321,16.9775715 20.214319,16.2817772 19.62,15.945 L19.65,15.945 Z"
              />
            </svg>{' '}
            {convertTime(lesson.duration)}
          </div>
        </div>
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
    case 'lesson':
      const lesson = await axios
        .get(`https://egghead.io/api/v1/lessons/${parsedReq.text}`)
        .then(({data}) => data)
      const tagPalette = await Vibrant.from(lesson.image_256_url)
        .getPalette()
        .then(palette => palette)
      markup = renderToStaticMarkup(
        <Lesson lesson={lesson} palette={tagPalette} parsedReq={parsedReq} />
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
