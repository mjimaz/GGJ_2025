import { useEffect, useState, useRef } from "react";
import "./submarine.css";
import submarine_img from './submarine.png';
import Bubble from '../bubble/bubble';

function Submarine() {
  let submarineElement = useRef(null);
  const windowMaxHeight = window.innerHeight;
  const windowMaxWidth = window.innerWidth;
  const [top, setTop] = useState(windowMaxHeight - 500);
  const [left, setLeft] = useState(10);
  const [topBubble, setTopBubble] = useState(-10);
  const [leftBubble, setLeftBubble] = useState(-10);

  const handleKeyDown = (event) => {
    const animate = () => {
      let e = event.keyCode;
      let currentTop = submarineElement.current.style.top;
      let currentLeft = submarineElement.current.style.left;

      if(e === 66) { // b key
        setTopBubble((topBubble) => topBubble = currentTop+ 10);
        setLeftBubble((leftBubble) => leftBubble = currentLeft + 10);
      }

      if (e === 40) { //down function
        if(currentTop + 10 >= windowMaxHeight) return;
        setTop((top) => top + 10);
      } else if (e === 37) { //left function
        if(currentLeft - 10 < 0) return;
        setLeft((left) => left - 10);
      } else if (e === 39) { //right function
        if(currentLeft + 10 >= windowMaxWidth) return;
        setLeft((left) => left + 10);
      } else if (e === 38) { //up function
        if(currentTop - 10 < 0) return;
        setTop((top) => top - 10);
      }
    }

    requestAnimationFrame(animate);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []); 

  return (
    <div>
    <div ref={submarineElement}
      id="submarine"
      className="submarine"
      style = {{top: `${top}px`,
      left: `${left}px`,
      background: `url("${submarine_img}") no-repeat`,
      transform: `rotateY(180deg)`
    }}></div>
    <Bubble top = {topBubble} left = {leftBubble}></Bubble>
    </div>
  )
}

export default Submarine;
