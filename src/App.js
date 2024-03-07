import React, { useState } from "react";

/* 
    *** Step 5 to 8, Lifting state up, taking turns (X & O), and declaring a winner
    *** Lifting the state from Square() to Board()
    *** Add function handleClick(i) in Board()
    *** Add props onSquareClick()
    *** Add state xIsNext
    *** Add function calculateWinner(Squares) to declare a winner
    *** Show the status in Board()
*/

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    function handleClick(i) {
        if(squares[i]) {
            return;
        }
        const nextSquares = squares.slice();    
        nextSquares[i] = xIsNext?'X':'O';
        setXIsNext(!xIsNext);
        setSquares(nextSquares);
    }

    // function calculateWinner(Squares) {

    // }

    return (
        <div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
}