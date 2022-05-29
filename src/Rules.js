import Button from "react-bootstrap/Button";
import Header from "./Header";

const Rules = () => (
  <>
    <Header />
    <div style={{margin: '5%'}}>
      <h2>Rules:</h2>
      <h4>1. You have to find a randomly chosen 5 letter English word.</h4>
      <h4>2. Click 'GO' to check guess or 'Pass' to pass current guess.</h4>
      <h4>3. Click 'Clear' to erase all letters or click a letter to erase it.</h4>
      <h4>4. Letters that are in their correct places will get a green background.</h4>
      <h4>5. Letters that are in their incorrect places will get a yellow background.</h4>
      <h4>6. Letters that are not in the word will get a red background.</h4>
      <h4>7. On your 6th and last guess the word's definition will be shown to help you.</h4>
      <Button variant="outline-primary"
              style={{marginBottom: '1%', marginTop: '5%', width: '30%', fontSize: 20, textAlign: "center"}}
              onClick={() => window.location.href = 'game'}>
        START
      </Button>
    </div>
  </>
)

export default Rules