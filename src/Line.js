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

  const checkLetters = () => {

    const guess = plc1 + plc2 + plc3 + plc4 + plc5
    const checkWord = (str) => /^[a-zA-Z]+$/.test(str)

    if (!checkWord(guess)) {
      window.alert('Enter letters only')
    } else if (!(props.vocab.includes(guess))) {
      window.alert('Enter real words only')
      } else {
          const dct = JSON.parse(JSON.stringify(props.dct))

          if (plc1 === props.ltr1) {
            setClr1('lightgreen')
            dct[plc1]--
          }
          if (plc2 === props.ltr2) {
            setClr2('lightgreen')
            dct[plc2]--
          }
          if (plc3 === props.ltr3) {
            setClr3('lightgreen')
            dct[plc3]--
          }
          if (plc4 === props.ltr4) {
            setClr4('lightgreen')
            dct[plc4]--
          }
          if (plc5 === props.ltr5) {
            setClr5('lightgreen')
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
          if (guess === props.word) {
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
      <input name={`field-${props.pr}1`} maxLength="1" value={plc1} type="text" disabled={props.tries !== props.pr}
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr1}}
             onDoubleClick={() => setPlc1("")}
             onChange={(e) => {
               setPlc1(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}2`} maxLength="1" value={plc2} type="text" disabled={props.tries !== props.pr}
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr2}}
             onDoubleClick={() => setPlc2("")}
             onChange={(e) => {
               setPlc2(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}3`} maxLength="1" value={plc3} type="text" disabled={props.tries !== props.pr}
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr3}}
             onDoubleClick={() => setPlc3("")}
             onChange={(e) => {
               setPlc3(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}4`} maxLength="1" value={plc4} type="text" disabled={props.tries !== props.pr}
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr4}}
             onDoubleClick={() => setPlc4("")}
             onChange={(e) => {
               setPlc4(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}5`} maxLength="1" value={plc5} type="text" disabled={props.tries !== props.pr}
             style={{width: '12%', fontSize: 32, textAlign: "center", margin: 2, backgroundColor: clr5}}
             onDoubleClick={() => setPlc5("")}
             onChange={(e) => {
               setPlc5(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />

      <Button variant="outline-success" disabled={props.tries !== props.pr}
              style={{marginLeft: 5, marginBottom: '1%', width: '10%',
                fontSize: 18, textAlign: "center", paddingLeft: 5}}
              onClick={checkLetters}>
        GO
      </Button>

      <Button variant="outline-warning" disabled={props.tries !== props.pr}
              style={{marginLeft: 5, marginBottom: '1%', width: '10%',
                fontSize: 12, textAlign: "center", paddingLeft: 5}}
              onClick={() => {setPlc1(""); setPlc2(""); setPlc3(""); setPlc4(""); setPlc5("")}}>
        Clear
      </Button>

      <Button variant="outline-danger" disabled={props.tries !== props.pr}
              style={{marginLeft: 5, marginBottom: '1%', width: '10%',
                fontSize: 12, textAlign: "center", paddingLeft: 5}}
              onClick={() => props.checkWin(false)}>
        Pass
      </Button>
    </div>
  )
}
