'use strict'


document.getElementById("timerbutton").onclick = ()=>{
	let output = document.getElementById("timerinput");
	let sec = output.value;
	var message = document.getElementById("warning");
	if(sec === ""){
		message.classList.add("is-active");
		output.value="";
		return false;
	}
	if(sec <= 0){
		message.classList.add("is-active");
		output.value="";
		return false;
	}
	message.classList.remove("is-active");
	let dt = new Date();
	let enddt = new Date(dt.getTime() + sec * 1000);
	
	let cnt = sec;
	const id = setInterval(function(){
			cnt--;
			dt = new Date();
			document.getElementById("time").textContent = cnt;
			if(dt.getTime() >= enddt.getTime()){
				document.getElementById("time").textContent = "時間です";
				clearInterval(id);
				document.getElementById("sound").play();
			}
	}, 1000);
	
};




















