import Eval from "./components/Eval";
import SkuSearch from "./components/SkuSearch";
import StatusBar from "./components/StatusBar";
import VendorList from "./components/VendorList";
import { AppProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <header className="App-header">
          <StatusBar />

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
            <div className="flex flex-col gap-4">
              <SkuSearch />
              <VendorList />
            </div>

            <Eval />
          </div>
        </header>
      </AppProvider>
    </div>
  );
}

export default App;
