alert('hi');

var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);

var items = [

  { name: 'Grapes', price: 1.99 },
  { name: 'Strawberries', price: 3.99 },
  { name: 'Kiwi', price: 2.99 }
];
for (var i=0;i<items.length;i++)
{
$('#store').append($.render(itemTemplate, {name: items[i].name, price: items[i].price}))

};

