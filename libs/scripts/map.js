function init() {
	var mapMinZoom = 2;
	var mapMaxZoom = 5;
	var map = L.map('map', {
		maxZoom: mapMaxZoom,
		minZoom: mapMinZoom,
	}).setView([0, 0], mapMaxZoom);

	var mapBounds = new L.LatLngBounds(
		map.unproject([0, 5376], mapMaxZoom),
		map.unproject([6656, 0], mapMaxZoom));
		map.fitBounds(mapBounds);

	var five  = L.tileLayer('img/tiles/6/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	});

	var four  = L.tileLayer('img/tiles/4/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	});

	var three  = L.tileLayer('img/tiles/3/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	});

	var two  = L.tileLayer('img/tiles/2/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	});

	var one  = L.tileLayer('img/tiles/1/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	});

	var zero  = L.tileLayer('img/tiles/0/{z}/{x}/{y}.png', {
		minZoom: mapMinZoom, maxZoom: mapMaxZoom,
		bounds: mapBounds,
		noWrap: true,
		tms: false
	}).addTo(map);

	var baseLayers = {
		"5": five,
		"4": four,
		"3": three,
		"2": two,
		"1": one,
		"-1": zero
	};

	var overlays;

	L.control.layers(baseLayers, overlays,{collapsed: false}).addTo(map);

	// map.on('baselayerchange', function(e) {
	// 	console.log('sd');
	// });

	// map.on('zoomend', function(e) {
	// 	console.log(map.getZoom());
	// });
}

$(document).ready(function () {
	var map, mapWidth, mapHeight, layerControls, layerControlsHeight;

	map = $('.map');
	mapHeight = map.height();
	mapWidth = map.width();

	init()
});
