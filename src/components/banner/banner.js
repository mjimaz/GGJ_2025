import "./banner.css";

function Banner({ onStart }) {
    return (
        <div className="banner">
            <p className="title">GGJ_2025 Subhunt</p>
            <p className="description">
                Dive into an underwater adventure in Bubble Submarine!
                Navigate your submarine through vibrant ocean depths,
                hunting mischievous fish using strategically launched bubbles.
                Trap, collect, and outsmart elusive sea creatures while avoiding hazards 
                like rocks and currents. Upgrade your sub, master bubble mechanics,
                and become the ultimate undersea hunter in this thrilling game!</p>
            <button onClick={onStart}>Start</button>
        </div>
    )
}

export default Banner;
