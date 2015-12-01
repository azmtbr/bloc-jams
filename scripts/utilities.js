

function forEach(array, callback) {
	for (var i = 0, len = array.length; i < len; i++){
		callback(array[i]);
	}
}