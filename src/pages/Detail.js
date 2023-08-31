import React, { useState } from 'react'

function Detail({userName, quizList}) {
  const [current, setCurrent] = useState(0)
  const [userAnswer,setAnswer] = useState([])
  const setUserAnswer = (data) => {
    setAnswer([...userAnswer, data])
  }
  const _score = quizList.filter((e,i)=>{
    return e.answer === userAnswer[i]
  }).length
  return (
    <>
      <div className="w-full flex items-center h-full">
        <div className="mx-auto basis-11/12 lg:10/12 flex flex-wrap items-center">
          <div className=""></div>
          <div className="basis-full text-center">
            {
              current < quizList.length ? <>
                
               <h4 className="font-bold to-indigo-500 sm:text-2xl lg:text-3xl text-xl mb-5 bg-white rounded-lg p-5 border">{userName}님 반갑습니다.</h4>
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
              <div>
                <p className='text-lg'>총 <span className="font-bold text-indigo-500 text-xl">{quizList.length}</span>문제 중 <span className="font-bold text-indigo-500 text-xl">{_score}</span>문제를 맞추셨으며, 점수는 <span className="font-bold text-indigo-500 text-xl">{Math.floor((_score / quizList.length)*100)}</span></p>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail