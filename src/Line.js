import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";

export default function Line (props) {

  const [pl1, setPl1] = useState("")
  const [pl2, setPl2] = useState("")
  const [pl3, setPl3] = useState("")
  const [pl4, setPl4] = useState("")
  const [pl5, setPl5] = useState("")
  const [cl1, setCl1] = useState("white")
  const [cl2, setCl2] = useState("white")
  const [cl3, setCl3] = useState("white")
  const [cl4, setCl4] = useState("white")
  const [cl5, setCl5] = useState("white")
  const show = useRef(true)
  const greens = useRef(0)

  const checkLetters = () => {
    const dct = JSON.parse(JSON.stringify(props.dict))

    if (pl1 === props.lt1) {
      setCl1('lightgreen')
      greens.current++
      dct[pl1]--
    }
    if (pl2 === props.lt2) {
      setCl2('lightgreen')
      greens.current++
      dct[pl2]--
    }
    if (pl3 === props.lt3) {
      setCl3('lightgreen')
      greens.current++
      dct[pl3]--
    }
    if (pl4 === props.lt4) {
      setCl4('lightgreen')
      greens.current++
      dct[pl4]--
    }
    if (pl5 === props.lt5) {
      setCl5('lightgreen')
      greens.current++
      dct[pl5]--
    }

    if (pl1 in dct) {
      if (dct[pl1] !== 0) {
        if (cl1 !== 'green') {
          setCl1('yellow')
          dct[pl1]--
        }
      }
    }
    if (pl2 in dct) {
      if (dct[pl2] !== 0) {
        if (cl2 !== 'green') {
          setCl2('yellow')
          dct[pl2]--
        }
      }
    }

    if (pl3 in dct) {
      if (dct[pl3] !== 0) {
        if (cl3 !== 'green') {
          setCl3('yellow')
          dct[pl3]--
        }
      }
    }

    if (pl4 in dct) {
      if (dct[pl4] !== 0) {
        if (cl4 !== 'green') {
          setCl4('yellow')
          dct[pl4]--
        }
      }
    }

    if (pl5 in dct) {
      if (dct[pl5] !== 0) {
        if (cl5 !== 'green') {
          setCl5('yellow')
          dct[pl5]--
        }
      }
    }

    if (pl5 === props.lt5) {
      setCl5('lightgreen')
    }
    if (pl4 === props.lt4) {
      setCl4('lightgreen')
    }
    if (pl3 === props.lt3) {
      setCl3('lightgreen')
    }
    if (pl2 === props.lt2) {
      setCl2('lightgreen')
    }
    if (pl1 === props.lt1) {
      setCl5('lightgreen')
    }

      show.current = false
      checkResult()
    }

    const checkResult = () => {
      if (greens.current === 5) {
        props.checkWin(true)
      } else {
        props.checkWin(false)
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
      <input name={`field-${props.pr}1`} maxLength="1" value={pl1} type="text"
             style={{width: '8%', fontSize: 30, textAlign: "center", margin: 2, backgroundColor: cl1}}
             onChange={(e) => {
               setPl1(e.target.value);
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}2`} maxLength="1" value={pl2} type="text"
             style={{width: '8%', fontSize: 30, textAlign: "center", margin: 2, backgroundColor: cl2}}
             onChange={(e) => {
               setPl2(e.target.value);
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}3`} maxLength="1" value={pl3} type="text"
             style={{width: '8%', fontSize: 30, textAlign: "center", margin: 2, backgroundColor: cl3}}
             onChange={(e) => {
               setPl3(e.target.value);
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}4`} maxLength="1" value={pl4} type="text"
             style={{width: '8%', fontSize: 30, textAlign: "center", margin: 2, backgroundColor: cl4}}
             onChange={(e) => {
               setPl4(e.target.value);
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}5`} maxLength="1" value={pl5} type="text"
             style={{width: '8%', fontSize: 30, textAlign: "center", margin: 2, backgroundColor: cl5}}
             onChange={(e) => {
               setPl5(e.target.value);
               handleFocus(e)
             }}
      />

      { show.current &&
      <Button variant="outline-success"
              style={{marginLeft: 10, marginBottom: '1%', width: '16%', fontSize: 20, textAlign: "center"}}
              onClick={() =>  {checkLetters()}}>
        GO
      </Button> }

    </div>
  )
}


