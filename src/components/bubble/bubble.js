import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble(props) {
    return (
        <div
          id="bubble"
          className="bubble"
          style = {{ 
            top: `${props.top}px`,
            left: `${props.left}px`,
            background: `url("${bubble_img}") no-repeat`,}}
        ></div>
    )
}

export default Bubble;
