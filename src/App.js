import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from "react-router-dom";
import Game from "./Game";
import Rules from "./Rules"
import {Container} from "react-bootstrap";
import Result from "./Result";
import axios from 'axios'
import {VOCAB_URL} from "./misc";
import Note from "./Note";

const App = () => {

  const [vocab, setVocab] = useState([])
  const getVocabulary =  () => {
    axios
      .get(VOCAB_URL)
      .then(res => {
        setVocab(res.data)
      })
      .catch(err => {
        window.alert(err)
      })
  }

  useEffect(getVocabulary, [])

  return(
    <Container>
      <Routes>
        <Route path="/" element={<Rules/>} />
        <Route path="/game" element={<Game vocab={vocab}/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/contact" element={<Note/>} />
      </Routes>
    </Container>
  )
}

export default App



