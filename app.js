const moonPath =
            "M15 27.9534C15 43.1413 27.5 55.4534 27.5 55.4534C12.3122 55.4534 0 43.1413 0 27.9534C0 12.7656 12.3122 0.453441 27.5 0.453441C27.5 0.453441 15 12.7656 15 27.9534Z";
const sunPath =
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;
darkMode.addEventListener('click', () => {
	const timeline = anime.timeline({
		duration : 750,
		easing : "easeOutExpo"
	});
timeline.add({
		targets : ".sun",
		d : [{value: toggle ? sunPath : moonPath}]
	})

.add({
    targets: "#darkMode",
    rotate: toggle ? 0 : 320
  }, '-= 350') 
.add({
    targets: "section",
    backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
    color: toggle? "rgb(22,22,22)" : "rgb(255,255,255)"
  }, '-= 150');
toggle = !toggle;
});

