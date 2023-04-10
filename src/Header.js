import { Link } from "react-router-dom";
import './header.css';
function Header() {
  return (
    <header className={'header'}>
      <div className='leftSec'>
        <Link to={'/'}> Home </Link>
      </div>
      <div className='midlSec'>
        <Link to={'profile'}> Profile </Link>
      </div>
      <div className='righSec'>
        <Link to={'contact'}> Contact </Link>
      </div>
    </header>
  )
}

export default Header;