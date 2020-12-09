/** @jsx jsx */
import {readFileSync} from 'fs'
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx, css, Global} from '@emotion/core'
import {isEmpty, map, uniqBy} from 'lodash'
import * as Vibrant from 'node-vibrant'
import convertTime from './convertTime'
import twemoji from 'twemoji'
import fonts from './fonts'

const twOptions = {folder: 'svg', ext: '.svg'}
const emojify = (text) => twemoji.parse(text, twOptions)
const hasArtworkImage = (url) => {
  return !url.match(/\/tags\//)
}

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
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont;
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
          <h3 css={{marginLeft: 20}}>How to egghead</h3>
        </div>
        <div css={{width: '100%', maxWidth: 660}}>
          <span
            css={{
              color: 'white',
              backgroundColor: '#242529',
              boxShadow: '24px 0 0 #242529, -24px 0 0 #242529',
              fontSize: '46px',
              fontWeight: '600',
              lineHeight: 1.5,
              padding: '12px 0',
            }}
          >
            {emojify(text)}
          </span>
        </div>
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
          <h3 css={{marginLeft: 20}}>Store</h3>
        </div>
        <h1
          css={{
            color: 'black',
            backgroundColor: 'white',
            boxShadow: '32px 0 0 white, -32px 0 0 white',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: 1.25,
            padding: '10px 0',
          }}
        >
          {text}
        </h1>
      </div>
    </React.Fragment>
  )
}

