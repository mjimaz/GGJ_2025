import Background from '../background/background';
import Scorecard from '../scorecard/scorecard';
import Submarine from '../submarine/submarine';
import Fish from '../fish/fish';
import fishCollision from './fish-collision.mp3';
import { useState, useEffect, useRef } from "react";

function Game() {
    const gameRef = useRef(null);
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        let submarine = document.getElementById('submarine');
        let fishElements = document.getElementsByClassName('fish');
       
        if (fishElements == null) {
          fishElements = [];
        }

        for (let index = 0; index < fishElements.length; ++index) {
          const fishElement = fishElements[index];
          const collided = isColliding(fishElement, submarine);
          if (collided) {
            const audio = document.createElement('audio');
            const source = document.createElement('source');
            source.type= "audio/mpeg";
            source.src= fishCollision;
            audio.appendChild(source);
            gameRef.current.appendChild(audio);
            audio.play();

            fishElement.parentElement.removeChild(fishElement);
            setTimeout(() => gameRef.current.removeChild(audio), 10000);
          }
        }

        setFishes((previousFishes) => [
          ...previousFishes,
          {
            id: Date.now()
          },
        ]);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    function isColliding(el1, el2) {
      if (!el1 || !el2) {
        return false;
      }

      const rect1 = el1.getBoundingClientRect();
      const rect2 = el2.getBoundingClientRect();

      return rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top;
    }

    return (
        <div className="game" ref={gameRef}>
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