import { useEffect, useState, useRef } from "react";

function Submarine() {
  let submarineElement = useRef(null);
  let top = 0;
  let left = 0;
    function handleKeyDown(event){
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

      let e = event.keyCode;
          
          if (e == 40) { //down function
              top = top + 10;
          } else if (e == 37) { //left function
            left = left - 10;
          } else if (e == 39) { //right function
           left = left+ 10 ;
          } else if (e == 38) { //up function
            top = top - 10 ;
          }
    }
    document.addEventListener('keydown', handleKeyDown);

    return (
        <div ref={submarineElement}
        style = {{top: '${top}px',
          left: '${left}px' 
        }}
        >submarine</div>
    )
}

export default Submarine;
