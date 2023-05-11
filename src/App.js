import logo from './logo.svg';
import './App.css';
import { CClassTiles } from'./components/CClassTiles'
import { CHeader } from './components/CHeader';
import { CContent } from './components/CContent'

// https://www.youtube.com/watch?v=mWytwmxLKmo
function App() {
  return (
    <div className="App">
      <CHeader/>
      <CClassTiles/>
      <CContent/>
    </div>
  );
}

export default App;
