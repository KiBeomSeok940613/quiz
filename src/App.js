import './App.css';
import "./Test.scss"
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useState } from 'react';
import { data } from 'autoprefixer';
import QuizList from './components/Quizlist';

 


function App() {
  console.log(QuizList)
    const QuizLength = QuizList.length;
    console.log(QuizLength)
    const [userName, setUserName] = useState("");
    const[quizList, setQuizList] = useState(QuizList);
    const ChangeName = (data) =>{
      setUserName(data);
    }    
    
    return (
    <>
      <Routes>
        <Route path='/' element={<Main ChangeName={ChangeName} userName={userName} QuizLength={QuizLength} quizList={quizList}/>}/>
        <Route path='/quiz' element={<Detail quizList={quizList} userName={userName}/>}/>
        
      </Routes>
    </>
  );
}

export default App;
