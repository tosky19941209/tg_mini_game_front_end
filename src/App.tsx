import Routers from './routers';
import './App.css';
import Providers from "../src/provider/index"
function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <Providers >
        <Routers />
      </Providers>
    </div>
  );
}

export default App;
