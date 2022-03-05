import React from "react";
import Container from '../Container.js'
import Navbar from '../Navbar.js'
import Banner from '../Banner.js'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message));
  }, []);

  const bannerImage = "https://iso.500px.com/wp-content/uploads/2015/08/travel_cover-1500x1000.jpeg"

  return (
    <>
      {/*<p>
        {!data ? "Loading..." : data}
      </p>*/}
      <Container id="main-container">
        <Navbar id="side-nav" heading="My Gallery2"></Navbar>
        <Container id="content-container">
          <Banner image={bannerImage} heading="Welcome" description="To my gallery2" id="main-banner"></Banner>
        </Container>
      </Container>

    </>
  );
}

export default App;
