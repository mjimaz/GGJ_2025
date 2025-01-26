import { useEffect, useState, useRef } from "react";
import "./submarine.css";

function Submarine() {
  let submarineElement = useRef(null);
  const [top, setTop] = useState(10);
  const [left, setLeft] = useState(10);
    function handleKeyDown(event){
		// console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

      let e = event.keyCode;
          
          if (e === 40) { //down function
              // top = top + 10;
              setTop((top) => top + 10);
                 console.log('*** down - top ' + top);
          } else if (e === 37) { //left function
            // left = left - 10;
            setLeft((left) => left - 10);
            console.log('*** left - left ' + left);
          } else if (e === 39) { //right function
          //  left = left+ 10 ;
           setLeft((left) => left + 10);
           console.log('*** right - left ' + left);
          } else if (e === 38) { //up function
            // top = top - 10 ;
            setTop((top) => top - 10);
            console.log('*** up - top ' + top);
          }
    }

    // useEffect(() => {
    //   setCalculation(() => count * 2);
    // }, [top, left]); 

    document.addEventListener('keydown', handleKeyDown);

    return (
        <div ref={submarineElement}
         className="submarine"
        style = {{top: `${top}px`,
          left: `${left}px` 
        }}
        >submarine</div>
    )
}

export default Submarine;
