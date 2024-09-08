import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShortageMap from './sections/ShortageMap';

//Pages
import Home from './sections/Home';
import GraphDashboard from './sections/GraphDashboard';

//Components
import Header from './components/Header';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shortagemap' element={<ShortageMap />} />
        <Route path='/graphdashboard' element={<GraphDashboard />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
