/** @jsx jsx */
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import axios from "axios"
import { jsx, css, Global } from "@emotion/core"

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
    color: #21262f;
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

function App({ resource, parsedReq }) {
  return (
    <div>
      <h1>-----{parsedReq.text}</h1>
    </div>
  )
}

function InstructorGuide({ parsedReq }) {
  const { text, theme, md, fontSize, images, widths, heights } = parsedReq
  console.log("PARSED REQUEST", parsedReq)
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Helvetica, Arial, Sans-Serif",
          padding: "30px",
          height: "100%",
          backgroundSize: "contain"
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontSize: "86px",
            paddingBottom: "65px"
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
    case "instructor-guide":
      markup = renderToStaticMarkup(<InstructorGuide parsedReq={parsedReq} />)
      break
    case "series":
      const resource = await axios
        .get(
          `https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`
        )
        .then(({ data }) => data)
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
