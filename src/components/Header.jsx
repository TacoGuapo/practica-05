import logo from '../assets/logo.svg'
import Nav from './Nav'


const Header = () => {
  return (
    <header className="absolute w-full px-6 pt-8  font-Barlow">
      <div className='flex place-content-between'>
      <img src={logo} alt=""/>
      <Nav/>
        </div>  
      
    </header>
  )
}

export default Header
