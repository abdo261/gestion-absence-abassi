import './header.css'
import HeaderLeft from './shildren/HeaderLeft'
import HeaderRight from './shildren/HeaderRight'



const Header = () => {
  return (
    <div className='header d-flex justify-content-between align-items-center'>
      <HeaderLeft />
      <HeaderRight />
      
    </div>
  )
}

export default Header