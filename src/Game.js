import Line from "./Line";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import {BACK_URL} from "./etc";
import Result from "./Result";
import Header from "./Header";
import Button from "react-bootstrap/Button";

export default function Game(props) {

  const [ltr1, setLtr1] = useState("")
  const [ltr2, setLtr2] = useState("")
  const [ltr3, setLtr3] = useState("")
  const [ltr4, setLtr4] = useState("")
  const [ltr5, setLtr5] = useState("")
  const [word, setWord] = useState("")
  const [tries, setTries] = useState(1)
  const [dct, setDct] = useState({})
  const [def, setDef] = useState("")
  const [win, setWin] = useState(false)


  const getWord = () => {
    axios
      .get(BACK_URL)
      .then(res => {
        setLtr1(res.data.ltr1)
        setLtr2(res.data.ltr2)
        setLtr3(res.data.ltr3)
        setLtr4(res.data.ltr4)
        setLtr5(res.data.ltr5)
        setWord(res.data.word)
        setDct(res.data.dct)
        setDef(res.data.def)
      })
      .catch(err => window.alert(err))
  }

   const checkWin = (val) => {
    console.log(win)
    if (val === true) {
      setWin(true)
    } else {
      setTries(tries+1)
    }
  }

  useEffect(getWord, [])

  return (
    <>
      <Header />

      <div style={{textAlign: 'center'}}>

        { tries >= 1  &&
        <Line checkWin={checkWin} pr={1} dct={dct} vocab={props.vocab}
              ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }

        { tries >= 2 &&
        <Line checkWin={checkWin} pr={2} dct={dct} vocab={props.vocab}
               ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }

        { tries >= 3 &&
         <Line checkWin={checkWin} pr={3} dct={dct} vocab={props.vocab}
                ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }

        { tries >= 4 &&
         <Line checkWin={checkWin} pr={4} dct={dct} vocab={props.vocab}
                ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }

        { tries >= 5 &&
          <Line checkWin={checkWin} pr={5} dct={dct} vocab={props.vocab}
                ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }

        { tries >= 6 &&
          <>
         <Line checkWin={checkWin} pr={6} dct={dct} vocab={props.vocab}
                ltr1={ltr1} ltr2={ltr2} ltr3={ltr3} ltr4={ltr4} ltr5={ltr5} /> }
          <p>{def}</p>
         </> }

          <Result win={win} tries={tries} word={word}/>

      </div>
    </>
  )
}


