import React from "react";
import Container from '../Container.js'
import Navbar from '../Navbar.js'
import Banner from '../Banner.js'
import ImagePreview from '../ImagePreview.js'

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
          <Container id="images-container">
            <ImagePreview id="test-img" 
                          image="https://fsb.zobj.net/crop.php?r=LSLZZpPnRGEVDYM5_VDnyjMCVGLD17z_Bg3Je17-t5MzUqk_c158PWUb1c_iniJTiQVK10NOBdfLjLqlXwM_uOqWeq1EdSDtmVvUQkDtiPo-cmLxScT8W6GY-zHFpi-TfpT-tvLfJquP1WW9" 
                          aspect="3/4"
                          heading="Heading 1"
                          content="Content 1"></ImagePreview>
            <ImagePreview id="test-img" 
                          image="https://wallpapercave.com/wp/wp2258702.jpg" 
                          aspect="4/3"
                          heading=""
                          content=""></ImagePreview>
          </Container>
        </Container>
      </Container>

    </>
  );
}

export default App;
