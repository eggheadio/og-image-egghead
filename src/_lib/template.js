/** @jsx jsx */
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx, css, Global} from '@emotion/core'
import {isEmpty, map, uniqBy} from 'lodash'
import * as Vibrant from 'node-vibrant'
import fonts from './fonts'
import convertTime from './convertTime'
import twemoji from 'twemoji'

const twOptions = {folder: 'svg', ext: '.svg'}
const emojify = (text) => twemoji.parse(text, twOptions)

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
          <img src={images[0]} width='70px' />
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
          <img src={images[0]} width='70px' />
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
            <img src={images[0]} width='60px' />
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
          width='648px'
          heigh='648px'
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
        <div css={{marginRight: 50, width: '100%', maxWidth: 170}}>
          <img
            // tag image
            src={lesson.image_256_url}
            css={{
              borderRadius: 10,
              width: '100%',
              maxWidth: 150,
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
            <img src={images[0]} width='72px' css={{marginRight: 15}} />{' '}
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
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 36 36'
              >
                <path
                  fill='#A1A7BC'
                  d='M18,0 C8.0588745,0 0,8.0588745 0,18 C0,27.9411255 8.0588745,36 18,36 C27.9411255,36 36,27.9411255 36,18 C36,13.2261032 34.1035769,8.64773275 30.7279221,5.27207794 C27.3522672,1.89642313 22.7738968,0 18,0 Z M18,32.4 C10.0470996,32.4 3.6,25.9529004 3.6,18 C3.6,10.0470996 10.0470996,3.6 18,3.6 C25.9529004,3.6 32.4,10.0470996 32.4,18 C32.4,21.8191175 30.8828615,25.4818138 28.1823376,28.1823376 C25.4818138,30.8828615 21.8191175,32.4 18,32.4 Z M23.58,19.134 L19.8,16.956 L19.8,9 C19.8,8.00588745 18.9941125,7.2 18,7.2 C17.0058875,7.2 16.2,8.00588745 16.2,9 L16.2,18.216 C16.2106581,18.3400236 16.2410401,18.4615518 16.29,18.576 C16.3270691,18.682795 16.375338,18.7853664 16.434,18.882 C16.4832556,18.9843112 16.5436188,19.0808923 16.614,19.17 L16.902,19.404 L17.064,19.566 L21.744,22.266 C22.0183252,22.4214848 22.3286825,22.5021777 22.644,22.5000445 C23.4637073,22.505731 24.1837581,21.9569026 24.3954984,21.1649942 C24.6072386,20.3730858 24.2571828,19.5381326 23.544,19.134 L23.58,19.134 Z'
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
                  xmlns='http://www.w3.org/2000/svg'
                  width='42'
                  height='38'
                  viewBox='0 0 42 38'
                >
                  <g fill='#FFB430'>
                    <path d='M38.64,15.54 L32.34,15.54 C31.052,12.488 28,10.36 24.472,10.36 C19.768,10.36 15.932,14.168 15.932,18.844 C15.932,23.52 19.768,27.328 24.472,27.328 C28,27.328 31.024,25.2 32.312,22.176 L38.64,22.176 C40.488,22.176 42,20.692 42,18.844 C42,17.052 40.488,15.54 38.64,15.54 Z M24.472,22.148 C22.652,22.148 21.168,20.692 21.168,18.872 C21.168,17.052 22.652,15.596 24.472,15.596 C26.292,15.596 27.776,17.052 27.776,18.872 C27.776,20.692 26.292,22.148 24.472,22.148 Z' />
                    <path d='M37.912,31.192 L32.984,26.656 C32.62,26.32 32.088,26.348 31.752,26.684 C29.596,28.728 26.6,29.932 23.324,29.652 C18.032,29.232 13.776,24.92 13.412,19.656 C12.964,13.384 17.976,8.12 24.22,8.12 C26.964,8.12 29.456,9.128 31.388,10.808 C31.724,11.116 32.256,11.116 32.592,10.808 L37.604,6.216 C37.8,6.02 37.828,5.712 37.632,5.516 C33.964,1.876 28.84,-0.28 23.212,0.028 C14.364,0.476 7.056,7.056 5.516,15.54 L3.36,15.54 C1.512,15.54 0,17.052 0,18.9 C0,20.748 1.512,22.26 3.36,22.26 L5.516,22.26 C7.112,31.08 14.868,37.8 24.22,37.8 C29.624,37.8 34.468,35.56 37.94,31.976 C38.136,31.752 38.136,31.416 37.912,31.192 Z' />
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
            <img key={tag} src={tag} width='50px' css={{margin: '0 20px'}} />
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
            <img src={images[0]} width='60px' />
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
          width='620px'
          heigh='620px'
          css={{marginRight: 60, borderRadius: 20}}
        />
      </div>
    </React.Fragment>
  )
}

function Playlists({parsedReq, playlist}) {
  const {images} = parsedReq

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
        }}
      >
        <div
          css={{
            width: '100%',
            maxWidth: 460,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
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
            {playlist.items.slice(0, 3).map((lesson) => (
              <img src={lesson.thumb_nail} width='460' key={lesson.id} />
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
              xmlns='http://www.w3.org/2000/svg'
              width='95'
              height='95'
              viewBox='0 0 95 95'
            >
              <g fill='none' fillRule='evenodd'>
                <circle
                  cx='47.32'
                  cy='47.32'
                  r='46.32'
                  fill='#FFF'
                  stroke='#051721'
                  strokeWidth='2'
                />
                <path
                  fill='#252526'
                  fillRule='nonzero'
                  d='M40.0400015,60.361356 C40.0400015,61.764363 40.9808178,62.2925569 42.1559215,61.5316904 L59.1811153,50.5080682 C60.3497057,49.7514191 60.356219,48.5288657 59.1811153,47.7679992 L42.1559215,36.7443771 C40.9873312,35.987728 40.0400015,36.5221136 40.0400015,37.9147114 L40.0400015,60.361356 Z'
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
            <img src={images[0]} width='60px' />
            <h2 css={{fontSize: 34, marginLeft: 14, color: 'rgba(0,0,0,0.8)'}}>
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
            Collection by{' '}
            <span css={{display: 'flex', alignItems: 'center'}}>
              {playlist.owner.avatar_url && (
                <img
                  src={
                    playlist.owner.avatar_url.includes('gravatar')
                      ? playlist.owner.avatar_url.replace('//', 'https://')
                      : playlist.owner.avatar_url
                  }
                  css={{borderRadius: '50%', margin: '0 16px'}}
                  width='56'
                />
              )}
              {playlist.owner.full_name}
            </span>
          </h3>
          <h3 css={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
            {playlist.items.length} video lessons,{' '}
            {convertTime(playlist.duration)}
          </h3>
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
        .then((palette) => palette)
      console.log(palette)
      markup = renderToStaticMarkup(
        <Podcast podcast={podcast} palette={palette} parsedReq={parsedReq} />
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
        />
      )
      break
    case 'playlists':
      const playlist = await axios
        .get(`https://egghead.io/api/v1/playlists/${parsedReq.text}`)
        .then(({data}) => data)
      console.log('playlist: ', playlist)
      markup = renderToStaticMarkup(
        <Playlists playlist={playlist} parsedReq={parsedReq} />
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
        .then((palette) => palette)
      markup = renderToStaticMarkup(
        <Lesson lesson={lesson} palette={tagPalette} parsedReq={parsedReq} />
      )
      break
    default:
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />
      )
  }
  // console.log(markup)
  return markup
}
