import React from 'react';
import Box from '../Box/Box';

class GameBoard extends React.Component {
  renderBox(i) {
    return (
      <Box
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div className="board-row">
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div className="board-row">
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}

export default GameBoard;