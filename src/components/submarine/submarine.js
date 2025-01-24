function Submarine() {
    function handleKeyDown(event){
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    }
    document.addEventListener('keydown', handleKeyDown);

    return (
        <div>submarine</div>
    )
}

export default Submarine;
