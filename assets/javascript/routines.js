//Initialize Variables

var results = "";
var routineLength = "";

var exerciseArray = [
    {name: "plank",
     gifID: "KbOsMppYjfO5a",  
     type: "bodyweight",
     time: 60,
     instructions: "Lie face down with forearms on the floor and hands clasped. Extend the legs behind the body and rise up on the toes. Keeping the back straight, tighten the core and hold the position for 30-60 seconds (or as long as you can hang)."
    },
    {name: "burpee",
     gifID: "l0IpWJtQ7ksIIL8cM",  
     type: "bodyweight",
     time: 60,
     instructions: "Start out in a low squat position with hands on the floor. Next, kick the feet back to a push-up position, complete one push-up, then immediately return the feet to the squat position. Leap up as high as possible before squatting and moving back into the push-up portion of the show."
    },
    {name: "lateral squat",
     gifID: "26BROTgFzjf22acJq",  
     type: "bodyweight",
     time: 60,
     instructions: "Start in a standing position, take your feet out sideways so that they are wider than shoulder width and toes turned out slightly. Reach your hands forwards at shoulder height."
    },
    {name: "jumpingjack",
     gifID: "l0IpWJtQ7ksIIL8cM",
     type: "cardio",
     time: 60,
     instructions: "Stand up straight with your shoulders back and your pelvis relaxed. Hold your arms at your side with your feet shoulder-width apart, then jump, spreading your legs slightly and extending your arms over your head. As you land, bring your arms back down to your sides. Tuck in your tummy while doing these for toning your lower abs as well."
    }
]

//Functions

function displayExerciseGifs() {

    // Check length of exercise routine requested
    routineLength = $("#times option:selected").text();
    var thenum = routineLength.replace(" minutes", "");
  
    var queryURL = "http://api.giphy.com/v1/gifs/" + exerciseArray[0].gifID +"?api_key=dc6zaTOxFJmzC";
    
    // Creating an AJAX call for gif selected from array
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      results = response.data; 
              
     // Store info from object returned
     var imgURL_Still = results.images.fixed_height_still.url;
     var imgURL_Animate = results.images.fixed_height.url;
     
         // Create a div to hold the animal gifs
         var exerciseDiv = $("<div class='exercise-view'>");

         // Dynamically create image 
         var image = $("<img>").attr("src", imgURL_Animate);
         image.addClass("gif");
         image.attr("data-state", "animate") 
         image.attr("data-still", imgURL_Still)
         image.attr("data-animate", imgURL_Animate) 
       
         // Add image to div
         exerciseDiv.append(image);
         $("#exercise-view").prepend(exerciseDiv);
    });  
}


// Click Events

$("#startBtn").on("click", displayExerciseGifs);

    
