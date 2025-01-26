import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble(props) {

        const windowMaxWidth = window.innerWidth;
        const [startPosition, setStartPosition] = useState({ top: props.startY, left: props.startX });

        useEffect(() => {
    if(startPosition.startX >= windowMaxWidth) return;
            setStartPosition({ top: startY , left: startX + 10});
        }, [startPosition]); 



    return (
        <div
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
