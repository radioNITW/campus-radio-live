LOCATIONS = [ // http://stream1.bestfmbudapest.hu/bestfm_nyiregyhaza.mp3
	{
		"id": 3,
		"name": "NIT, Warangal",
		"videoId": "iGeuCueiYgc",
		"radio": {
			"url": "http://s18.myradiostream.com:9676/;stream.nsv",
			"name": "NIT Warangal Radio"
		},
		"startTime": 13
	},
	{
		"id": 10,
		"name": "IIT, Kanpur",
		"videoId": "tZWW3mVp6MA",
		"radio": {
			"url": "http://stream1.bestfmbudapest.hu/bestfm_nyiregyhaza.mp3",
			"name": "IIT Kanpur Radio"
		},
		"startTime": 29
	},
	{
		"id": 7,
		"name": "NIT, Trichy",
		"videoId": "SLKgz63zK5s",
		"radio": {
			"url": "https://au1.fastcast4u.com/proxy/dzcwbfih_relay?mp=/1",
			"name": "NIT Trichy Radio"
		},
		"startTime": 57
	},
	{
		"id": 9,
		"name": "IIT, Delhi",
		"videoId": "6Pgyr0H1XLQ",
		"radio": {
			"url": "https://playerservices.streamtheworld.com/api/livestream-redirect/977_HITSAAC_SC",
			"name": "IIT Delhi Radio"
		},
		"startTime": 01
	},
	{
		"id": 4,
		"name": "AIIMS, Delhi",
		"videoId": "4JBI2RCmAII",
		"radio": {
			"url": "https://ice08.fluidstream.net/ibiza.aac",
			"name": "AIIMS Delhi Radio"
		},
		"startTime": 10
	},
	{
		"id": 6,
		"name": "IIM, Bangalore",
		"videoId": "yyXDs7LZpz8",
		"radio": {
			"url": "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3",
			"name": "IIM Bangalore Radio"
		},
		"startTime": 19
	}
]

function chooseRandomLocation() {
	const availableLocations = LOCATIONS.filter(({id}) => state.currentLocation ? state.currentLocation.id !== id : true);
	
	return availableLocations[Math.floor(Math.random() * availableLocations.length)];
}

function changeLocation(locationId) {
	if (state.currentLocation && locationId == state.currentLocation.id)
		return;

	changeLoadingState(true);

	const location = LOCATIONS.find(location => location.id == locationId);

	state.currentLocation = location;

	changeLocationText(location.name);
	changeVideoSource(location.videoId);
	changeRadio(location.radio);
	toggleActiveClassOnLocation(location.id);
	playVideo(location);
}
