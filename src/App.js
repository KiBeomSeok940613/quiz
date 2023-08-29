import './App.css';
import "./Test.scss"
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/' element={<Detail/>}/>
        
      </Routes>
    </>
  );
}

export default App;
