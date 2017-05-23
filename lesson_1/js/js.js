var color = ["GOLD", "GRAY", "SILVER"];
var memory = [32, 64, 128];
var ChosenColor;
var ChosenMemory;






function ChoosingPhone(){

	ChosenMemory = prompt('Type the span of the memory you want (' + memory[0] + ', ' + memory[1] + ', '+ memory[2] + ')');

	top:
	while (true) {
		if (ChosenMemory == '') {
		ChosenMemory = prompt("Dude, you've typed nothing! Try again!");	
		} else if (ChosenMemory == null) {
			alert('Good bye :)');
			break
		} else  {
			ChosenMemory = parseInt(ChosenMemory, 10);
			for(var i = 0; i < memory.length; i++) {
				if (ChosenMemory == memory[i]) {
				alert("You've chosen" + " " + ChosenMemory);
				break top;
				}
			}
			ChosenMemory = prompt('Wrong data, type the span of the memory');
		}
	}

	if (ChosenMemory !== null) {

		ChosenColor = prompt('Type the color you want (' + color[0] + ', ' + color[1] + ', '+ color[2] + ')').toUpperCase() ;

		top:
		while (true) {
			if (ChosenColor == '') {
			ChosenColor = prompt("Dude, you've typed nothing! Try again!").toUpperCase();	   // 
			} else if (ChosenColor == null) {
				alert('Good bye :)');
				break
			} else  {
				for(var i = 0; i < color.length; i++) {
					if (ChosenColor == color[i]) {
					alert("You've chosen" + " " + ChosenColor);
					break top;
					}
				}
				ChosenColor = prompt('Wrong data, type the color').toUpperCase() ;
			}
		}

		if (ChosenMemory == 32 && ChosenColor == color[0]) {
			document.write('<img src="img/iphone_6s_gold.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 31$');
		} else if (ChosenMemory == 64 && ChosenColor == color[0]) {
			document.write('<img src="img/iphone_6s_gold.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 61$');
		} else if (ChosenMemory == 128 && ChosenColor == color[0]) {
			document.write('<img src="img/iphone_6s_gold.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else if (ChosenMemory == 32 && ChosenColor == color[1]) {
			document.write('<img src="img/iphone_6s_gray.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else if (ChosenMemory == 64 && ChosenColor == color[1]) {
			document.write('<img src="img/iphone_6s_gray.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else if (ChosenMemory == 128 && ChosenColor == color[1]) {
			document.write('<img src="img/iphone_6s_gray.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else if (ChosenMemory == 32 && ChosenColor == color[2]) {
			document.write('<img src="img/iphone_6s_silver.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else if (ChosenMemory == 64 && ChosenColor == color[2]) {
			document.write('<img src="img/iphone_6s_silver.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} else {
			document.write('<img src="img/iphone_6s_silver.jpg" alt=""><br>Color:' +' '+ ChosenColor + '<br>Memory:' +' '+ ChosenMemory +' '+ 'Gb<br>Prise: 121$');
		} 
		
	}
}
