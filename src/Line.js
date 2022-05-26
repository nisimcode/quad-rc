import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";

export default function Line (props) {

  const [plc1, setPlc1] = useState("")
  const [plc2, setPlc2] = useState("")
  const [plc3, setPlc3] = useState("")
  const [plc4, setPlc4] = useState("")
  const [plc5, setPlc5] = useState("")
  const [clr1, setClr1] = useState("white")
  const [clr2, setClr2] = useState("white")
  const [clr3, setClr3] = useState("white")
  const [clr4, setClr4] = useState("white")
  const [clr5, setClr5] = useState("white")
  const [show, setShow] = useState(true)
  const [greens, setGreens] = useState(0)

  const checkLetters = () => {

    const word = plc1 + plc2 + plc3 + plc4 + plc5
    const checkWord = (str) => /^[a-zA-Z]+$/.test(str)
    console.log(props.vocab)

    if (!checkWord(word)) {
      window.alert('Enter letters only')
      console.log(word)
    } else if (!(props.vocab.includes(word))) {
      window.alert('Enter real words only')
      } else {
          const dct = JSON.parse(JSON.stringify(props.dct))

          if (plc1 === props.ltr1) {
            setClr1('lightgreen')
            setGreens(greens+1)
            dct[plc1]--
          }
          if (plc2 === props.ltr2) {
            setClr2('lightgreen')
            setGreens(greens+1)
            dct[plc2]--
          }
          if (plc3 === props.ltr3) {
            setClr3('lightgreen')
            setGreens(greens+1)
            dct[plc3]--
          }
          if (plc4 === props.ltr4) {
            setClr4('lightgreen')
            setGreens(greens+1)
            dct[plc4]--
          }
          if (plc5 === props.ltr5) {
            setClr5('lightgreen')
            setGreens(greens+1)
            dct[plc5]--
          }

          if (plc1 in dct) {
            if (dct[plc1] !== 0) {
              if (clr1 !== 'lightgreen') {
                setClr1('yellow')
                dct[plc1]--
              }
            }
          }
          if (plc2 in dct) {
            if (dct[plc2] !== 0) {
              if (clr2 !== 'lightgreen') {
                setClr2('yellow')
                dct[plc2]--
              }
            }
          }

          if (plc3 in dct) {
            if (dct[plc3] !== 0) {
              if (clr3 !== 'lightgreen') {
                setClr3('yellow')
                dct[plc3]--
              }
            }
          }

          if (plc4 in dct) {
            if (dct[plc4] !== 0) {
              if (clr4 !== 'lightgreen') {
                setClr4('yellow')
                dct[plc4]--
              }
            }
          }

          if (plc5 in dct) {
            if (dct[plc5] !== 0) {
              if (clr5 !== 'lightgreen') {
                setClr5('yellow')
                dct[plc5]--
              }
            }
          }
          setShow(false)
          if (greens === 5) {
            props.checkWin(true)
          } else {
            props.checkWin(false)
          }
    }
  }

  const handleFocus = (e) => {
    const {maxLength, value, name} = e.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    const fieldEnd = fieldIntIndex + 5
    if (value.length >= maxLength) {
      if (fieldIntIndex < fieldEnd) {
        const nextField = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        )
        if (nextField !== null) {
          nextField.focus();
        }
      }
    }
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <input name={`field-${props.pr}1`} maxLength="1" value={plc1} type="text"
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr1}}
             onChange={(e) => {
               setPlc1(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}2`} maxLength="1" value={plc2} type="text"
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr2}}
             onChange={(e) => {
               setPlc2(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}3`} maxLength="1" value={plc3} type="text"
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr3}}
             onChange={(e) => {
               setPlc3(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}4`} maxLength="1" value={plc4} type="text"
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr4}}
             onChange={(e) => {
               setPlc4(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}5`} maxLength="1" value={plc5} type="text"
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr5}}
             onChange={(e) => {
               setPlc5(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />

      { show &&
      <Button variant="outline-success"
              style={{marginLeft: 10, marginBottom: '1%', width: '16%', fontSize: 20, textAlign: "center"}}
              onClick={checkLetters}>
        GO
      </Button> }

    </div>
  )
}


