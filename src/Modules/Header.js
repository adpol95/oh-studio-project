import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

function Header() {
  const location = useLocation();
  console.log(location.pathname)
  const headerList = [
    {
      id: 1 + '',
      value: 'Home',
      link: '',
    },
    {
      id: 2 + '',
      value: 'Contact',
      link: 'contact',
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
                onClick={() => selectHeadSec(el.id)} id={el.id}
                style={{
                  background: location.pathname.replace(/./, '') === el.link
                    ? "white" : ""
                }}
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