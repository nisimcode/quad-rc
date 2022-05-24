import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from "react-router-dom";
import Game from "./Game";
import Rules from "./Rules"
import {Container} from "react-bootstrap";
import Result from "./Result";

export default function App () {
  return(
    <Container>
      <Routes>
        <Route path="/" element={<Rules/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Container>
  )
}



