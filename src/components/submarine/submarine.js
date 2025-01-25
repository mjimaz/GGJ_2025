function Submarine() {
    function handleKeyDown(event){
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

      const e = event.keyCode;
          const submarineElement = document.getElementById("submarine");
      
          if (e == 40) { //down function
              submarineElement.style.top = (parseInt(submarineElement.style.top)) + 10 + "px";
          } else if (e == 37) { //left function
            submarineElement.style.left = (parseInt(submarineElement.style.left)) - 10 + "px";
          } else if (e == 39) { //right function
            submarineElement.style.left = (parseInt(submarineElement.style.left)) + 10 + "px";
          } else if (e == 38) { //up function
            submarineElement.style.top = (parseInt(submarineElement.style.top)) - 10 + "px";
          }
    }
    document.addEventListener('keydown', handleKeyDown);

    return (
        <div id="submarine">submarine</div>
    )
}

export default Submarine;
