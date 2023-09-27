import { pageLinks } from "../data";

import React from 'react'

const PageLinks = () => {
  return (
    <>
    {/*Map fonksiyonu ile sayfa bilgileri data.js'den çekiliyor*/}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link)=>{
            return(
          <li key={link.id}>
            <a href={link.href} className="nav-link">
            {link.text}
            </a>
          </li>
            )
          })}
        </ul>
    </>
  )
}

export default PageLinks;