import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Square } from "./square";

export function Board() {
  const [playerOne, setPlayerOne] = useState(true);
  const [Squares, setSquares] = useState([]);

  useEffect(() => {
    setSquares([
      { id: 0, player: null },
      { id: 1, player: null },
      { id: 2, player: null },
      { id: 3, player: null },
      { id: 4, player: null },
      { id: 5, player: null },
      { id: 6, player: null },
      { id: 7, player: null },
      { id: 8, player: null },
    ]);
  }, []);

  // const squares = [
  //   //
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  // ];

  const players = {
    playerOne: {
      squaresClicked: [],
    },
    playerTwo: {
      squaresClicked: [],
    },
  };

  const handleClick = (id, ev) => {
    setPlayerOne(!playerOne);

    const newSquaresState = [...Squares];

    const clickedSquare = newSquaresState.find((s) => s.id === id);
    clickedSquare.player = playerOne ? "One" : "Two";

    setSquares(newSquaresState);
  };

  const handleReset = () => {
    const newGame = [...Squares];
    newGame.find((sq) => (sq.player = null));
    setSquares(newGame);
  };

  return (
    <Container>
      <h3>
        Who's Next?: <b>{`${playerOne ? "Player One" : "Player Two"}`}</b>{" "}
      </h3>
      <Button variant="danger" onClick={handleReset}>
        Reset all
      </Button>
      <Row>
        {Squares.map((sq) => {
          return (
            <Col key={sq.id} xs={4}>
              {
                <Square
                  index={sq.id}
                  Square={sq}
                  Playing={playerOne ? "One" : "Two"}
                  Clicked={handleClick}
                />
              }
            </Col>
          );
        })}
      </Row>
      {/* {squares.map((sqrs, i) => {
        return (
          <Row key={i}>
            {sqrs.map((sq) => {
              return (
                <Col key={sq.id}>
                  {<Square index={sq.id} Clicked={handleClick} />}
                </Col>
              );
            })}
          </Row>
        );
      })} */}
    </Container>
  );
}
