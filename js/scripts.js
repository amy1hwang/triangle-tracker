
var text = function(side1, side2, side3) {
  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    return ("Please type in numbers!")
  } else if (side1 === 0 || side2 === 0 || side3 === 0 || side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
    return ("This is NOT a triangle!")
  } else if (side1 === side2 && side1 === side3) {
    return ("It is an equilateral!")
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return ("It is an isosceles!")
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    return ("It is a scalene!")
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    $(".submitted").text(text(side1, side2, side3))
    event.preventDefault();
  });
});
