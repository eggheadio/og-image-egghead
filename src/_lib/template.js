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
          // flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'center',
          // textAlign: 'center',
          width: '100%',
          height: '100%',
          borderLeft: `25px solid ${vibrant}`,
        }}
      >
        <div css={{marginRight: 50}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="171"
            height="171"
            viewBox="0 0 171 171"
          >
            <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
              <circle
                cx="81.881"
                cy="81.881"
                r="81.881"
                fill={vibrant}
                stroke="#FFF"
                stroke-width="6.141"
              />
              <path
                fill="#F7FCF6"
                d="M66.1300136,49.0612545 L113.633556,79.2907813 C115.064251,80.2012238 115.485999,82.0990911 114.575557,83.5297866 C114.334277,83.9089403 114.012709,84.2305081 113.633556,84.4717877 L66.1300136,114.701315 C64.6993182,115.611757 62.8014509,115.190009 61.8910083,113.759313 C61.5774896,113.266641 61.4109634,112.69478 61.4109634,112.110811 L61.4109634,51.6517577 C61.4109634,49.9559408 62.7856946,48.5812096 64.4815115,48.5812096 C65.0654807,48.5812096 65.6373413,48.7477357 66.1300136,49.0612545 Z"
              />
            </g>
          </svg>
        </div>
        <div
          // right column holder
          css={{
            // display: 'grid',
            // gridTemplateRows: 'auto 1fr',
            // gridGap: 30,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <img
            // tag image
            src={lesson.image_256_url}
            css={{borderRadius: 10, width: '100%', maxWidth: 104}}
          />
          <h1
            // title
            css={{
              fontSize: lesson.title.length > 30 ? 50 : 58,
              lineHeight: 1.3,
              padding: 0,
              margin: '30px 0',
            }}
          >
            {lesson.title}
          </h1>
          <div
            // byline holder
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontSize: 32,
            }}
          >
            <div
              // instructor
              css={{marginRight: 30, display: 'flex', alignItems: 'center'}}
            >
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
              <div
                // community resource
                css={{marginRight: 30, display: 'flex', alignItems: 'center'}}
              >
                <svg
                  css={{marginRight: 10}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                >
                  <g fill="#FFB430">
                    <path d="M38.64,15.54 L32.34,15.54 C31.052,12.488 28,10.36 24.472,10.36 C19.768,10.36 15.932,14.168 15.932,18.844 C15.932,23.52 19.768,27.328 24.472,27.328 C28,27.328 31.024,25.2 32.312,22.176 L38.64,22.176 C40.488,22.176 42,20.692 42,18.844 C42,17.052 40.488,15.54 38.64,15.54 Z M24.472,22.148 C22.652,22.148 21.168,20.692 21.168,18.872 C21.168,17.052 22.652,15.596 24.472,15.596 C26.292,15.596 27.776,17.052 27.776,18.872 C27.776,20.692 26.292,22.148 24.472,22.148 Z" />
                    <path d="M37.912,31.192 L32.984,26.656 C32.62,26.32 32.088,26.348 31.752,26.684 C29.596,28.728 26.6,29.932 23.324,29.652 C18.032,29.232 13.776,24.92 13.412,19.656 C12.964,13.384 17.976,8.12 24.22,8.12 C26.964,8.12 29.456,9.128 31.388,10.808 C31.724,11.116 32.256,11.116 32.592,10.808 L37.604,6.216 C37.8,6.02 37.828,5.712 37.632,5.516 C33.964,1.876 28.84,-0.28 23.212,0.028 C14.364,0.476 7.056,7.056 5.516,15.54 L3.36,15.54 C1.512,15.54 0,17.052 0,18.9 C0,20.748 1.512,22.26 3.36,22.26 L5.516,22.26 C7.112,31.08 14.868,37.8 24.22,37.8 C29.624,37.8 34.468,35.56 37.94,31.976 C38.136,31.752 38.136,31.416 37.912,31.192 Z" />
                  </g>
                </svg>{' '}
                Community Resource
              </div>
            )}
            <div
              // duration
              css={{display: 'flex', alignItems: 'center'}}
            >
              <svg
                css={{marginRight: 10}}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#A1A7BC"
                  d="M15,0 C6.71572875,0 0,6.71572875 0,15 C0,23.2842712 6.71572875,30 15,30 C23.2842712,30 30,23.2842712 30,15 C30,11.0217527 28.4196474,7.20644396 25.6066017,4.39339828 C22.793556,1.58035261 18.9782473,0 15,0 Z M15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 C21.627417,3 27,8.372583 27,15 C27,18.1825979 25.7357179,21.2348448 23.4852814,23.4852814 C21.2348448,25.7357179 18.1825979,27 15,27 Z M19.65,15.945 L16.5,14.13 L16.5,7.5 C16.5,6.67157288 15.8284271,6 15,6 C14.1715729,6 13.5,6.67157288 13.5,7.5 L13.5,15.18 C13.5088817,15.283353 13.5342001,15.3846265 13.575,15.48 C13.6058909,15.5689958 13.646115,15.654472 13.695,15.735 C13.7360463,15.8202593 13.786349,15.9007436 13.845,15.975 L14.085,16.17 L14.22,16.305 L18.12,18.555 C18.3486044,18.6845707 18.6072354,18.7518147 18.87,18.7500371 C19.5530894,18.7547759 20.1531318,18.2974189 20.329582,17.6374952 C20.5060321,16.9775715 20.214319,16.2817772 19.62,15.945 L19.65,15.945 Z"
                />
              </svg>{' '}
              {convertTime(lesson.duration)}
            </div>
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
