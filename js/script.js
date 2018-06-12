//Adds video button features

 $('video').mediaelementplayer({
        features: ['playpause','current', 'progress', 'duration','volume', 'fullscreen'],
      });

 // DOM variables
 let myVideo = document.getElementById('myVideo');
 let text = document.querySelectorAll('.text');
 let warpperText = document.getElementById('warpperText');

// Clicking play triggers the transcript

myVideo.addEventListener("timeupdate", () => {

	for (let i = 0; i < text.length; i++){
		if(myVideo.currentTime > text[i].getAttribute('data-start') && myVideo.currentTime <= text[i].getAttribute('data-end')){
			text[i].classList.add("redColorText");
		}
		else {
			text[i].classList.remove("redColorText");
		}
	}
});

//Clicking subtitle triggers video in necessary time

wrapperText.addEventListener('click',(e) => {
	if (e.target.tagName == ('SPAN')){
		myVideo.currentTime = +e.target.getAttribute('data-start') + .1; // after adding 0.1sec only one subtitle is red
		myVideo.play();
	}
});
