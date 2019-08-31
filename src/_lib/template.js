/** @jsx jsx */
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import axios from 'axios'
import {jsx, css, Global} from '@emotion/core'

const reset = css`
.gatsby-resp-image-wrapper {
  margin-left: 0 !important;
}
h3 {
  font-size: 1.4rem;
  line-height: 1.3;
}
}
h3 {
  margin-bottom: 0.5em;
  margin-top: 1.2em;
}

/* Algolia highlight color */
mark {background: #3C55E4; color: white; }

.twitter-tweet {
  padding: 10px 0 30px;
}
.active {
  color: #3C55E4;
}
  form {
    margin: 0;
  }
  ul, ol {
    list-style-position: inside;
    margin-left: 0;
    li {
      margin-left: 0;
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-style: normal;
    padding: 0;
    margin: 0; 
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: scroll !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    //scroll-behavior: smooth;
    height: 100%;
  }
  body {
    background-color: white;
    height: 100%
  }
  ::selection {
  }
  a {
    color: #3C55E4;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
      color: #3C55E4;
    }
    
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  blockquote {
    border-left: 5px solid #3C55E4;
    padding-left: 1rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-style: italic;
    p {
      line-height: 1.3 !important;
    }
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    white-space: pre;
    padding: 1em;
  }
  code { padding: 2px 4px; }
  figure {
    margin: 0 0 1rem 0;
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: white;
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
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
  const {text, theme, md, fontSize, images, widths, heights} = parsedReq
  console.log('PARSED REQUEST', parsedReq)
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Helvetica, Arial, Sans-Serif',
          padding: '30px',
          height: '100%',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            fontSize: '86px',
            paddingBottom: '65px',
          }}
        >
          {text}
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
