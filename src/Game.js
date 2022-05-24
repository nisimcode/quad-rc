import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BACK_URL} from "./etc";
import Button from "react-bootstrap/Button";
import Line from "./Line";

export default function Game() {

  const [lt1, setLt1] = useState("")
  const [lt2, setLt2] = useState("")
  const [lt3, setLt3] = useState("")
  const [lt4, setLt4] = useState("")
  const [lt5, setLt5] = useState("")
  const [word, setWord] = useState("")
  const [tries, setTries] = useState(1)
  const [win, setWin] = useState(false)
  const [dict, setDict] = useState({})
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const checkWin = (val) => {
    if (val === true) {
      setWin(true)
    } else {
      setTries(tries + 1)
    }
  }

  const getWord = () => {
    axios
      .get(BACK_URL)
      .then(res => {
        setLt1(res.data.l1)
        setLt2(res.data.l2)
        setLt3(res.data.l3)
        setLt4(res.data.l4)
        setLt5(res.data.l5)
        setWord(res.data.word)
        setDict(res.data.dct)
      })
      .catch(err => window.alert(err))
  }

  useEffect(() => {
    getWord()
  }, [])


  return (
    <div >

      { !show &&
      <div style={{margin: '5%'}}>
      <h1>Wordwhile</h1>
      <h2>1. You have to find a 5 letter English word</h2>
      <h2>2. Type your guess and click 'GO'</h2>
      <h2>3. Letters that are in their correct places will get a green background</h2>
      <h2>4. Letters that are in their incorrect places will get a yellow background</h2>
      <h2>5. Letters that are not in the word will remain with a white background </h2>
      <h2>6. You have 6 attempts to get it correct</h2>
      <br/>
      <Button variant="outline-primary"
              style={{marginBottom: '1%', width: '25%', fontSize: 20, textAlign: "center"}}
              onClick={() => setShow(true)}>
        START
      </Button>
      </div> }

      { show &&
      <div style={{textAlign: 'center'}}>
      { tries >= 1  &&
      <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={1} dict={dict}/> }

      { tries >= 2 &&
      <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={2} dict={dict}/> }

      { tries >= 3 &&
       <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={3} dict={dict} /> }

      { tries >= 4 &&
       <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={4} dict={dict} /> }

      { tries >= 5 &&
       <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={5} dict={dict} /> }

      { tries >= 6 &&
       <Line checkWin={checkWin} lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={6} dict={dict} /> }

      { win &&
        <p style={{color: 'blue', fontSize: 30, paddingTop: '1%', display:"inline"}}> YOU WIN!!!</p> }


      { tries > 6 && !win &&
        <p style={{color: 'red', fontSize: 30, paddingTop: '1%', display:"inline"}}> YOU LOSE!!!</p> }


      { (win || (tries > 6 && !win)) &&
        <div >
        <p style={{fontSize: 30}}>The word was: {word} </p>
        <Button variant="outline-primary"
            style={{marginBottom: '1%', width: '25%', fontSize: 20, textAlign: "center", display:"inline"}}
            onClick={navigate('')}>
        RESTART
        </Button>
        </div>}

      </div> }

    </div>
  )
}