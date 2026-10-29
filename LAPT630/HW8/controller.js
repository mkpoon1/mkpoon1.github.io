const restaurantController = {
  init: function () {
    const showAllButton = document.querySelector("#showAll");
    const showTopRatedButton = document.querySelector("#showTopRated");
    const showInexpensiveButton = document.querySelector("#showInexpensive");

    showAllButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getAllRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    showTopRatedButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getTopRatedRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    showInexpensiveButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getInexpensiveRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    const cuisineFilter = document.querySelector("#cuisineFilter");
    cuisineFilter.addEventListener("change", function () {
      const cuisine = this.value;
      if (cuisine) {
        const restaurants = restaurantModel.getRestaurantsByCuisine(cuisine);
        restaurantView.displayRestaurants(restaurants);
      } else {
        restaurantView.displayRestaurants(restaurantModel.getAllRestaurants());
      }
    });

    restaurantView.displayRestaurants(restaurantModel.getAllRestaurants());
  }
};

restaurantController.init();
