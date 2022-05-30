import Button from "react-bootstrap/Button";
import {useState} from "react";

const Result = props => {

  const [toggleWord, setToggleWord] = useState(false)

  return (
    <>
      { props.win &&
        <p style={{color: 'blue', fontSize: 28, paddingTop: '5%', display: "inline"}}> YOU WIN!!!</p>
      }

      { props.tries > 6 && !props.win &&
        <p style={{color: 'red', fontSize: 28, paddingTop: '5%', display: "inline"}}> YOU LOSE!!!</p>
      }

      { props.tries > 6 && !props.win && toggleWord &&
          <p style={{fontSize: 28, color: 'purple'}}>The word was: {props.word} </p>
      }

      { props.tries > 6 && !props.win && !toggleWord &&
        <>
          <br/>
          <Button variant='outline-secondary' onClick={() => setToggleWord(true)}>Show word</Button>
        </>
      }
    </>
  )
}

export default Result
