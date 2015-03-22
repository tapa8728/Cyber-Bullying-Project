$('#search').on('keyup', function(e){
	if(e.keyCode === 13) {
		var parameters = { search: $(this).val()};
		searchCaption(parameters)
	}
});

// function alert() {
	$(document).ready(function() {
		$('.onecell').click(function() {
			alert("hihihi");
		});
	})

// }
