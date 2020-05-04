$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };
// POST REQUEST//
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Added new burger");
      location.reload();
    });
  });
// EAT BURGER ON CLICK//
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
//PUT POST REQUES CHAGE TO TRUE//
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });
// DELETE 
  $(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

  });
});
