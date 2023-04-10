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
    </div>
  )
}

export default HomePage;