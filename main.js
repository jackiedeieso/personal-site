let burger = document.getElementById("burger");
	let overlay = document.getElementById("nav");

function onClick() {
	burger.classList.toggle("active");
	overlay.classList.toggle("drop-down");
}

burger.addEventListener("click", onClick);