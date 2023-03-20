// highlights menu icon on hover
function mouseOver() {
	this.classList.add("highlight");
}

// unhighlight point on mouse out 
function mouseOut() {
	this.classList.remove("highlight");
}

document.getElementsByTagName("menu").addEventListener('mouseover', mouseOver);
document.getElementsByTagName("menu").addEventListener('mouseout', mouseOut);