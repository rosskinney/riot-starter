(function () {

  /* *
   * list-item-list.js
   * This presenter displays and manages the list of list items.
   */

  var $root = $('#main .list-items')
    , itemTemplate = $("#templates .list-item").html()
  ;

// - - - - - - - - - - - - -
// View (HTML) Interactions
// - - - - - - - - - - - - -

  // When the user clicks the destroy button, delete the item via the model
  $root.on('click', '.list-item .destroy', function (e) {
    e.preventDefault();

    // Get the index of the target list item
    var index = $(this).closest('.list-item').index();
    console.log('closest', $(this).closest('.list-item'));
    // Destroy it via the model
    listItems.destroy(index);
  });

  /*/ DELETE THIS LINE FOR THE EXTENSION
  // When the user clicks the edit button, toggle the 'edit' css
  // class; the css does all the heavy lifting
  $root.on('click', ".list-item .edit", function () {
    $(this).closest('.list-item').toggleClass('edit');
  });
  /**/

// - - - - - - - - - -
// Model Interactions
// - - - - - - - - - -

  // When we hear the 'create' event, that means a new list item was just
  // created. In this app, list items are created in list-item-form.js
  listItems.on('create', function (item) {
    // Because we're given the item object as event data, rendering is easy!
    var newListItemHtml = $.render(itemTemplate, item);
    $root.append(newListItemHtml);
  });

  // When we hear the 'destroy' event, that means a list item was just
  // deleted. We need to remove it from the page to reflect that fact
  listItems.on('destroy', function (itemIndex) {
    $('.list-item', $root).eq(itemIndex).remove();
  });

})();
