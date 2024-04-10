import Test from "./components/Test"

function App() {
  return (
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
  );
}

export default App;
