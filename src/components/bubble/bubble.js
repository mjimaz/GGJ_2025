import { useEffect, useState } from "react";
import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble(props) {
const divRef = useRef(null);
        const windowMaxWidth = window.innerWidth;
        const [startPosition, setStartPosition] = useState({ top: props.startY, left: props.startX });

        useEffect(() => {
            if(startPosition.startX >= windowMaxWidth) return;
                setStartPosition({ top: props.startY , left: props.startX + 10});
                if (divRef.current) {
                    divRef.current.style.left = `${startPosition.left}px`;
                }
            }, [startPosition]); 



    return (
        <div
          ref={divRef}
          id="bubble"
          className="bubble"
          style = {{ 
            top: `${startPosition.top}px`,
            left: `${startPosition.left}px`,
            background: `url("${bubble_img}") no-repeat`,}}
        ></div>
    )
}

export default Bubble;
