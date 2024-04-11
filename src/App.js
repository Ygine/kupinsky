import Test from "./components/Test"
import Header from "./components/Header"

const App = () => {
  return (
    <>
    <Header />
      <div className="App">
        <header className="App-header">
          <p className="test">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Test />
      </div>
      </>
  );
}

export default App;
