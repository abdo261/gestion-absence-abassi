import React, { useState } from 'react'
import Notification from './Notification'

const HeaderLeft = () => {
  const [openNotification,setOpentNotification] = useState(false)
  const toggle = ()=> setOpentNotification(!openNotification)
  return (
    <div className="header-left">

        <Notification toggle={toggle} size={30}  />

    </div>
  )
}

export default HeaderLeft