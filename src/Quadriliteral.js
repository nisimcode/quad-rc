import axios from 'axios'
import {useEffect, useState} from "react";


export default function Quadriliteral () {

  const [three1, setThree1] = useState("")
  const [four1, setFour1] = useState("")
  const [five1, , setFive1] = useState("")
  const [six, setSix] = useState("")
  const [five2, setFive2] = useState("")
  const [four2, setFour2] = useState("")
  const [three2, setThree2] = useState("")

  const getWords = () => {
    axios
      .get("http://127.0.0.1:8000")
      .then(res => {
        setThree1(res.data.three_1)
        setFour1(res.data.four_1)
        setFive1(res.data.five_1)
        setSix(res.data.six)
        setFive2(res.data.five_2)
        setFour2(res.data.four_2)
        setThree2(res.data.three_2)
        }
      )
      .catch(err =>
        console.log(err))
  }

  useEffect(() => {
    getWords()
  }, [])


  return(
    <>

    </>
  )
}