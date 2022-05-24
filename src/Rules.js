import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

export default function Rules () {

  return (
    <>
      <Header />

      <div style={{margin: '5%'}}>

        <h1>Rules:</h1>
        <h3>1. You have to find the randomly chosen 5 letter English word</h3>
        <h3>2. Type your guess and click 'GO'</h3>
        <h3>3. Letters that are in their correct places will get a green background</h3>
        <h3>4. Letters that are in their incorrect places will get a yellow background</h3>
        <h3>5. Letters that are not in the word will remain with a white background </h3>
        <h3>6. You have 10 attempts to get it correct</h3>

        <Button variant="outline-primary"
                style={{marginBottom: '1%', marginTop: '5%', width: '25%', fontSize: 20, textAlign: "center"}}
                onClick={() => window.location.href = 'game'}>
          START
        </Button>

      </div>

    </>
)
}