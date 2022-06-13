function chamar_api(){
	var url = "http://colormind.io/api/";
	var data = {
		model : "default",
		input : ["N","N","N","N","N"]
	}
	
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var palette = JSON.parse(http.responseText).result;
			mudarCor(palette);
		}
	}

	http.open("POST", url, true);
	http.send(JSON.stringify(data));
	

}

function mudarCor(cores){

	for (var i = 0; i < 5; i++){
		document.getElementById("cor" + (i + 1)).style.backgroundColor = "rgb(" + cores[i][0] + "," + cores[i][1] + "," + cores[i][2] + ")";
	}
	
}