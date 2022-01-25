import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import { Board } from './components/board';

export function App() {
  return (
    <Container>
      <Row>
        <h1>Tic - Tac - Toe</h1>
        <h2>React Js :: Exercise</h2>
      </Row>
      <Row>
        <Board />
      </Row>
    </Container>
  )
}
