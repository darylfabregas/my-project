function readTextFile() {
	document.getElementById("GenButton").setAttribute("disabled","disabled");
	var file = "https://raw.githubusercontent.com/darylfabregas/my-project/master/appnanacodes.txt";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, true);	
	rawFile.onreadystatechange = function () {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				var codeList = allText.split(",");
				var getcode = codeList[Math.floor(Math.random()*codeList.length)];
				document.getElementById("getcode").value = getcode;
			}
		}
	}
	rawFile.send(null);
	document.getElementById("GenButton").removeAttribute("disabled");
}