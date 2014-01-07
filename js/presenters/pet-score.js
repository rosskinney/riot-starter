(function () {

  
  window.PetScorePresenter = function (options) {

    var $root = options.root;
    var comments = options.comments;
    var likes = options.comments.likes;
    var likeCounter = 0;

      
      // // // // // // //
     // Model Listeners /
    // // // // // // //

    
    $root.on('like', function(comment) {
      likeCounter += comment.likes;
      $root.find('.total-like-count').text(likeCounter + ' likes');
    });
  };

})();
