function anewGame() {
	var x = document.getElementById("videoGames");
	var option = document.createElement("option");
	option.text = "Yokai Watch";
	x.add(option);
}

function aDeleteGame() {
	var x = document.getElementById("videoGames");
	x.remove(x.selectedIndex);
}

function aReplaceGame() {
	document.getElementById("DQ").text = "Already Bought";
}