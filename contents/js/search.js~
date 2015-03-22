function searchCaption (data){
	console.log("data is " + JSON.stringify(data));
	$.get("/Cyber-Bullying-Project/data/images.json.data", function (json_data) {
	var json = JSON.parse(json_data);
	console.log("data --" + JSON.stringify(json, null, 4));
	var search = getObjects(json, 'owner_caption', data.search.toLowerCase()) 
 	$.get("/Cyber-Bullying-Project/js/listImages.jade", function(template){
      if (search !=[]){
      var html = jade.render(template, {captions: search});
      }else{
          html = jade.render(template, {captions: json});
          }
      //console.log("captions is " + {captions})
      $("#list").html(html);
      });
		console.log("search result " + JSON.stringify(search));
	
	});
}

//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key , val) {
	console.log("key " + key)
	console.log("val " + val)
	words = val.split(" ");
	numberOfWords = words.length
	var length = obj.length
	var caption;
	var malicious=[];
	for (var i = 0; i < length; i++){
		caption = obj[i].owner_caption.toLowerCase()
		for(var j = 0; j < numberOfWords; j++ )
		if (wordInString(caption, words[j])) 
			{
			malicious.push(obj[i])
			break;
			}
	}
			console.log(" malicious length" + malicious.length )
			return malicious;
}

function wordInString(s, word){
  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}
