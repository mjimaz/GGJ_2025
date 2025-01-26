import Background from '../background/background';
import Scorecard from '../scorecard/scorecard';
import Submarine from '../submarine/submarine';
import Banner from '../banner/banner';
import Fish from '../fish/fish';
import Missile from '../missile/missile';
import fishCollision from './fish-collision.mp3';
import backgroundAudio from './background-1.mp3';
import explosionAudio from './explosion.mp3';
import { useState, useEffect, useRef } from "react";

function Game() {
    const gameRef = useRef(null);
    const backgroundAudioRef = useRef(null);
    const [startGame, setStartGame] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [fishes, setFishes] = useState([]);
    const [missiles, setMissiles] = useState([]);

    useEffect(() => {
      const collisionCheckInterval = setInterval(() => {
        const fishElements = document.getElementsByClassName('fish');
        const missiles = document.getElementsByClassName('missile');

        for (let index = 0; index < fishElements.length; ++index) {
          const fishElement = fishElements[index];
          const fishCollided = isSubmarineColliding(fishElement);
          if (fishCollided) {
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

        for (let index = 0; index < missiles.length; ++index) {
          const missile = missiles[index];
          const missileCollided = isSubmarineColliding(missile);
          if (missileCollided) {
            const audio = document.createElement('audio');
            const source = document.createElement('source');
            source.type= "audio/mpeg";
            source.src= explosionAudio;
            audio.appendChild(source);
            gameRef.current.appendChild(audio);
            audio.play();
            setGameOver(true);

            setTimeout(() => {
              setStartGame(false);
              setTimeout(() => gameRef.current.removeChild(audio), 10000);
            }, 3000);
          }
        }
      }, 100);

      const fishInterval = setInterval(() => {
        setFishes((previousFishes) => [
          ...previousFishes,
          {
            id: Date.now()
          },
        ]);
      }, 1000);

      const missileInterval = setInterval(() => {
        setMissiles((previousMissiles) => [
          ...previousMissiles,
          {
            id: Date.now()
          },
        ]);
      }, 5000);
  
      return () => {
        clearInterval(fishInterval);
        clearInterval(missileInterval);
        clearInterval(collisionCheckInterval);
      };
    }, []);

    function isSubmarineColliding(el1) {
      const submarine = document.getElementById('submarine');
      if (!el1 || !submarine) {
        return false;
      }

      const rect1 = el1.getBoundingClientRect();
      const rect2 = submarine.getBoundingClientRect();

      return rect1.left < (rect2.right * 0.5) &&
        rect1.right > (rect2.left * 0.5) &&
        rect1.top < (rect2.bottom * 0.5) &&
        rect1.bottom > (rect2.top * 0.5);
    }

    function onGameStart() {
      setStartGame(true);
      setTimeout(() => backgroundAudioRef.current.play(), 500);
    }

    function onGameOver() {
      setFishes([]);
      setMissiles([]);
      setGameOver(false);
      onGameStart();
    }

    return (
        <div className="game" ref={gameRef}>
          {startGame ? (
            (
              <div>
                <Scorecard></Scorecard>
                <Background></Background>
                <Submarine gameOver={gameOver}></Submarine>
                {fishes.map((div) => (
                  <Fish key={div.id} />
                ))}
                {missiles.map((div) => (
                  <Missile key={div.id} gameOver={gameOver} />
                ))}
                <audio id="audio" ref={backgroundAudioRef} loop> 
                  <source src={backgroundAudio} type="audio/mpeg" />
                </audio>
              </div>
            )
          ) : (<Banner onStart={onGameStart} onGameOver={onGameOver} gameOver={gameOver}></Banner>)}
        </div>
    );
  }
  
  export default Game;