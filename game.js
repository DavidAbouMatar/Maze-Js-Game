var isOnDiv = false;
isStart = false;
var score = 0;
window.onload = function () {
	
	//dom elements
	var boundary = document.getElementsByClassName("boundary");
	var message = document.getElementById("status");
	var start = document.getElementById("start");
	var end = document.getElementById("end");
	var game = document.getElementById("game");
	
	//when clicked on S
	start.addEventListener('click', function() {
		isOnDiv = true;
		isStart = true;
		//make all divs with boundary class back to origin color
		for (var i = 0; i < boundary.length; i++) {
			boundary[i].style.backgroundColor = "#EEEEEE"; 
		}
		});

	//when cheating outside of map
	game.addEventListener("mouseleave", function () {
		
		//check if start is clicked
		if(isStart){
			score= score- 10;
			message.innerHTML = "no cheating bro: ".concat(score);

			for (var i = 0; i < boundary.length; i++) {
				boundary[i].style.backgroundColor = "red"; 
				}
		}
		isStart = false;
	});

	// when hitting a div
	for (var i = 0; i < boundary.length; i++) {
		boundary[i].addEventListener("mouseover", function() {
			// check if start is clicked
			if(isStart){
				// check if divs are red or not
				if(isOnDiv){
				
					score = score - 10;
					message.innerHTML = "You lose score:".concat(score);
					//isStart = false so that score executes once
					isStart = false;
					for (var i = 0; i < boundary.length; i++) {
						boundary[i].style.backgroundColor = "red";
						}
					
					}
				
				}
		});
	}
		
	//when hitting the end		
	 end.addEventListener("mouseover", function () {
	
		// check if start is clicked
		if(isStart){
			score = score +5;
			message.innerHTML = "You won score:".concat(score);
			for (var i = 0; i < boundary.length; i++) { 
				boundary[i].style.backgroundColor = "green"; 
			}
			isStart = false;
		}



    });
	
	
}
	
	

		

		
			