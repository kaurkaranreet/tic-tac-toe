import React from 'react';
import './App.css';
import GameBoard from './GameBoard/GameBoard';
import { findWinner } from './gameUtils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [{squares: Array(9).fill(null)}],
      stepIndex: 0,
      isXNext: true
    };
  }

  handleClick(i) {
    const steps = this.state.steps.slice(0, this.state.stepIndex + 1);
    const current = steps[steps.length - 1];
    const squares = current.squares.slice();
    if (findWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? "X" : "O";
    this.setState({
      steps: steps.concat([
        {
          squares: squares
        }
      ]),
      stepIndex: steps.length,
      isXNext: !this.state.isXNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepIndex: step,
      isXNext: (step % 2) === 0
    });
  }

  render() {
    const steps = this.state.steps;
    const current = steps[this.state.stepIndex];
    const winner = findWinner(current.squares);

    const moves = steps.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.isXNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <GameBoard
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div id="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
