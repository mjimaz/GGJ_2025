import Background from '../background/background';
import Scorecard from '../scorecard/scorecard';
import Submarine from '../submarine/submarine';

function Game() {
    return (
        <div className="game">
          <Scorecard></Scorecard>
          <Background></Background>
          <Submarine></Submarine>
        </div>
    );
  }
  
  export default Game;