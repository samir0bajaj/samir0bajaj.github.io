$(document).ready(function(event) {

  var config = {
    apiKey: "AIzaSyDvCKlKhoDpHkNZXYCPW4-EN7_fkU3FQmI",
    authDomain: "train-scheduler.firebaseapp.com",
    databaseURL: "https://train-scheduler-98825.firebaseio.com/",
    projectId: "train-scheduler",
    storageBucket: "",
    messagingSenderId: "711739402501"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = "";
  var firstTrain = "";

  $("#submitButton").focus().on("click", function(event) {
    event.preventDefault();

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    firstTrain = $("#firstTrain").val().trim();

    database.ref().push({
        name: trainName,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

  });

  database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();   

    var tFrequency = sv.frequency;
    var firstTime = sv.firstTrain;


    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");

    var currentTime = moment();
 
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    var tRemainder = diffTime % tFrequency;
    
    var tMinutesTillTrain = tFrequency - tRemainder;
    
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    var trainArrival = moment(nextTrain).format("hh:mm");

    var entry = "<tr><td>" + sv.name + "</td><td>" + sv.destination + "</td><td>" + sv.frequency + "</td><td>" + trainArrival + "</td><td>" + tMinutesTillTrain + "</td></tr>";
    $("#table").append(entry);

  });

});