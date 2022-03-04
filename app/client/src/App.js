import React from "react";
import logo from './logo.svg';
import './App.css';
import Container from './Container.js'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
      <Container id="main-container">Content here</Container>
    </div>
  );
}

export default App;
