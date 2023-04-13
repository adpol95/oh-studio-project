import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function GoodByeText() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })
  return (
    <div className={'goodByeText'}
         data-aos='fade-up'>
      <p className={'firstText'}>
        Let's work together.
      </p>
      <p className={'secondText'}>
        Get in touch.
      </p>
    </div>
  )
}

export default GoodByeText;