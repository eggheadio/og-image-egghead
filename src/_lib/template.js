/** @jsx jsx */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import axios from "axios";
import { jsx, css, Global } from "@emotion/core";

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
`;

function App({ resource, parsedReq }) {
  return (
    <div>
      <h1>-----{parsedReq.text}</h1>
    </div>
  );
}

function InstructorGuide({ parsedReq }) {
  const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
  console.log("PARSED REQUEST", parsedReq);
  return (
    <React.Fragment>
      <Global styles={reset} />
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Helvetica, Arial, Sans-Serif",
          padding: "30px",
          height: "100%",
          backgroundImage:
            "url('https://ucd971579456f81b56e88e13871a.previews.dropboxusercontent.com/p/thumb/AAnFEvfynsXk8578yFF2iyI6VErPqptjv_WwTmAlWhT1bGQ8-NLWMheev4T45lQlXovBw5lbq4QbmD9J2za_pZtwJvyRsJEEjBwJIa1ugWabQDJ9jYVVcT5Ysw2yf9e68dKQwSc53oWp23aisC-Fcif4Fp72cEFvavNOAta2ftKmpEJFkuLms629pfhm6TAfp5DUlkkL_1gVf0UspWUynnmWLpqwk6ilP8xqcKAn5Gwic5d_TzL6GLSfD06uoalTKTlPtxb7xlDpuC1z-ff3LQR48m7XbRHcUFrLcfOPgLg5M7-XbqI7R4dUlkMhNuZ2-q9yKIddHfhsYeJRCWb8Ls-FdQ6G14U62KbiUJ9oj52wC0IXk-vT7xmCDlRHITZqerC_Qk9Oovr1KkfVouz8s8KA/p.png')",
          backgroundSize: "contain"
        }}
      >
        <div
          css={{
            color: "white",
            backgroundColor: "#FF2D55",
            fontSize: "60px",
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.25,
            padding: "16px 32px",
            maxWidth: "80%"
          }}
        >
          {text}
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getHtml(parsedReq) {
  let markup;

  console.log(parsedReq);
  switch (parsedReq.resourceType) {
    case "instructor-guide":
      markup = renderToStaticMarkup(<InstructorGuide parsedReq={parsedReq} />);
      break;
    case "series":
      const resource = await axios
        .get(
          `https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`
        )
        .then(({ data }) => data);
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />
      );
      break;
    default:
      markup = renderToStaticMarkup(
        <App resource={resource} parsedReq={parsedReq} />
      );
  }
  console.log(markup);
  return markup;
}
