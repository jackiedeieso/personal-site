burger.addEventListener("click", function() {
	burger.classList.toggle("active")
	});

nav .burger.active span:nth-child(2) {
  transform: translateY(15px);
}

nav .burger.active span:nth-child(3) {
  transform: translateY(60px);
}

