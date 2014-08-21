//Define Settings
var setting = {
  popGroup:"Pop_4"
}
//Change Population Group
$('#pop').buttonset().on('change', function() {
	// Get value of radio
	var popu = $('input[name="pop"]:checked').attr('id')
	
	// Change the population settings
	setting.popGroup = popu
})

$('#view').buttonset().on('change', function() {
	// Get value of radio
	var vw = $('input[name="view"]:checked').attr('id')
	
	// Do something about it
	setting.viewType = vw
})

var selected = [];
$('#checkboxes input:checked').each(function() {
    selected.push($(this).attr('name'));
});



nestBYpop = d3.nest().key(function(d) {
	var popGroup = 'Pop_4'
	return d.popGroup})
    nestedPopData = nestBYpop.entries(rawData)