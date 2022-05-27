import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

export default function Rules () {

  return (
    <>
      <Header />

      <div style={{margin: '5%'}}>

        <h1>Rules:</h1>
        <h3>1. You have to find a randomly chosen 5 letter English word.</h3>
        <h3>2. Click 'GO' to check guess or 'Pass' to forfeit guess.</h3>
        <h3>2. Click 'Clear' to erase all letters or double-click a letter to erase it.</h3>
        <h3>4. Letters that are in their correct places will get a green background.</h3>
        <h3>5. Letters that are in their incorrect places will get a yellow background.</h3>
        <h3>6. Letters that are not in the word will remain with a white background.</h3>
        <h3>7. On your 6th and last guess the word's definition will be shown to help you.</h3>

        <Button variant="outline-primary"
                style={{marginBottom: '1%', marginTop: '5%', width: '30%', fontSize: 20, textAlign: "center"}}
                onClick={() => window.location.href = 'game'}>
          START
        </Button>

      </div>

    </>
)
}