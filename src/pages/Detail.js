import React, { useState } from 'react'
import QuizList from '../components/Quizlist'

function Detail({userName, quizList,}) {
  
  
  const [current, setCurrent] = useState(0)
  const [userAnswer,setAnswer] = useState(["Hyper Text Markup Language","alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시합니다.","태그는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다.","flex-item들은 기본적으로 Axis 기준으로 정렬되기 때문에 기본 방향은 위쪽에서 아래쪽이야!",])
  const setUserAnswer = (data) => {
    setAnswer([...userAnswer, data])
  }
  const _score = quizList.filter((e,i)=>{
    return e.answer === userAnswer[i]
  }).length

  const currentPer = Math.floor(((current+1)/ quizList.length)*100);
  
  

  return (
    <>
    
      <div className="w-full flex items-center h-full">
        <div className="mx-auto basis-11/12 lg:10/12 flex flex-wrap items-center h-full">
          <div className="basis-full text-center">
            {
              current < quizList.length ? <>
              
              {/* 화면의 모든문제가 우선 출력 되어야함 (quizList) */}
                
               <h4 className="font-bold to-indigo-500 sm:text-2xl lg:text-3xl text-xl mb-5 bg-white rounded-lg p-5 border">{userName}님 반갑습니다.</h4>
               <div className="w-full h-5 bg-gray-50 rounded-full mb-5 relative">
                <div className="absolute h-full bg-green-500 left-0 top-0 rounded-full transition-all duration-1000" style={{width: `${currentPer}%`}}></div>
                <div className="absolute right-0 top-0">{`${currentPer}%`}</div>
               </div>
                <div className="flex flex-wrap justify-between p-5 border rounded-lg bg-white">
                  <p>{quizList[current].question}</p>
                  <span>{current+1} / {quizList.length}문제</span>
                </div>
                <div className="flex flex-wrap justify-between  border rounded-lg bg-white mt-5">
                  <ul className='basis-full'>
                    <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={()=>{setCurrent(current+1);setUserAnswer(quizList[current].view.number1)}}><span className='border-r basis-1/12'>1번</span><span className='basis-11/12'>{quizList[current].view.number1}</span></li>
                    <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={()=>{setCurrent(current+1);;setUserAnswer(quizList[current].view.number2)}}><span className='border-r basis-1/12'>2번</span><span className='basis-11/12'>{quizList[current].view.number2}</span></li>
                    <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={()=>{setCurrent(current+1);;setUserAnswer(quizList[current].view.number3)}}><span className='border-r basis-1/12'>3번</span><span className='basis-11/12'>{quizList[current].view.number3}</span></li>
                    <li className='py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={()=>{setCurrent(current+1);;setUserAnswer(quizList[current].view.number4)}}><span className='border-r basis-1/12'>4번</span><span className='basis-11/12'>{quizList[current].view.number4}</span></li>
                  </ul>
                </div>
              </> :
              <>
               <div>
                <p className='text-lg'>총 <span className="font-bold text-indigo-500 text-xl">{quizList.length}</span>문제 중 <span className="font-bold text-indigo-500 text-xl">{_score}</span>문제를 맞추셨으며, 점수는 <span className="font-bold text-indigo-500 text-xl">{Math.floor((_score / quizList.length)*100)}</span></p>  
                <p className='flex items-center mt-4'>
                정답맞춤 : <span className='bg-orange-500 w-5 h-5 block mr-5 ml-2'></span>
                선택한답 : <span className='bg-indigo-500 w-5 h-5 block mr-5 ml-2'></span>
                오답일경우정답 : <span className='bg-pink-500 w-5 h-5 block mr-5 ml-2'></span>
               </p>              
               </div>
               {
               quizList.map((e,i)=>{
                return(
                  <ul key={i} className='mt-5 bg-white rounded-2xl'>
                    <li className='flex justify-between flex-wrap'>
                    {/*  반복문을 사용할땐 키값 입력 */}

                    <p className='bg-gray-50 font-bold basis-full border text-base py-4 rounded-lg '>{e.question}</p>
                    {
                      Object.entries(e.view).map((el,index)=>{
                        return (
                          <p className={`font-bold mt-5 basis-[49.5%] border text-base py-4 rounded-lg ${e.answer === el[1] && userAnswer[i] === e.answer ? 'bg-orange-500': e.answer === el[1] ? "bg-indigo-300": el[1] === userAnswer[i] ? 'bg-indigo-500' : "bg-white"}`}>{el[1]}</p>
                          // 
                        )
                      })
                    }
                    </li>
                  </ul>
                )
                  })
                }
                   
                
              </>
             
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail