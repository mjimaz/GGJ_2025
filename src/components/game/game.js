import Background from '../background/background';
import Scorecard from '../scorecard/scorecard';
import Submarine from '../submarine/submarine';
import Fish from '../fish/fish';
import { useState, useEffect } from "react";

function Game() {
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        setFishes((previousFishes) => [
          ...previousFishes,
          {
            id: Date.now()
          },
        ]);
      }, 1000); // Create a new div every 1 second
  
      return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);
    return (
        <div className="game">
          <Scorecard></Scorecard>
          <Background></Background>
          <Submarine></Submarine>
          {fishes.map((div) => (
            <Fish key={div.id} />
          ))}
        </div>
    );
  }
  
  export default Game;