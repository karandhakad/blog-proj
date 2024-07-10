import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cards from './components/Cards';
import Slides from './components/Slides'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='cards' element={<Cards />}/>
            <Route path='slides' element={<Slides />}/>
            <Route path='form' element={<Form />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
