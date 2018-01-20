  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-FHQNJHbHrT10_FSWgpzpXrK_ID-tcUA",
    authDomain: "trainschedule-39834.firebaseapp.com",
    databaseURL: "https://trainschedule-39834.firebaseio.com",
    projectId: "trainschedule-39834",
    storageBucket: "",
    messagingSenderId: "937450452420"
  };
  firebase.initializeApp(config);



var database = firebase.database();

// Button for adding provider data
$("#add-provider-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input from the form
  //var image = $("#image-input").val().trim();
  var train = $("#train-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var time = $("#time-input").val();
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding provider data
  var newTrainSchedule = {
    train:  train, 
    destination: destination, 
    time:  time, 
    frequnecy:  frequency
  };

  // Uploads provider data to the database
  database.ref().push(newTrainSchedule);

  // Logs everything to console
 // console.log(newProvider.contactName);

  // Alert
  alert("Train Schedule Successfully Added");

  // Clears all of the text-boxes
  $("#train-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding provider to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

 // console.log(childSnapshot.val());

  // Store everything into a variable.
  var train = childSnapshot.val().train; 
  var destination = childSnapshot.val().destination; 
  var time = childSnapshot.val().time; 
  var frequency = childSnapshot.val().frequency; 
  

  // Train Info View
  //console.log(train);
  //console.log(destination);
 
  // Add provider data to the table output
  $("#train-schedule-table > tbody").append("<tr><td>"  + train 
                                    + "</td><td>" + destination 
                                    + "</td><td>" + frequency 
                                    + "</td><td>" + time 
                                    + "</td><td>" + time + "</td></tr>");
});
