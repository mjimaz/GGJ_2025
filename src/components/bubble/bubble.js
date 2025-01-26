import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble() {
    return (
        <div
          id="bubble"
          className="bubble"
          style = {{ 
            background: `url("${bubble_img}") no-repeat`,}}
        ></div>
    )
}

export default Bubble;
