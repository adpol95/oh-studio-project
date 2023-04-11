
import diagonalArrow from './media/logos/top-right.png';

function HomePage() {

  return (
    <div>

      <div className={'welcomeText'}>
        <p className={'bigText'}>
          A brand and product designer working with clients globally
        </p>
        <div className={'listOfWelcomeText'}>
          <div style={{background: "white"}}>Expertise</div>
          <div>Branding</div>
          <div>Product</div>
          <div>Design Systems</div>
        </div>
      </div>

      <div className={'homeMainContent'}>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Aire </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Correlated </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Channel 5 </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Ronald Abram </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <video
            src="https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
            autoPlay
            loop
            playsInline
            muted
          />
          <div className={'whenHover'}>
            <p> Propeller </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Schuh </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Paperstreet </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <video
            src="https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
            autoPlay
            loop
            playsInline
            muted
          />
          <div className={'whenHover'}>
            <p> OH.SUPPLY </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Monokel Eyewear </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Lawtrades </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <img src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
               alt="Error"/>
          <div className={'whenHover'}>
            <p> Baselworld </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
        <div className={'mainImg'}>
          <video
            src="https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
            autoPlay
            loop
            playsInline
            muted
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
          }}
          />
          <div className={'whenHover'}>
            <p> NYCB </p>
            <div className={'imgInsideSign'}>
              <img src={diagonalArrow} alt="Error"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

