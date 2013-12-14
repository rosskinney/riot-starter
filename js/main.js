

var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, {
  name: 'Dewberry',
  price: 0.15
});

$("#submit").on("click", function(e) {
	e.preventDefault();
	var newStoreHtml = $.render(itemTemplate, {name:$("#name").val(), price:$("#price").val()} );
	$("#store").append(newStoreHtml);
});
