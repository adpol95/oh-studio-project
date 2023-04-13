import AOS from 'aos';
import "aos/dist/aos.css";

function Footer() {
  AOS.refreshHard();
  AOS.init();

  return (
    <div className={'footerMain'}>
      <div className={'goodByeText'}
           data-aos='fade-up'>
        <p className={'firstText'}>
          Let's work together.
        </p>
        <p className={'secondText'}>
          Get in touch.
        </p>
      </div>
      <div className={'bottomFooterGroup'}>
        <div className={'startGroupFooter'}>
          <p>© Oli Harris 2023</p>
        </div>
        <div className={'endGroupFooter'}>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Mail</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
