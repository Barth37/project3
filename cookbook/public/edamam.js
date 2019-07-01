function searchEdamam(ingredient) {
    var ingredient = $(this).attr("data-ingredient");
    var queryURL = 'https://api.edamam.com/search?q=' + ingredient + '&app_id=8b888a07&app_key=a9b6565744d4ce9f78b6d6fcd6448d54limit=10';
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);


      // Constructing HTML containing the recipe information
      var recipeTitle = $("<h1>").text(response.label);
      var recipeImage = $("<img>").attr("src", response.image);
      var recipe = $("<h2>").text(response.recipe);
      // Empty the contents of the artist-div, append the new artist content
      $("#recipe-div").empty();
      $("#recipe-div").append(recipeTitle, recipeImage, recipe); 
    });
  }

  // Event handler for user clicking the select-ingredient button
  $("#select-ingredient").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the recipe name
    var inputIngredient = $("#ingredient-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchEdamam(inputIngredient);
  });