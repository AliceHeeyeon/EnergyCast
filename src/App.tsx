import './css/App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import ShortageMap from './sections/ShortageMap';

//Pages
import Home from './sections/Home';

//Components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shortagemap' element={<ShortageMap />} />
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
