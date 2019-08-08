import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import axios from 'axios'

function App({ resource, parsedReq }) {
  return (
    <div>
      <h1>{resource.title}</h1>
    </div>
  )
}

export async function getHtml(parsedReq) {
  const resource = await axios.get(`https://egghead.io/api/v1/${parsedReq.resourceType}/${parsedReq.text}`).then(({ data }) => data)

  return renderToStaticMarkup(
    <App resource={resource} parsedReq={parsedReq} />
  )
}

