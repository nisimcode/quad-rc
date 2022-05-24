import Line from "./Line";
import {useEffect, useState} from "react";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import {BACK_URL} from "./etc";
import Result from "./Result";
import Header from "./Header";

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

  const checkWin = (val) => {
    console.log(win)
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
    <>
      <Header />

      <div style={{textAlign: 'center'}}>

      { tries >= 1  &&
      <Line checkWin={checkWin}
            lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={1} dict={dict}/> }

      { tries >= 2 &&
      <Line disabled={tries>2} checkWin={checkWin}
            lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={2} dict={dict}/> }

      { tries >= 3 &&
       <Line disabled={tries>3} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={3} dict={dict} /> }

      { tries >= 4 &&
       <Line disabled={tries>4} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={4} dict={dict} /> }

      { tries >= 5 &&
       <Line disabled={tries>5} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={5} dict={dict} /> }

      { tries >= 6 &&
       <Line disabled={tries>6} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={6} dict={dict} /> }

      { tries >= 7 &&
       <Line disabled={tries>7} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={7} dict={dict} /> }

      { tries >= 8 &&
       <Line disabled={tries>8} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={8} dict={dict} /> }

      { tries >= 9 &&
       <Line disabled={tries>9} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={9} dict={dict} /> }

      { tries >= 10 &&
       <Line disabled={tries>10} checkWin={checkWin}
             lt1={lt1} lt2={lt2} lt3={lt3} lt4={lt4} lt5={lt5} pr={10} dict={dict} /> }

       { (win || (tries > 10 && !win)) &&
        <Result win={win} tries={tries} word={word}/> }

      </div>
    </>
  )
}


