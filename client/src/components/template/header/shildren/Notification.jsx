import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'


const Notification = ({toggle}) => {

  return (
    <span className="sidbar-notification"  onClick={toggle}>
      <IoIosNotificationsOutline size={20} />
      <div className='toggle-notification'>
      </div>
    </span>
  )
}

export default Notification