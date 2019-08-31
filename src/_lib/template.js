/** @jsx jsx */
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx} from '@emotion/core'
import {Textfit} from 'react-textfit'

function App({resource, parsedReq}) {
  return (
    <div>
      <h1>-----{parsedReq.text}</h1>
    </div>
  )
}

function InstructorGuide({parsedReq}) {
  const {text, theme, md, fontSize, images, widths, heights} = parsedReq
  console.log('PARSED REQUEST', parsedReq)
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Helvetica, Arial, Sans-Serif',
        height: '100%',
        padding: '30px 27px 25px 27px',
      }}
    >
      <div
        css={{
          display: 'flex',
        }}
      >
        {images.map(image => {
          return (
            <img
              css={{
                width: '75px',
                maxWidth: '100%',
                maxHeight: '75px',
              }}
              src={image}
              alt={text}
            />
          )
        })}
        <h1
          css={{
            paddingLeft: '15px',
          }}
        >
          egghead instructor guide
        </h1>
      </div>
      <div
        css={{
          fontSize: '84px',
          paddingLeft: '45px',
          paddingRight: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {text}
      </div>
    </div>
  )
}

export async function getHtml(parsedReq) {
  let markup

  console.log(parsedReq)
  switch (parsedReq.resourceType) {
    case 'instructor-guide':
      markup = renderToStaticMarkup(<InstructorGuide parsedReq={parsedReq} />)
      break
    case 'series':
      const resource = await axios
        .get(`https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`)
        .then(({data}) => data)
      markup = renderToStaticMarkup(<App resource={resource} parsedReq={parsedReq} />)
      break
    default:
      markup = renderToStaticMarkup(<App resource={resource} parsedReq={parsedReq} />)
  }
  console.log(markup)
  return markup
}
