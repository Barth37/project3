$(document).ready(function () {
  function searchEdamam(ingredient) {
    var queryURL =
      "https://api.edamam.com/search?q=" +
      ingredient +
      "&app_id=8b888a07&app_key=a9b6565744d4ce9f78b6d6fcd6448d54";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response.hits);

      $('#recipeDisplay').html(' ');
      var results = response.hits;
      // Constructing HTML containing the recipe information
      for (i = 0; i < results.length; i++) {
        var recipeDiv = $('<div>');
        var recipeImage = $('<img>');
        var recipeBtnDiv = $('<div>');
        var recipeCaption = $('<div>');
        recipeCaption.addClass('caption');
        recipeCaption.append($('<div>').text(results[i].recipe.label).addClass('recipeName'));
        recipeCaption.addClass('text-center');
        recipeBtnDiv.append($('<a>').append($('<button>').addClass('btn recipeBtn').text("Go to recipe")).attr('href', results[i].recipe.url).attr('target', 'blank'));
        var activityBtn = $('<button>').text('Activity').addClass('btn');
        recipeBtnDiv.append(activityBtn);
        recipeCaption.append(recipeBtnDiv);
        recipeImage.attr('src', results[i].recipe.image);
        recipeDiv.append(recipeImage);
        recipeDiv.append(recipeCaption);
        $('#recipeDisplay').append(recipeDiv);


      }
    });
  }
  // Event handler for user clicking the select-ingredient button
  $("#select-ingredient").on("click", function (event) {
    // Preventing the button from trying to submit the form
    //event.preventDefault();
    // Storing the recipe name
    var inputIngredient = $("#ingredient-input")
      .val()
      .trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchEdamam(inputIngredient);
  });
})