import Line from "./Line";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {BACK_URL} from "./misc";
import Result from "./Result";
import Header from "./Header";
import Button from "react-bootstrap/Button";

const Game = props => {

  const ltr1= useRef("")
  const ltr2 = useRef("")
  const ltr3 = useRef("")
  const ltr4 = useRef("")
  const ltr5= useRef("")
  const word = useRef("")
  const dct = useRef({})
  const def = useRef("")
  const [win, setWin] = useState(false)
  const [toggleDef, setToggleDef] = useState(false)
  const [tries, setTries] = useState(1)

  const getWord = () => {
    axios
      .get(BACK_URL)
      .then(res => {
        ltr1.current = res.data.ltr1
        ltr2.current = res.data.ltr2
        ltr3.current = res.data.ltr3
        ltr4.current = res.data.ltr4
        ltr5.current = res.data.ltr5
        word.current = res.data.word
        dct.current = res.data.dct
        def.current = res.data.def
      })
      .catch(err => window.alert(err))
  }

  const checkWin = (val) => {
    if (val === true) {
      setWin(true)
    } else {
      setTries(tries + 1)
    }
  }

  useEffect(getWord, [])

  return (
    <>
      <Header />

      <div style={{textAlign: 'center'}}>

        {tries >= 1 &&
          <Line checkWin={checkWin} pr={1} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />}

        {tries >= 2 &&
          <Line checkWin={checkWin} pr={2} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />}

        {tries >= 3 &&
          <Line checkWin={checkWin} pr={3} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />}

        {tries >= 4 &&
          <Line checkWin={checkWin} pr={4} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />}

        {tries >= 5 &&
          <Line checkWin={checkWin} pr={5} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />}

        {tries >= 6 &&
          <>
            <Line checkWin={checkWin} pr={6} dct={dct.current} vocab={props.vocab} tries={tries} word={word.current}
                ltr1={ltr1.current} ltr2={ltr2.current} ltr3={ltr3.current} ltr4={ltr4.current} ltr5={ltr5.current} />
            { !toggleDef &&
            <>
              <Button variant='outline-dark' onClick={() => setToggleDef(true)}>Show definition</Button>
              <br/>
            </> }

            { toggleDef &&
            <h5>{def.current}</h5> }

          </>}

        <Result win={win} tries={tries} word={word.current} />

      </div>
    </>
  )
}

export default Game

