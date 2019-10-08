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
          padding: "40px",
          height: "100%"
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0
          }}
        >
          <img
            css={{ height: "75px" }}
            src="https://d2ddoduugvun08.cloudfront.net/items/1h0S2B3Q2F2x3l181j1D/eggo.svg?X-CloudApp-Visitor-Id=1972787"
            alt=""
          />
          <h1
            css={{
              paddingLeft: "15px"
            }}
          >
            egghead instructor guide
          </h1>
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            width: "100%"
          }}
        >
          <div
            css={{
              width: "440px",
              flexShrink: 0
            }}
          >
            <img
              css={{
                display: "block",
                width: "100%"
              }}
              src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/167/square_480/EGH_JSthis_1000.png"
              alt=""
            />
          </div>
          <div
            css={{
              flexGrow: 1,
              marginLeft: "40px"
            }}
          >
            <h2
              css={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: 1.1,
                margin: 0
              }}
            >
              Understand JavaScript's this Keyword in Depth
            </h2>
            <div
              css={{ marginTop: "30px", display: "flex", alignItems: "center" }}
            >
              <div css={{ flexShrink: 0, marginRight: "24px" }}>
                <img
                  src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/110/square_128/mpk-oct-2018-500x500.jpg"
                  alt=""
                  css={{ borderRadius: "50%", width: "80px", flexShrink: 0 }}
                />
              </div>
              <h3
                css={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  margin: 0
                }}
              >
                Marius Schulz
              </h3>
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
