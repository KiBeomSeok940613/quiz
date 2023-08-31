import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';



function App() {
  const [userName, setUserName] = useState("");
  const [quizList, setQuizList] = useState(QuizList)
  const quiz = [...QuizList]
  const [selected, setSelected] = useState(2);

  const ChangeEvent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;
    
    switch(true){
      // includes("값") > 해당 문자열이 있는지 체크하는 속성
      // 하기 전 초기화는 필수
      case classValue.includes("name") :
        setUserName(dataValue)
        // console.log("이름값이 바뀜")  
      break;
      case classValue.includes("random") :
        // console.log(dataValue)
        (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{
          return Math.random() - 0.5
        })) : console.log("기본"))
              
        // 0 ~ 1 사이의 값을 변환 > 0.5 의 평균값을 알게 되어 -0.5 ~ 0.5 값으로 랜덤출력
      break;
      case classValue.includes("cnt") :
        console.log("값 바뀜")
      break;
      case classValue.includes("type") :
        (dataValue === "전체"
        ?
        setQuizList([...QuizList])
        :
        setQuizList([...QuizList].filter((e)=>{
          return e.type === dataValue
        }))
        
        
        )
      break;
      default:
        console.log("데이터 없음")
    }
  }
  useEffect(()=>{
    console.log(quizList)
  },[quizList]);

   //로딩후 딱 한번만 실행되는 문법 ,[] - 바뀌는 것 만 []안에 넣으면 된다.
  return (
    <>
      <Routes>
        <Route path='/' element={<Main ChangeEvent={ChangeEvent}  userName={userName} quiz={quiz} selected={selected}  quizList={quizList}/>}/>
        <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
      </Routes>
    </>
  );
}

export default App;