	function expandIt(whichAb, whichMore) {
		if (whichAb.style.display == 'none') {
			whichAb.style.display = (whichAb.style.display == "none") ? "" : "none";
			whichMore.innerHTML = "&#9662 Abstract";
		}
		else {
			whichAb.style.display = 'none';
			whichMore.innerHTML = "&#9656 Abstract";
		}
	}


function expandIt2(whichAb,whichMore) {
	if (whichAb.style.display=='none') {
		whichAb.style.display = (whichAb.style.display == "none" ) ? "" : "none";
		whichMore.innerHTML="&#9662 Less";	}
	else {
		whichAb.style.display ='none';
		whichMore.innerHTML="&#9656 More";
	}
}
