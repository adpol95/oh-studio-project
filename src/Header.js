import {Link} from "react-router-dom";
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
    setActiveHead(activeHead.map(el => {
      return {...el, active: id === el.id}
    }));
  }


  return (
    <div className={'header'}>
      <div className={'mainSec'}>
        {activeHead.map(el =>
          <Link to={'/' + el.link}
                onClick={() => selectHeadSec(el.id)} id={el.id} style={{background: el.active ? "white" : ""}}
                className={'headerMainText'}
                key={el.id}
          >
            {el.value}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header;