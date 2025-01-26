import { useEffect, useState, useRef } from "react";
import "./bubble.css";
import bubble_img from './bubble.png';

let keyboardKeyPressed = false;

function Bubble() {
  let bubbleElement = useRef(null);
  let submarineElement = document.getElementById('submarine');
//   const windowMaxHeight = window.innerHeight;
//   const windowMaxWidth = window.innerWidth;
//   const [top, setTop] = useState(windowMaxHeight - 500);
//   const [left, setLeft] = useState(10);
   

    const handleKeyDown = (event) => {
        let e = event.keyCode;

        if(e != 56 || keyboardKeyPressed === true) return;
       keyboardKeyPressed = true;
              setTop((top) => top = submarineElement.current.style.top);
              etLeft((left) => left = submarineElement.current.style.left);
        keyboardKeyPressed = false;
    }

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
    }, []); 

    

    return (
        <div ref={bubbleElement}
          id="bubble"
          className="bubble"
          style = {{ 
            top: `${top}px`,
            left: `${left}px`,
            background: `url("${bubble_img}") no-repeat`,}}
        ></div>
    )
}

export default Bubble;
