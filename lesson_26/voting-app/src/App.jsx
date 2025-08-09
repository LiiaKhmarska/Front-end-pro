import { useEffect, useState } from 'react'
import emojies from './emojies.json'
import './App.css'
import { ShowEmojies } from './Components/ShowEmojies';
import { Button } from './Components/Button'
import {Results} from './Components/Results'

function createInitialCounter() {
  const storedCounter = localStorage.getItem('counter');
  if (storedCounter) {
    return JSON.parse(storedCounter)
  } 
    const initialCounter = emojies.map(item => (
    { id: item.id, count: 0 }
  ))  
  return initialCounter
}

function isActiveBtn() {  
  const isActive = localStorage.getItem('isActive');
  if (isActive) {
    return JSON.parse(isActive)
  }
  return false;
}

function App() {
  const [counter, setCounter] = useState(createInitialCounter);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState(isActiveBtn);
  const [winner, setWinner] = useState({})
  
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
    localStorage.setItem('isActive',JSON.stringify(active))
  },[counter, active])

  function handleCounter(id) {
    setCounter(
      counter.map((item) => (
        item.id=== id ? {...item, count:item.count+1}:item
      )))
    setActive(true); 
  }

  function handlerShowResult() {
    setShowResult(true);
    let winnerCount = 0;
    let winnerID = counter[0].id;
    counter.forEach(item => {
      if (item.count > winnerCount) {
        winnerCount = item.count;
        winnerID=item.id
      }
    })
    setWinner({
      emoji: emojies.find((item) => item.id===winnerID).emoji,
      count: winnerCount
    }) 
  }

  function handlerClearResult() {
    setCounter(
      counter.map((item) => (
        { ...item, count: 0 }
      )));
    setShowResult(false);
    setActive(false);   
  }

  return (
    <div className='wrapper'>
      <h1>Голосування за смайлик</h1>
      <ShowEmojies counter={counter} handleCounter={handleCounter} />
      <div className='btn-container'>
        <Button bgc='lightgreen' text='Результати' handelClick={handlerShowResult} disabled={active } />
        <Button bgc='pink' text='Очистити' handelClick={handlerClearResult } disabled={active }/>
      </div>
      {showResult && <Results winner={winner } />}

    </div>
  )
}

export default App