function Article({parsedReq}) {
  const {text, images, bgImage, author, resourceType} = parsedReq
  console.log('PARSED REQUEST', parsedReq)
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          padding: '50px 80px',
          height: '100%',
          backgroundImage: `url(${
            !isEmpty(bgImage)
              ? bgImage
              : 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571300217/og-image-assets/instructor-guide_2x.png'
          })`,
          // backgroundSize: '1200px 628px',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
        }}
      >
        <div
          css={{
            position: 'absolute',
            zIndex: 10,
            left: 60,
            top: 60,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={images[0]} width="70px" />
          <h3 css={{marginLeft: 20}}>egghead.io</h3>
        </div>
        <div
          css={{
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 60px',
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '45%',
          }}
        >
          <h1
            css={{
              color: 'black',
              fontSize: '54px',
              fontWeight: '900',
              lineHeight: 1.25,
              padding: '10px 0',
            }}
          >
            {text}
          </h1>
          {author && (
            <h2
              css={{
                color: 'black',
                fontSize: '32px',
                fontWeight: '400',
                lineHeight: 1.25,
                padding: '10px 0',
              }}
            >
              by {author}
            </h2>
          )}
        </div>
        <div
          css={{
            position: 'absolute',
            left: -60,
            top: 0,
            height: '100%',
            width: '50%',
            background: 'rgba(255, 255, 255, 1)',
            // backdropFilter: 'blur(10px)',
            transform: 'skewX(-10deg)',
          }}
        />
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
            width: '100%',
            maxWidth: 640,
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
            {emojify(podcast.title)}
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
  const darkVibrant = `rgba(${palette.DarkVibrant._rgb.toString()}, 1)`
  const {images} = parsedReq
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          padding: 50,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          borderTop: `25px solid ${vibrant}`,
        }}
      >
        <div css={{marginRight: 50, width: '100%', maxWidth: 130}}>
          <img
            // tag image
            src={lesson.image_256_url}
            css={{
              borderRadius: 10,
              width: '100%',
              maxWidth: 130,
            }}
          />
        </div>
        <div
          // right column holder
          css={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              marginBottom: 30,
              display: 'flex',
              alignItems: 'center',
              fontSize: 36,
              fontWeight: 600,
            }}
          >
            <img src={images[0]} width="72px" css={{marginRight: 15}} />{' '}
            egghead.io
          </div>
          <h1
            // title
            css={{
              fontSize:
                lesson.title.length > 30
                  ? lesson.title.length > 45
                    ? lesson.title.length > 55
                      ? 52
                      : 56
                    : 62
                  : 66,
              lineHeight: 1.3,
              padding: 0,
              marginBottom: 30,
            }}
          >
            {lesson.title.replace(`’`, `'`)}
          </h1>
          <div
            // byline holder
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontSize: 32,
              flexWrap: 'wrap',
              div: {
                padding: '15px 0',
              },
            }}
          >
            <div
              // instructor
              css={{marginRight: 36, display: 'flex', alignItems: 'center'}}
            >
              <img
                src={lesson.instructor.avatar_64_url}
                css={{
                  borderRadius: '50%',
                  width: 70,
                  height: 70,
                  marginRight: 15,
                }}
              />{' '}
              {emojify(lesson.instructor.full_name)}
            </div>
            <div
              // duration
              css={{display: 'flex', alignItems: 'center', marginRight: 36}}
            >
              <svg
                css={{marginRight: 10}}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#A1A7BC"
                  d="M18,0 C8.0588745,0 0,8.0588745 0,18 C0,27.9411255 8.0588745,36 18,36 C27.9411255,36 36,27.9411255 36,18 C36,13.2261032 34.1035769,8.64773275 30.7279221,5.27207794 C27.3522672,1.89642313 22.7738968,0 18,0 Z M18,32.4 C10.0470996,32.4 3.6,25.9529004 3.6,18 C3.6,10.0470996 10.0470996,3.6 18,3.6 C25.9529004,3.6 32.4,10.0470996 32.4,18 C32.4,21.8191175 30.8828615,25.4818138 28.1823376,28.1823376 C25.4818138,30.8828615 21.8191175,32.4 18,32.4 Z M23.58,19.134 L19.8,16.956 L19.8,9 C19.8,8.00588745 18.9941125,7.2 18,7.2 C17.0058875,7.2 16.2,8.00588745 16.2,9 L16.2,18.216 C16.2106581,18.3400236 16.2410401,18.4615518 16.29,18.576 C16.3270691,18.682795 16.375338,18.7853664 16.434,18.882 C16.4832556,18.9843112 16.5436188,19.0808923 16.614,19.17 L16.902,19.404 L17.064,19.566 L21.744,22.266 C22.0183252,22.4214848 22.3286825,22.5021777 22.644,22.5000445 C23.4637073,22.505731 24.1837581,21.9569026 24.3954984,21.1649942 C24.6072386,20.3730858 24.2571828,19.5381326 23.544,19.134 L23.58,19.134 Z"
                />
              </svg>{' '}
              {convertTime(lesson.duration)}
            </div>
            {lesson.free_forever && (
              <div
                // community resource
                css={{display: 'flex', alignItems: 'center'}}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

function Talk({lesson, parsedReq, palette}) {
  const vibrant = `rgba(${palette.Vibrant._rgb.toString()}, 1)`
  const darkVibrant = `rgba(${palette.DarkVibrant._rgb.toString()}, 1)`
  const {images} = parsedReq
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          padding: 50,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          borderTop: `25px solid ${vibrant}`,
        }}
      >
        <div css={{marginRight: 50, width: '100%', maxWidth: 130}}>
          <img
            src={lesson.instructor.avatar_256_url}
            css={{
              borderRadius: '50%',
              width: '100%',
              maxWidth: 130,
            }}
          />{' '}
        </div>
        <div
          // right column holder
          css={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              marginBottom: 30,
              display: 'flex',
              alignItems: 'center',
              fontSize: 36,
              fontWeight: 600,
            }}
          >
            <img src={images[0]} width="72px" css={{marginRight: 15}} />{' '}
            egghead.io
          </div>
          <h1
            // title
            css={{
              fontSize:
                lesson.title.length > 30
                  ? lesson.title.length > 45
                    ? lesson.title.length > 55
                      ? 52
                      : 56
                    : 62
                  : 66,
              lineHeight: 1.3,
              padding: 0,
              marginBottom: 30,
            }}
          >
            {lesson.title.replace(`’`, `'`)}
          </h1>
          <div
            // byline holder
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontSize: 32,
              flexWrap: 'wrap',
              div: {
                padding: '15px 0',
              },
            }}
          >
            <div
              // instructor
              css={{marginRight: 36, display: 'flex', alignItems: 'center'}}
            >
              {emojify(lesson.instructor.full_name)}
            </div>
            <div
              // duration
              css={{display: 'flex', alignItems: 'center', marginRight: 36}}
            >
              <svg
                css={{marginRight: 10}}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#A1A7BC"
                  d="M18,0 C8.0588745,0 0,8.0588745 0,18 C0,27.9411255 8.0588745,36 18,36 C27.9411255,36 36,27.9411255 36,18 C36,13.2261032 34.1035769,8.64773275 30.7279221,5.27207794 C27.3522672,1.89642313 22.7738968,0 18,0 Z M18,32.4 C10.0470996,32.4 3.6,25.9529004 3.6,18 C3.6,10.0470996 10.0470996,3.6 18,3.6 C25.9529004,3.6 32.4,10.0470996 32.4,18 C32.4,21.8191175 30.8828615,25.4818138 28.1823376,28.1823376 C25.4818138,30.8828615 21.8191175,32.4 18,32.4 Z M23.58,19.134 L19.8,16.956 L19.8,9 C19.8,8.00588745 18.9941125,7.2 18,7.2 C17.0058875,7.2 16.2,8.00588745 16.2,9 L16.2,18.216 C16.2106581,18.3400236 16.2410401,18.4615518 16.29,18.576 C16.3270691,18.682795 16.375338,18.7853664 16.434,18.882 C16.4832556,18.9843112 16.5436188,19.0808923 16.614,19.17 L16.902,19.404 L17.064,19.566 L21.744,22.266 C22.0183252,22.4214848 22.3286825,22.5021777 22.644,22.5000445 C23.4637073,22.505731 24.1837581,21.9569026 24.3954984,21.1649942 C24.6072386,20.3730858 24.2571828,19.5381326 23.544,19.134 L23.58,19.134 Z"
                />
              </svg>{' '}
              {convertTime(lesson.duration)}
            </div>
            {lesson.free_forever && (
              <div
                // community resource
                css={{display: 'flex', alignItems: 'center'}}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

function Instructor({parsedReq, instructor, palette}) {
  const {images} = parsedReq
  const vibrant = `rgba(${palette.Vibrant._rgb.toString()}, 1)`
  const uniqTags = map(uniqBy(instructor.lesson_tags, 'label'), (tag) => {
    return tag.image_url
  })
  const hasPublishedCourse = instructor.published_courses !== 0
  const TechLogos = ({limit = 5}) => {
    if (!isEmpty(uniqTags))
      return (
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 60,
          }}
        >
          {uniqTags.slice(0, limit).map((tag) => (
            <img key={tag} src={tag} width="50px" css={{margin: '0 20px'}} />
          ))}
        </div>
      )
    else return null
  }

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
            alignItems: 'center',
            padding: 50,
            width: '100%',
            maxWidth: 620,
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
              egghead.io <span css={{color: vibrant}}>instructor</span>
            </h2>
          </div>
          <h1
            css={{
              fontWeight: 700,
              fontSize: 58,
              padding: '56px 0',
              color: 'rgba(0, 0, 0, 0.9)',
              lineHeight: 1.2,
            }}
          >
            {emojify(instructor.full_name)}
          </h1>
          <div
            css={{
              display: 'grid',
              width: '100%',
              gridTemplateColumns:
                instructor.published_lessons !== 0 &&
                instructor.published_courses !== 0
                  ? '1fr 1fr'
                  : '1fr',
            }}
          >
            {instructor.published_lessons && (
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <h2 css={{fontSize: 48}}>{instructor.published_lessons}</h2>
                <h3 css={{opacity: 0.7}}>
                  {instructor.published_lessons > 1 ? 'lessons' : 'lesson'}
                </h3>
              </div>
            )}
            {hasPublishedCourse && (
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <h2 css={{fontSize: 48}}>{instructor.published_courses}</h2>
                <h3 css={{opacity: 0.7}}>
                  {instructor.published_courses > 1 ? 'courses' : 'course'}
                </h3>
              </div>
            )}
          </div>
          <TechLogos />
        </div>
        <img
          src={instructor.avatar_256_url}
          width="620px"
          heigh="620px"
          css={{marginRight: 60, borderRadius: 20}}
        />
      </div>
    </React.Fragment>
  )
}

function Playlists({parsedReq, playlist, itemsToMap, palette, lessonsTotal}) {
  const {images, theme} = parsedReq

  let background = 'white'
  let foreground = 'black'

  if (theme === 'dark') {
    background = 'black'
    foreground = 'white'
  }

  const hasArtwork = hasArtworkImage(playlist.square_cover_480_url)

  return (
    <React.Fragment>
      <Global styles={reset} />
      {hasArtwork ? (
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            borderTop: `25px solid rgb(${palette.Vibrant.rgb.toString()})`,
            padding: '0 3%',
            background: background,
          }}
        >
          <div
            css={{
              display: 'flex',
              flexShrink: 0,
              alignItems: 'center',
              justifyContent: 'center',
              width: '38%',
            }}
          >
            <img
              src={playlist.square_cover_480_url}
              css={{
                display: 'block',
                width: '100%',
                maxWidth: '500px',
              }}
            />
          </div>
          <div
            css={{
              flexGrow: 1,
              padding: '90px 0 90px 3%',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              css={{
                width: '250px',
                height: '62px',
                marginBottom: '20px',
              }}
              viewBox="0 0 136 34"
            >
              <g fill="none">
                <path
                  fill="#FFF"
                  d="M16.556,33.9840112 C9.666,33.993 3.984,28.592 3.641,21.711 L3.641,21.686 C2.38330604,21.5276246 1.35108978,20.6148613 1.04,19.386 C0.679,17.972 0.19,15.86 0.132,13.83 C0.0943730103,12.6557373 0.771608539,11.5756395 1.845,11.098 C2.899,10.625 4.402,10.238 6.297,9.945 C7.357,7.495 8.608,5.365 9.931,3.76 C11.992,1.265 14.221,0 16.556,0 C18.891,0 21.118,1.265 23.176,3.761 C24.493,5.366 25.749,7.493 26.807,9.938 C28.689,10.222 30.19,10.611 31.273,11.093 C32.3458049,11.568777 33.0234964,12.6469944 32.987,13.82 C32.929,15.861 32.441,17.974 32.08,19.385 C31.7694332,20.6162666 30.7350536,21.5307296 29.475,21.688 L29.475,21.711 C29.1224003,28.5910063 23.4390344,33.9872358 16.55,33.983 L16.555,33.9840112 L16.556,33.9840112 Z"
                />
                <path
                  fill="#FCFBFA"
                  d="M16.548,2.15 C22.531,2.15 27.382,15.01 27.382,20.994 C27.382,26.978 22.532,31.829 16.547,31.829 C10.564,31.829 5.713,26.979 5.713,20.994 C5.714,15.01 10.565,2.15 16.548,2.15 Z"
                />
                <path
                  fill="#252526"
                  d="M30.286,12.529 L25.866,14.088 C25.866,14.088 26.55,16.168 26.556,16.183 C26.563,16.199 30.96,15.616 30.96,15.616 L30.286,12.529 Z M2.81,12.529 L7.23,14.088 C7.23,14.088 6.547,16.168 6.54,16.183 C6.534,16.199 2.138,15.616 2.138,15.616 L2.811,12.529 L2.81,12.529 Z"
                />
                <path
                  fill="#E0E0E0"
                  d="M12,12.16 C12.6891044,12.1438469 13.2841428,12.6393563 13.393,13.32 C13.533,14.072 13.626,14.833 13.67,15.598 C13.674206,15.8121531 13.6547548,16.026116 13.612,16.236 C13.5608848,15.7224979 13.4881536,15.2113778 13.394,14.704 C13.2851428,14.0233563 12.6901044,13.5278469 12.001,13.544 C10.341,13.561 8.681,13.687 7.037,13.922 C7.193,13.438 7.36,12.952 7.539,12.472 C9.0184704,12.2793603 10.5081178,12.1751751 12,12.16 L12,12.16 Z M27.362,20.513 C23.46,20.312 20.127,19.063 19.375,18.617 C18.788,18.337 18.04,17.742 17.825,16.255 C17.681,17.893 17.99,19.385 19.528,20.122 C19.641,20.19 22.585,21.647 27.336,21.897 C27.3743575,21.4367026 27.3830422,20.9744133 27.362,20.513 L27.362,20.513 Z M5.746,20.513 C9.648,20.312 12.981,19.063 13.733,18.617 C14.32,18.337 15.068,17.742 15.283,16.255 C15.427,17.893 15.118,19.385 13.58,20.122 C13.467,20.19 10.523,21.647 5.772,21.897 C5.73364246,21.4367026 5.72495783,20.9744133 5.746,20.513 Z M21.085,12.16 C20.3958956,12.1438469 19.8008572,12.6393563 19.692,13.32 C19.552,14.072 19.46,14.833 19.416,15.598 C19.411294,15.8121706 19.4307502,16.026189 19.474,16.236 C19.529,15.685 19.605,15.16 19.691,14.704 C19.800666,14.023817 20.3952023,13.5287257 21.084,13.544 C22.745,13.561 24.404,13.687 26.048,13.922 C25.8916915,13.4349199 25.7243148,12.9514614 25.546,12.472 C24.0668607,12.2794 22.5775483,12.1752149 21.086,12.16 L21.085,12.16 Z"
                />
                <path
                  fill="#56555C"
                  d="M7.071,10.988 C8.135,8.408 9.411,6.175 10.761,4.531 C12.6,2.301 14.546,1.171 16.545,1.171 C18.545,1.171 20.491,2.301 22.329,4.529 C23.684,6.171 24.965,8.404 26.019,10.987 L26.071,11.119 L25.939,11.1 C25.563,11.05 25.258,11.014 24.885,10.968 L24.838,10.968 L24.82,10.926 C23.623,8.132 21.58,4.483 18.941,2.959 C18.2180927,2.51884066 17.3912212,2.2786476 16.545,2.263 C15.6991196,2.27882404 14.8726156,2.51901057 14.15,2.959 C11.517,4.481 9.48,8.113 8.273,10.922 L8.255,10.964 L8.209,10.964 C7.833,11.004 7.527,11.041 7.154,11.096 L7.023,11.115 L7.071,10.988 L7.071,10.988 Z M27.486,19.164 C27.192,19.156 26.896,19.144 26.604,19.127 L26.514,19.127 L26.502,19.036 C26.238,16.982 25.648,14.576 24.828,12.265 L24.775,12.092 L24.953,12.116 C25.288,12.161 25.612,12.211 25.928,12.264 L25.993,12.274 L26.014,12.336 C26.804,14.644 27.364,17.025 27.604,19.041 L27.619,19.173 L27.486,19.163 L27.486,19.164 Z"
                />
                <path
                  fill="#252526"
                  d="M26.52,13.96 C26.360779,13.4156783 26.1897385,12.8748837 26.007,12.338 L25.987,12.276 L25.922,12.265 C25.611,12.212 25.282,12.162 24.947,12.117 L24.775,12.092 L24.835,12.262 C25.016,12.774 25.186,13.29 25.345,13.808 C25.907,13.873 26.225,13.918 26.52,13.96 L26.52,13.96 Z"
                />
                <path
                  fill="#56555C"
                  d="M5.572,18.995 C5.812,16.979 6.377,14.598 7.162,12.29 L7.183,12.228 L7.248,12.216 C7.559,12.164 7.888,12.113 8.223,12.069 L8.401,12.045 L8.341,12.214 C7.523,14.525 6.929,16.929 6.668,18.984 L6.656,19.076 L6.566,19.076 C6.273,19.093 5.976,19.105 5.684,19.112 L5.552,19.112 L5.572,18.995 L5.572,18.995 Z"
                />
                <path
                  fill="#252526"
                  d="M7.248,12.216 L7.183,12.226 L7.163,12.289 C6.98025357,12.8268881 6.80921322,13.3686826 6.65,13.914 C7.2,13.844 7.359,13.852 7.819,13.803 C7.981,13.276 8.155,12.739 8.346,12.213 L8.406,12.045 L8.227,12.069 C7.89999558,12.1134214 7.57363016,12.1624262 7.248,12.216 L7.248,12.216 Z"
                />
                <path
                  fill="#56555C"
                  d="M16.548,32.802 C11.6950457,32.802368 7.33549873,29.8349252 5.556,25.32 C4.95803562,23.7900989 4.68162524,22.1534226 4.744,20.512 L4.744,20.438 L4.818,20.438 C5.203,20.428 5.466,20.418 5.74,20.404 L5.826,20.404 L5.826,20.489 C5.61387559,24.9551461 8.19420614,29.0844695 12.3013673,30.8515816 C16.4085284,32.6186937 21.1810255,31.6529351 24.278,28.428 C25.2593494,27.4101114 26.0276881,26.2066075 26.538,24.888 C27.082,23.488 27.325,21.99 27.254,20.491 L27.254,20.405 L27.34,20.405 C27.723,20.425 27.987,20.433 28.262,20.439 L28.336,20.439 L28.336,20.513 C28.4039497,22.1520989 28.1340233,23.7876557 27.543,25.318 C25.7675295,29.8366926 21.405984,32.8070829 16.551,32.8040024 L16.548,32.8040024 L16.548,32.802 Z"
                />
                <path
                  fill="#252526"
                  d="M5.863,21.898 C5.825,21.428 5.815,20.955 5.834,20.483 L5.834,20.397 L5.748,20.397 C5.472,20.412 5.208,20.422 4.826,20.432 L4.752,20.432 L4.752,20.505 C4.736,20.979 4.746,21.453 4.784,21.925 L4.819,21.925 C5.175,21.925 5.523,21.909 5.854,21.893 L5.863,21.898 L5.863,21.898 Z M28.345,20.437 L28.271,20.437 C27.992,20.437 27.728,20.422 27.349,20.403 L27.263,20.403 L27.263,20.488 C27.283,20.956 27.273,21.424 27.236,21.89 L28.316,21.937 C28.354,21.464 28.364,20.991 28.348,20.517 L28.345,20.437 L28.345,20.437 Z"
                />
                <path
                  fill="#252526"
                  d="M28.954 20.678C26.6952475 20.6864276 24.445226 20.3972736 22.262 19.818 21.322 19.571 20.407 19.238 19.528 18.827L19.507 18.811C17.662 17.929 17.594 16.161 17.766 14.549 17.809 14.142 17.66 13.603 17.231 13.317 16.8217025 13.0439161 16.2882975 13.0439161 15.879 13.317 15.449 13.601 15.3 14.139 15.343 14.545 15.515 16.158 15.443 17.926 13.603 18.808L13.582 18.818C12.7024943 19.2342431 11.7870861 19.5699486 10.847 19.821 8.66377172 20.4002622 6.41375178 20.689416 4.155 20.681L4.145 20.681C3.20778056 20.6696199 2.39589547 20.0281608 2.168 19.119 1.818 17.766 1.351 15.739 1.297 13.837 1.27273427 13.0757044 1.7114252 12.3753797 2.407 12.065 4.947 10.938 10.089 10.514 12.282 10.543 13.047 10.537 13.782 10.841 14.32 11.385 15.0216745 11.0561128 15.785163 10.8798969 16.56 10.868 17.3346989 10.8792095 18.0981933 11.054745 18.8 11.383 19.3336751 10.84257 20.0624847 10.5398004 20.822 10.543 22.14 10.523 27.806 10.768 30.705 12.058 31.3996549 12.3656831 31.838584 13.0636199 31.815 13.823 31.761 15.728 31.288 17.766 30.949 19.116 30.7211045 20.0251608 29.9092194 20.6666199 28.972 20.678L28.954 20.678 28.954 20.678zM21.098 12.244C20.4473812 12.2295607 19.8855629 12.6966761 19.781 13.339 19.641 14.089 19.549 14.846 19.504 15.607 19.494 16.477 19.806 17.072 20.426 17.377 22.75 18.413 25.45 18.925 28.681 18.941 28.9286853 18.9397268 29.1447252 18.7724701 29.208 18.533 29.515 17.333 29.929 15.548 29.977 13.907 29.9821038 13.74977 29.891037 13.6052509 29.747 13.542 27.543 12.551 22.82 12.212 21.098 12.239L21.098 12.244 21.098 12.244zM3.348 13.539C3.20435474 13.6025589 3.11372656 13.7470099 3.119 13.904 3.167 15.541 3.581 17.331 3.888 18.53 3.95 18.77 4.167 18.938 4.415 18.939 7.649 18.923 10.345 18.411 12.676 17.373 13.298 17.07 13.609 16.473 13.599 15.6 13.5541546 14.8398962 13.4613028 14.0833876 13.321 13.335 13.2163861 12.692292 12.6539949 12.2250549 12.003 12.24 11 12.224 5.845 12.427 3.349 13.54L3.348 13.539zM47.765 19.49C47.635 19.947 47.43 20.381 47.16 20.773 46.884 21.178 46.544 21.533 46.152 21.827 45.7301716 22.1378636 45.2607537 22.3783136 44.762 22.539 44.196009 22.7205941 43.604363 22.8094086 43.01 22.802 42.3070701 22.8053911 41.6094961 22.6796379 40.952 22.431 40.3116052 22.1883661 39.7281224 21.8162852 39.238 21.338 38.73 20.838 38.328 20.238 38.06 19.576 37.7594756 18.8274932 37.6115791 18.026472 37.625 17.22 37.6146857 16.4426327 37.7591575 15.6709833 38.05 14.95 38.3110665 14.3041617 38.6971203 13.7162453 39.186 13.22 39.6565318 12.7477818 40.2150608 12.3723715 40.83 12.115 41.4408126 11.8544061 42.0979211 11.7197193 42.762 11.719 44.389 11.719 45.656 12.203 46.562 13.169 47.467 14.135 47.918 15.456 47.9120591 17.132 47.9120591 17.33 47.905 17.518 47.892 17.694 47.8824398 17.7964955 47.8751047 17.8991863 47.87 18.002L40.4 18.002C40.41 18.331 40.494 18.653 40.643 18.946 40.9335048 19.5226678 41.4293868 19.9696751 42.033 20.199 42.352 20.321 42.69 20.383 43.031 20.38 43.696 20.38 44.216 20.232 44.591 19.935 44.966 19.637 45.25 19.24 45.408 18.788L47.765 19.489 47.765 19.49zM45.129 16.072C45.1140567 15.8140279 45.0601111 15.5598092 44.969 15.318 44.877094 15.0704952 44.732411 14.8459636 44.545 14.66 44.3375251 14.4581932 44.092138 14.2994733 43.823 14.193 43.4948148 14.0659561 43.1448214 14.0047922 42.793 14.013 42.4578652 14.0063017 42.1251482 14.0710725 41.817 14.203 41.5484578 14.3209231 41.3037612 14.4869914 41.095 14.693 40.7211025 15.0618034 40.4943052 15.5541454 40.457 16.078L45.129 16.072 45.129 16.072zM51.547 22.377C51.632 22.93 51.913 23.434 52.337 23.799 52.762 24.166 53.314 24.35 53.993 24.351 54.883 24.351 55.57 24.121 56.051 23.661 56.533 23.202 56.773 22.463 56.773 21.444L56.773 20.679C56.5071406 21.0671831 56.1500145 21.3841325 55.733 21.602 55.253 21.878 54.63 22.016 53.866 22.016 53.2025774 22.0218753 52.545009 21.8915188 51.934 21.633 51.3539325 21.3885874 50.8301448 21.0278239 50.395 20.573 49.9559677 20.1087323 49.6100527 19.5645698 49.376 18.97 48.8847593 17.6859906 48.8812016 16.2664556 49.366 14.98 49.596 14.382 49.934 13.831 50.363 13.356 50.7901093 12.8886112 51.30888 12.5141704 51.887 12.256 52.5093648 11.981101 53.1836913 11.8436434 53.864 11.853 54.698 11.853 55.357 12.001 55.84 12.298 56.324 12.595 56.656 12.92 56.838 13.274L56.838 12.04 59.5540562 12.04 59.5540562 21.357C59.556828 22.0582937 59.4529737 22.7559383 59.246 23.426 58.8490479 24.7611735 57.869921 25.8454168 56.582 26.376 55.889 26.68 55.055 26.832 54.078 26.832 53.4110577 26.840793 52.7474113 26.7370032 52.115 26.525 51.5574022 26.3376123 51.0351644 26.0580715 50.57 25.698 50.1436972 25.3649373 49.7840721 24.9544219 49.51 24.488 49.2488764 24.0503587 49.0756407 23.5659781 49 23.062L51.547 22.377 51.547 22.377zM54.349 19.597C55.0156534 19.6192204 55.6601759 19.3562465 56.121 18.874 56.581 18.394 56.811 17.749 56.811 16.942 56.811 16.135 56.57 15.495 56.089 15.023 55.6304516 14.5582987 55.0017647 14.3014042 54.349 14.312 54.0115608 14.3088502 53.676604 14.3699366 53.362 14.492 53.0638143 14.6093361 52.7941313 14.7890111 52.571 15.019 52.341 15.261 52.161 15.546 52.044 15.857 51.9130221 16.2024916 51.848228 16.5695451 51.853 16.939 51.853 17.759 52.086 18.407 52.553 18.882 53.0266572 19.3589011 53.6771945 19.6175223 54.349 19.596L54.349 19.597zM63.417 22.377C63.502 22.93 63.782 23.434 64.207 23.799 64.632 24.166 65.183 24.35 65.862 24.351 66.753 24.351 67.439 24.121 67.921 23.661 68.402 23.202 68.643 22.463 68.643 21.444L68.643 20.679C68.3771406 21.0671831 68.0200145 21.3841325 67.603 21.602 67.122 21.878 66.499 22.016 65.736 22.016 65.0725774 22.0218753 64.415009 21.8915188 63.804 21.633 63.2235749 21.3887065 62.6994371 21.0279363 62.264 20.573 61.8253256 20.1086468 61.4797537 19.5644899 61.246 18.97 60.7547593 17.6859906 60.7512016 16.2664556 61.236 14.98 61.466 14.382 61.804 13.831 62.233 13.356 63.1283903 12.3743857 64.4036198 11.8266092 65.732 11.853 66.567 11.853 67.226 12.001 67.709 12.298 68.192 12.595 68.524 12.92 68.706 13.274L68.706 12.04 71.4220562 12.04 71.4220562 21.357C71.424828 22.0582937 71.3209737 22.7559383 71.114 23.426 70.7172639 24.7609662 69.7385386 25.8451718 68.451 26.376 67.758 26.68 66.923 26.832 65.947 26.832 65.2797227 26.8409057 64.6157288 26.7371144 63.983 26.525 63.426104 26.3374086 62.904557 26.0578757 62.44 25.698 62.0136972 25.3649373 61.6540721 24.9544219 61.38 24.488 61.1188764 24.0503587 60.9456407 23.5659781 60.87 23.062L63.417 22.377 63.417 22.377zM66.218 19.597C66.8849975 19.6195082 67.5299409 19.3565109 67.991 18.874 68.451 18.394 68.68 17.749 68.68 16.942 68.68 16.135 68.44 15.495 67.958 15.023 67.4992104 14.5580454 66.8701099 14.3011296 66.217 14.312 65.880311 14.3105052 65.546399 14.372944 65.233 14.496 64.9348143 14.6133361 64.6651313 14.7930111 64.442 15.023 64.212 15.264 64.032 15.55 63.915 15.861 63.7840221 16.2064916 63.719228 16.5735451 63.724 16.943 63.724 17.763 63.957 18.411 64.424 18.886 64.8976169 19.3606602 65.5468188 19.617734 66.217 19.596L66.218 19.596 66.218 19.597zM75.626 22.482L73.097 22.482 73.097 7.116 75.627 7.116 75.627 12.915C75.966 12.505 76.414 12.199 76.92 12.035 77.4121188 11.8638746 77.9289902 11.7746889 78.45 11.771 79.0428626 11.7574774 79.6318428 11.8699563 80.178 12.101 80.641 12.301 81.054 12.601 81.388 12.981 81.715 13.365 81.958 13.814 82.099 14.298 82.2569685 14.8209963 82.3358407 15.3646749 82.3330741 15.911L82.3330741 22.482 79.51 22.482 79.51 16.392C79.5292192 15.8595094 79.3685903 15.3360564 79.054 14.906 78.75 14.51 78.258 14.312 77.579 14.312 76.985 14.312 76.518 14.506 76.179 14.895 75.8329711 15.3001007 75.6376069 15.8123577 75.626 16.345L75.626 22.482 75.626 22.482zM93.641 19.49C93.5108902 19.9478882 93.3065068 20.3813162 93.036 20.773 92.761 21.178 92.42 21.533 92.028 21.827 91.6061716 22.1378636 91.1367537 22.3783136 90.638 22.539 90.072009 22.7205941 89.480363 22.8094086 88.886 22.802 88.1830701 22.8053911 87.4854961 22.6796379 86.828 22.431 86.1879617 22.1882442 85.6048295 21.8161698 85.115 21.338 84.606 20.838 84.205 20.238 83.937 19.576 83.6364756 18.8274932 83.4885791 18.026472 83.502 17.22 83.4908592 16.4426566 83.6350092 15.67091 83.926 14.95 84.1870665 14.3041617 84.5731203 13.7162453 85.062 13.22 85.5328266 12.7476736 86.0917044 12.3722572 86.707 12.115 87.3178126 11.8544061 87.9749211 11.7197193 88.639 11.719 90.266 11.719 91.532 12.203 92.438 13.169 93.344 14.135 93.794 15.456 93.7900264 17.132 93.7900264 17.33 93.783 17.518 93.769 17.694 93.7597736 17.7965027 93.7527719 17.8991936 93.748 18.002L86.276 18.002C86.286 18.331 86.37 18.653 86.519 18.946 86.8095048 19.5226678 87.3053868 19.9696751 87.909 20.199 88.229 20.321 88.566 20.383 88.907 20.38 89.572 20.38 90.093 20.232 90.467 19.935 90.843 19.637 91.126 19.24 91.285 18.788L93.641 19.489 93.641 19.49zM91.009 16.078C90.9940567 15.8200279 90.9401111 15.5658092 90.849 15.324 90.7576451 15.0758709 90.6132933 14.8506413 90.426 14.664 90.2181416 14.4624415 89.9724112 14.3040593 89.703 14.198 89.3751272 14.0710855 89.0254863 14.0099239 88.674 14.018 88.0405248 14.0064039 87.4289918 14.2500081 86.977 14.694 86.604566 15.0616886 86.3782221 15.5520412 86.34 16.074L91.01 16.078 91.009 16.078zM94.727 19.636C94.7045605 18.8101791 95.0364873 18.0142098 95.639 17.449 95.926 17.179 96.26 16.962 96.626 16.813 97.0180123 16.6524669 97.4274633 16.5383576 97.846 16.473L100.415 16.091C100.712 16.049 100.917 15.961 101.03 15.827 101.142946 15.6936624 101.203388 15.5237117 101.2 15.349 101.201061 14.9822079 101.042237 14.633161 100.765 14.393 100.475 14.124 100.033 13.99 99.438 13.99 98.815 13.99 98.338 14.16 98.006 14.499 97.6842365 14.8154938 97.4848058 15.2356089 97.443 15.685L94.939 15.158C94.987637 14.7272638 95.117245 14.3096005 95.321 13.927 95.54 13.507 95.835 13.133 96.191 12.822 96.5927804 12.4790476 97.0531594 12.2114248 97.55 12.032 98.1483322 11.8161986 98.7810448 11.7114808 99.417 11.723 100.131128 11.7061363 100.842463 11.8179176 101.517 12.053 102.043905 12.2366549 102.525609 12.530518 102.93 12.915 103.289 13.268 103.56 13.701 103.721 14.177 103.884 14.663 103.967 15.171 103.965 15.683L103.965 20.823C103.965 21.106 103.979 21.406 104.007 21.724 104.035 22.042 104.064 22.294 104.093 22.478L101.498 22.478C101.46283 22.2848086 101.438128 22.0898576 101.424 21.894 101.403974 21.6718803 101.393298 21.4490168 101.392 21.226 101.091 21.667 100.696 22.036 100.235 22.308 99.733 22.619 99.093 22.775 98.315 22.775 97.8037652 22.7828325 97.2957156 22.6932366 96.818 22.511 96.3988108 22.3509213 96.0134517 22.1134641 95.682 21.811 95.0747712 21.2505541 94.7286781 20.4623314 94.727 19.636L94.727 19.636zM98.908 20.676C99.198 20.676 99.488 20.638 99.768 20.559 100.040234 20.4839459 100.29099 20.345893 100.5 20.156 100.722901 19.9493464 100.896805 19.6954941 101.009 19.413 101.148 19.043 101.213 18.65 101.2 18.256L101.2 17.791 98.844 18.151C98.5058138 18.1957638 98.1864791 18.3327698 97.921 18.547 97.674 18.752 97.55 19.059 97.55 19.47 97.55 19.782 97.672 20.083 97.89 20.308 98.115 20.555 98.455 20.678 98.908 20.678L98.908 20.675 98.908 20.676zM115.837 20.594C115.837 20.945 115.844 21.297 115.858 21.648 115.872 21.999 115.893 22.278 115.922 22.486L113.232 22.486C113.195296 22.3183026 113.170567 22.1482067 113.158 21.977 113.136534 21.7442857 113.125856 21.5107022 113.126 21.277 112.854026 21.7167834 112.469412 22.0758493 112.012 22.317 111.453925 22.613025 110.828447 22.7587976 110.197 22.74 109.489248 22.7487938 108.787613 22.608058 108.138 22.327 107.529614 22.0609925 106.983845 21.6702328 106.536 21.18 106.07709 20.6723952 105.719348 20.0818155 105.482 19.44 104.976536 18.0380797 104.973002 16.5042348 105.472 15.1 105.701885 14.4633733 106.05075 13.8762758 106.5 13.37 107.724794 12.0706201 109.547049 11.5186523 111.287 11.92 111.585 11.99 111.874 12.095 112.147 12.232 112.362014 12.3417803 112.559234 12.483374 112.732 12.652 112.865 12.778 112.976 12.924 113.062 13.086L113.062 7.116 115.837 7.116 115.837 20.594 115.837 20.594zM107.942 17.24C107.942 18.174 108.186 18.903 108.675 19.426 109.156096 19.9275626 109.821005 20.2111234 110.516 20.2111234 111.210995 20.2111234 111.875904 19.9275626 112.357 19.426 112.852 18.899 113.1 18.163 113.1 17.219 113.1 16.285 112.852 15.567 112.357 15.064 111.870289 14.5796687 111.211058 14.308605 110.524428 14.3104709 109.837798 14.3123561 109.180058 14.587017 108.696 15.074 108.196 15.585 107.946 16.307 107.946 17.24L107.942 17.24 107.942 17.24zM117.287 21.386C117.281761 21.0991148 117.393709 20.8224932 117.597 20.62 117.794117 20.4121161 118.069569 20.2967092 118.356 20.302 118.954 20.302 119.439 20.787 119.439 21.386 119.444 21.672 119.329 21.948 119.121 22.145 118.918749 22.3480382 118.64254 22.4599659 118.356 22.455 118.0716 22.4588034 117.797734 22.347504 117.596615 22.1463848 117.395496 21.9452655 117.284197 21.6714001 117.288 21.387L117.287 21.386 117.287 21.386zM120.837 10.004C120.837 9.15320534 121.526705 8.4635 122.3775 8.4635 123.228295 8.4635 123.918 9.15320534 123.918 10.004 123.918 10.8545185 123.228519 11.544 122.378 11.544 121.527481 11.544 120.838 10.8545185 120.838 10.004L120.837 10.004zM121.082 22.47L121.082 12.614 123.673 12.614 123.673 22.469 121.083 22.47 121.082 22.47zM125.024 17.527C125.024 14.732 126.982 12.365 130.227 12.365 133.491 12.365 135.449 14.737 135.449 17.527 135.449 20.317 133.491 22.710005 130.227 22.710005 126.982 22.714 125.024 20.328 125.024 17.527zM132.757 17.527C132.757 15.997 131.859 14.67 130.227 14.67 128.615 14.67 127.723 15.996 127.723 17.527 127.723 19.078 128.62 20.4040141 130.227 20.4040141 131.858 20.409 132.757 19.082 132.757 17.527z"
                />
              </g>
            </svg>

            <div
              css={{
                fontSize:
                  playlist.title.length > 60
                    ? playlist.title.length > 80
                      ? '40px'
                      : '44px'
                    : '54px',
                color: foreground,
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: 1.2,
              }}
            >
              {emojify(playlist.title)}
            </div>
            <div
              css={{
                fontSize: '30px',
                display: 'flex',
                alignItems: 'center',
                marginTop: '30px',
              }}
            >
              {playlist.owner.avatar_url && (
                <img
                  src={
                    playlist.owner.avatar_url.includes('gravatar')
                      ? playlist.owner.avatar_url.replace('//', 'https://')
                      : playlist.owner.avatar_url
                  }
                  css={{borderRadius: '50%', width: '64px', height: '64px'}}
                />
              )}
              {playlist.owner.full_name && (
                <div
                  css={{
                    marginLeft: '16px',
                    color: foreground,
                    fontWeight: 600,
                  }}
                >
                  {playlist.owner.full_name}
                </div>
              )}
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '30px',
                }}
              >
                {lessonsTotal} video lessons
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            css={{
              width: '100%',
              maxWidth: 460,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'black',
            }}
          >
            <div
              css={{
                transform: 'rotateZ(15deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
                margin: '-110px 0 0 -60px',
                zoom: 1.45,
                opacity: 0.9,
              }}
            >
              {itemsToMap.map((lesson) => (
                <img src={lesson.thumb_nail} width="460" key={lesson.id} />
              ))}
            </div>
            <div
              css={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="95"
                viewBox="0 0 95 95"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    cx="47.32"
                    cy="47.32"
                    r="46.32"
                    fill="#FFF"
                    stroke="#051721"
                    strokeWidth="2"
                  />
                  <path
                    fill="#252526"
                    fillRule="nonzero"
                    d="M40.0400015,60.361356 C40.0400015,61.764363 40.9808178,62.2925569 42.1559215,61.5316904 L59.1811153,50.5080682 C60.3497057,49.7514191 60.356219,48.5288657 59.1811153,47.7679992 L42.1559215,36.7443771 C40.9873312,35.987728 40.0400015,36.5221136 40.0400015,37.9147114 L40.0400015,60.361356 Z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              padding: 75,
              width: '100%',
            }}
          >
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={images[0]} width="60px" />
              <h2
                css={{fontSize: 34, marginLeft: 14, color: 'rgba(0,0,0,0.8)'}}
              >
                egghead.io
              </h2>
            </div>

            <h1
              css={{
                fontWeight: 700,
                padding: '56px 0',
                color: 'rgba(0, 0, 0, 0.9)',
                lineHeight: 1.2,
                // fonSize: 58,
                fontSize:
                  playlist.title.length > 30
                    ? playlist.title.length > 45
                      ? playlist.title.length > 55
                        ? 48
                        : 52
                      : 56
                    : 60,
              }}
            >
              {emojify(playlist.title)}
            </h1>
            <h3
              css={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              Course by{' '}
              <span css={{display: 'flex', alignItems: 'center'}}>
                {playlist.owner.avatar_url && (
                  <img
                    src={
                      playlist.owner.avatar_url.includes('gravatar')
                        ? playlist.owner.avatar_url.replace('//', 'https://')
                        : playlist.owner.avatar_url
                    }
                    css={{borderRadius: '50%', margin: '0 16px'}}
                    width="56"
                  />
                )}
                {playlist.owner.full_name}
              </span>
            </h3>
            <h3
              css={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}
            >
              {playlist.items.length} video lessons,{' '}
              {convertTime(playlist.duration)}
            </h3>
          </div>
        </div>
      )}
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
    case 'article':
      markup = renderToStaticMarkup(<Article parsedReq={parsedReq} />)
      break
    case 'podcast':
      const podcast = await axios
        .get(`https://egghead.io/api/v1/podcasts/${parsedReq.text}`)
        .then(({data}) => data)
      const palette = await Vibrant.from(podcast.image_url)
        .getPalette()
        .then((palette) => palette)
      console.log(palette)
      markup = renderToStaticMarkup(
        <Podcast podcast={podcast} palette={palette} parsedReq={parsedReq} />,
      )
      break
    case 'instructor':
      const instructor = await axios
        .get(`https://egghead.io/api/v1/instructors/${parsedReq.text}`)
        .then(({data}) => data)
      const avatarPalette = await Vibrant.from(instructor.avatar_256_url)
        .getPalette()
        .then((palette) => palette)
      console.log(palette)
      markup = renderToStaticMarkup(
        <Instructor
          instructor={instructor}
          palette={avatarPalette}
          parsedReq={parsedReq}
        />,
      )
      break
    case 'playlists':
      const playlist = await axios
        .get(`https://egghead.io/api/v1/playlists/${parsedReq.text}`)
        .then(({data}) => data)

      let itemsToMap = []

      const upperLevelLessons = playlist.items.filter(
        ({thumb_nail}) => !!thumb_nail,
      )

      const subPlaylists = playlist.items.filter(
        (item) => item.type === 'playlist',
      )

      if (!isEmpty(upperLevelLessons)) {
        itemsToMap = upperLevelLessons.slice(0, 3)
      } else if (!isEmpty(subPlaylists)) {
        const {data} = await axios.get(subPlaylists[0].items_url)
        itemsToMap = data.slice(0, 3)
      }

      let subPlaylistsLessonsAmount = 0

      const promises = subPlaylists.map(({items_url}) =>
        axios.get(items_url).then(({data}) => data),
      )
      const results = await Promise.all(promises)
      subPlaylistsLessonsAmount = results
        .map((r) => r.filter(({type}) => type === 'lesson').length)
        .reduce((acc, cur) => acc + cur, 0)

      const lessonsTotal = upperLevelLessons.length + subPlaylistsLessonsAmount

      const playlistPalette = await Vibrant.from(playlist.square_cover_480_url)
        .getPalette()
        .then((palette) => palette)

      markup = renderToStaticMarkup(
        <Playlists
          playlist={playlist}
          parsedReq={parsedReq}
          itemsToMap={itemsToMap}
          palette={playlistPalette}
          lessonsTotal={lessonsTotal}
        />,
      )
      break
    case 'series':
      const resource = await axios
        .get(
          `https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`,
        )
        .then(({data}) => data)
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />,
      )
      break
    case 'lesson':
      const lesson = await axios
        .get(`https://egghead.io/api/v1/lessons/${parsedReq.text}`)
        .then(({data}) => data)
      const tagPalette = await Vibrant.from(lesson.image_256_url)
        .getPalette()
        .then((palette) => palette)
      markup = renderToStaticMarkup(
        <Lesson lesson={lesson} palette={tagPalette} parsedReq={parsedReq} />,
      )
      break
    case 'talk':
      const talk = await axios
        .get(`https://egghead.io/api/v1/lessons/${parsedReq.text}`)
        .then(({data}) => data)
      const talkPalette = await Vibrant.from(talk.instructor.avatar_256_url)
        .getPalette()
        .then((palette) => palette)
      markup = renderToStaticMarkup(
        <Talk lesson={talk} palette={talkPalette} parsedReq={parsedReq} />,
      )
      break
    default:
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />,
      )
  }
  // console.log(markup)
  return markup
}
