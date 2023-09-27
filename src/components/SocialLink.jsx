import React from 'react'

const SocialLink = ({href, icon, itemClass}) => {
  return (
    <li>              
        <a href={href} target="_blank" rel="noreferrer" className={itemClass}>  {/*Item class props ile değiştirilebilir hale geliyor*/}
          <i className={icon}></i></a>
    </li>
  )
}

export default SocialLink