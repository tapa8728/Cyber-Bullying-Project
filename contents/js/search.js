function searchCaption (data){
			console.log("data is " + JSON.stringify(data));
	$.get("/Cyber-Bullying-Project/data/images.json.data", function (json_data) {
	var json = JSON.parse(json_data);
	//console.log("data --" + JSON.stringify(json, null, 4));
	var search = getObjects(json, 'owner_caption', data.search.toLowerCase()) 
 
		console.log("search result " + JSON.stringify(search));
	
	});
}

//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key , val) {
	console.log("key " + key)
	console.log("val " + val)
	var length = obj.length
	var caption;
	var malicious=[];
	for (var i = 0; i < length; i++){
		console.log(obj.length);
		caption = obj[i].owner_caption.toLowerCase()
		if (wordInString(caption, val)) 
			{
			malicious.push(obj[i])
			}
	}
			console.log(" malicious length" + malicious.length )
			return malicious;
}

function wordInString(s, word){
  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}
