const Result = props => (
  <>
    { props.win &&
      <p style={{color: 'blue', fontSize: 30, paddingTop: '5%', display:"inline"}}> YOU WIN!!!</p> }
    { props.tries > 6 && !props.win &&
      <p style={{color: 'red', fontSize: 30, paddingTop: '5%', display:"inline"}}> YOU LOSE!!!</p> }
    { ((props.win) || (props.tries > 6 && !props.win)) &&
      <p style={{fontSize: 30, color: 'purple'}}>The word was: {props.word} </p> }
  </>
)


export default Result
