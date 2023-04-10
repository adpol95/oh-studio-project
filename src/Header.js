import {Link} from "react-router-dom";
import './App.css';
import {useState} from "react";

function Header() {
  const headerList = [
    {
      id: 1 + '',
      value: 'Home',
      link: '',
      active: true
    },
    {
      id: 2 + '',
      value: 'Profile',
      link: 'profile',
      active: false
    },
    {
      id: 3 + '',
      value: 'Contact',
      link: 'contact',
      active: false
    }
  ]

  const [activeHead, setActiveHead] = useState(headerList);
  const selectHeadSec = (id) => {
    // setActiveHead(activeHead.map(el => { ...el, active: id === el.id } ));
    console.log(activeHead)
  }


  return (
    <header className={'header'}>
      <div className={'mainSec'}>
        {activeHead.map(el => <div onClick={() => selectHeadSec(el.id)} id={el.id} style={{background: el.active ? "white" : ""}}><Link to={'/' + el.link} className={'links'}> {el.value} </Link></div>)}
      </div>
    </header>
  )
}

export default Header;