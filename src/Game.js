import Line from "./Line";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import {BACK_URL} from "./etc";
import Result from "./Result";
import Header from "./Header";
import Button from "react-bootstrap/Button";

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
  const [def, setDef] = useState("")
  const [showDef, setShowDef] = useState(false)
  const bottom = useRef(null)

  const checkWin = (val) => {
    console.log(win)
    if (val === true) {
      setWin(true)
      showDefinition(false)
    } else {
      setTries(tries + 1)
      showDefinition(false)
    }
  }

  const showDefinition = (bool) => {
    if (bool === true) {
      setShowDef(true)
    }
    else {
      setShowDef(false)
    }
  }

  const scrollDown = () => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' })
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
        setDef(res.data.def)
      })
      .catch(err => window.alert(err))
  }

  useEffect(getWord, [])
  useEffect(scrollDown)

  return (
    <>
      <Header />

      <div style={{textAlign: 'center'}}>


      { tries >= 1  &&
      <Line checkWin={checkWin} pr={1} dict={dict}
            lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} /> }

      { tries >= 2 &&
      <Line checkWin={checkWin} pr={2} dict={dict}
            lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} /> }

      { tries >= 3 &&
       <Line checkWin={checkWin} pr={3} dict={dict}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} /> }

      { tries >= 4 &&
       <Line checkWin={checkWin} pr={4} dict={dict}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} /> }

      { tries >= 5 &&
        <Line checkWin={checkWin} pr={5} dict={dict}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} /> }

      { tries >= 6 &&
        <>
       <Line checkWin={checkWin} pr={6} dict={dict}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} />
        <p>{def}</p>
       </> }

        <Result win={win} tries={tries} word={word}/>

      </div>
    </>
  )
}


