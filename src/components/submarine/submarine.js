import { useEffect, useState, useRef } from "react";
import "./submarine.css";
import submarine_img from './submarine.png';

let keyboardKeyPressed = false;

function Submarine() {
  let submarineElement = useRef(null);
  const windowMaxHeight = window.innerHeight;
  const windowMaxWidth = window.innerWidth;
  const [top, setTop] = useState(windowMaxHeight - 250);
  const [left, setLeft] = useState(10);
   

    const handleKeyDown = (event) => {
        if(keyboardKeyPressed === true) return;
       keyboardKeyPressed = true;
      let e = event.keyCode;
      let currentTop = submarineElement.current.style.top;
        let currentLeft = submarineElement.current.style.left;
          
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

        keyboardKeyPressed = false;
    }

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
    }, []); 

    

    return (
        <div ref={submarineElement}
          id="submarine"
          className="submarine"
          style = {{top: `${top}px`,
          left: `${left}px`,
          background: `url("${submarine_img}") no-repeat`,
          transform: `rotateY(180deg)`
        }}
        ></div>
    )
}

export default Submarine;
