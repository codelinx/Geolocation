function DOMloaded() {
	document.addEventListener("deviceready", phonegapLoaded, false);
	// Wait for device API libraries to load
	//
	document.addEventListener("deviceready", onDeviceReady, false);
}
function phonegapLoaded() {
	var element = document.getElementById('deviceInfo');

	var name = device.name;
	var cordova = device.cordova;
	var platform = device.platform;
	var uuid = device.uuid;
	var vers = device.version;
	var model = device.model;
	var networkstate = navigator.network.connection.type;

	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WIFI connection';
	states[Connection.CELL_2G] = '2G connection';
	states[Connection.CELL_3G] = '3G connection';
	states[Connection.CELL_4G] = '4G connection';
	states[Connection.NONE] = 'No connection';
	$(function() {
		$("body").append("<h1>Device information</h1>");
	});

	element.innerHTML = 'Device Name: ' + name + '<br />' + 'Device Platform: '
			+ platform + '<br />' + 'Device UUID: ' + uuid + '<br />'
			+ 'Device Version: ' + vers + '<br />' + 'Device Model: ' + model
			+ '<br />' + 'Device Network: ' + states[networkstate] + '<br />'
			+ 'Device PhoneGap Version: ' + cordova + '<br />';
}

// device APIs are available
//
/*
 * function onDeviceReady() { var options = { maximumAge : 600000, timeout :
 * 10000, enableHighAccuracy : true }; watchID =
 * navigator.geolocation.watchPosition(geolocationSuccess, geolocationError,
 * options); $(function() { $("body").append(geolocationSuccess(position));
 * 
 * }); }
 */

/*
 * function geolocation() { // test if the geolocation is available var
 * geolocationoptions = { enableHighAccuracy : true }; watchID =
 * navigator.geolocation.getCurrentPosition(geolocationSuccess,
 * geolocationError, geolocationoptions);
 */

/*
 * function geolocationSuccess(position) { var element =
 * document.getElementById('geolocation'); $(function() { $("body").append("<h1>Device
 * information</h1>");}); element.innerHTML = 'Latitude: ' +
 * position.coords.latitude + '<br />' + 'Longitude: ' +
 * position.coords.longitude + '<br />' + 'Altitude: ' +
 * position.coords.altitude + '<br />' + 'Accuracy: ' +
 * position.coords.accuracy + '<br />' + 'Altitude Accuracy: ' +
 * position.coords.altitudeAccuracy + '<br />' + 'Heading: ' +
 * position.coords.heading + '<br />' + 'Speed: ' + position.coords.speed + '<br />' +
 * 'Timestamp: ' + position.timestamp + '<br />' + '<hr />' +
 * element.innerHTML; } function geolocationError(error) { alert('code: ' +
 * error.code + '\n' + 'message: ' + error.message + '\n'); }}
 */