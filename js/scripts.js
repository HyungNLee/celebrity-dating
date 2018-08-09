$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var genderInput = $("input:radio[name=gender]:checked").val();
    var hairInput = $("#hairColor").val();
    $(".celebPic").hide();
    if (genderInput === "Male") {
      if (hairInput === "Black") {
        $("#chrisPine").show();
      } else if (hairInput === "Brown") {
        $("#chrisEvans").show();
      } else if (hairInput === "Blonde") {
        $("#chrisHemsworth").show();
      }
    } else if (genderInput === "Female") {
      if (hairInput === "Black") {
        $("#abigailSpencer").show();
      } else if (hairInput === "Brown") {
        $("#emmaWatson").show();
      } else if (hairInput === "Blonde") {
        $("#scarJo").show();
      }
    }
    event.preventDefault();
  })

  // $("#formOne").submit(function(event) {
  //   if (genderInput === "Male") {
  //     if (hairInput === "Black") {
  //       $("#chrisPine").show();
  //     } else if (hairInput === "Brown") {
  //       $("#chrisEvans").show();
  //     } else if (hairInput === "Blonde") {
  //       $("#chrisHemsworth").show();
  //     }
  //   } else if (genderInput === "Female") {
  //     if (hairInput === "Black") {
  //       $("#abigailSpencer").show();
  //     } else if (hairInput === "Brown") {
  //       $("#emmaWatson").show();
  //     } else if (hairInput === "Blonde") {
  //       $("#scarJo").show();
  //     }
  //   }
  //   event.preventDefault();
  // })


})
