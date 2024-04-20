import Eval from "./components/Eval";
import Main from "./components/Main";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StatusBar />

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
          <Main />

          <Eval />
        </div>
      </header>
    </div>
  );
}

export default App;
