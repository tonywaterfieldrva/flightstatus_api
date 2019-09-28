
    var arr_response = {};
    var arr_list_current = 0;
    //rows in form table
    var dep_list_limit = 5;
    var dep_response = {};
    var dep_list_current = 0;
    //rows in form table
    var arr_list_limit = 5;
    //refresh scroll rate in seconds
    var refresh_scroll_seconds = 6;
    //refresh ajax pull
    var refresh_ajax_pull_mintues = 10; 
  
  
    function flightstats_arrivals_search() {
    var settings = {
      "async": true,
      "crossDomain": true,
       "url": "https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/fids/rest/v1/json/RIC/arrivals?appId=ef50a4ca&appKey=b835c4c564ed17e6ddeb8fab099adcc5&requestedFields=airlineName%2Cflight%2Ccity%2CcurrentTime%2Cgate%2Cremarks%2CstatusCode&includeCodeshares=false&timeWindowBegin=120&timeWindowEnd=120&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=true",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "Postman-Token": "fe117be6-abdb-40d4-8b91-f202de48687a"
      }
    }

    $.ajax(settings).done(function (response) {
       console.log("from ajax: " , response);
       arr_response = response;
       console.log("from ajax arr_response: " , arr_response);
        arr_list_current = arr_list_limit;   
        var object_length = response.fidsData.length;
        var arrival_progress_msg = "Arrivals: 1 - " + arr_list_limit + " of " + object_length;
        $("#card-header-arrival").text(arrival_progress_msg);    
    
        for (x = 0; x < arr_list_limit; x++) {
               var addAirline = response.fidsData[x].airlineName;
               var addFlight = response.fidsData[x].flight;
               var addCity = response.fidsData[x].city;
               var addStatus = response.fidsData[x].remarks;
               var addTime = response.fidsData[x].currentTime;
               var addGate = response.fidsData[x].gate;

           var newRow = $("<tr>").append(
              $("<th>").text(addAirline),
              $("<th>").text(addFlight),
              $("<th>").text(addCity),
              $("<th>").text(addStatus),
              $("<th>").text(addTime),
              $("<th>").text(addGate),
              )

              $("#arrivals-table > tbody").append(newRow);

      }
    
    
    });
  
  };

  function arrivals_form_list() {
    $("#arrivals-table > tbody").empty();
    console.log("arr_list_current: " , arr_list_current);

    var object_length = arr_response.fidsData.length;
    console.log("object_length: " , object_length);

    var list_limit = arr_list_limit;
    
    if (arr_list_limit + arr_list_current > object_length) {
        list_limit = arr_list_current + (object_length - arr_list_current);
        console.log("list_limit: inside if:  " , list_limit);
        var end_of_list = true;
    }
    else {
        list_limit = arr_list_current + arr_list_limit;
    }
    console.log("list_limit: ", list_limit);

    var display_current_msg = arr_list_current + 1; 
    var arrival_progress_msg = "Arrivals: " + display_current_msg + " - " + list_limit + " of: " + object_length;
    $("#card-header-arrival").text(arrival_progress_msg);
    for (x = arr_list_current; x < list_limit; x++) {
      var addAirline = arr_response.fidsData[x].airlineName;
      var addFlight = arr_response.fidsData[x].flight;
      var addCity = arr_response.fidsData[x].city;
      var addStatus = arr_response.fidsData[x].remarks;
      var addTime = arr_response.fidsData[x].currentTime;
      var addGate = arr_response.fidsData[x].gate;

  var newRow = $("<tr>").append(
     $("<th>").text(addAirline),
     $("<th>").text(addFlight),
     $("<th>").text(addCity),
     $("<th>").text(addStatus),
     $("<th>").text(addTime),
     $("<th>").text(addGate),
     )

     $("#arrivals-table > tbody").append(newRow);

  };
  if (end_of_list === true) {
    arr_list_current = 0;
  }
  else {
    arr_list_current = list_limit;
  }
  console.log("end of function/ arr_list_current" , arr_list_current);
}
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 
// DEPARTURES AJAX PULL AND SCROLL UPDATES /////////////////////////////////////////////////// 

function flightstats_departures_search() {
 
    var settings = {
      "async": true,
      "crossDomain": true,
       "url": "https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/fids/rest/v1/json/RIC/departures?appId=ef50a4ca&appKey=b835c4c564ed17e6ddeb8fab099adcc5&requestedFields=airlineName%2Cflight%2Ccity%2CcurrentTime%2Cgate%2Cremarks&includeCodeshares=false&timeWindowBegin=120&timeWindowEnd=120&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "Postman-Token": "fe117be6-abdb-40d4-8b91-f202de48687a"
      }
   }

  $.ajax(settings).done(function (response) {
     console.log("from ajax: " , response);
     dep_response = response;
     console.log("from ajax dep_response: " , dep_response);
      dep_list_current = dep_list_limit;   
      var object_length = dep_response.fidsData.length;
      var departure_progress_msg = "Departures: 1 - " + dep_list_limit + " of " + object_length;
      $("#card-header-departures").text(departure_progress_msg);    
  
      for (x = 0; x < dep_list_limit; x++) {
             var addAirline = response.fidsData[x].airlineName;
             var addFlight = response.fidsData[x].flight;
             var addCity = response.fidsData[x].city;
             var addStatus = response.fidsData[x].remarks;
             var addTime = response.fidsData[x].currentTime;
             var addGate = response.fidsData[x].gate;

         var newRow = $("<tr>").append(
            $("<th>").text(addAirline),
            $("<th>").text(addFlight),
            $("<th>").text(addCity),
            $("<th>").text(addStatus),
            $("<th>").text(addTime),
            $("<th>").text(addGate),
            )

            $("#departures-table > tbody").append(newRow);

    }
  
  
  });

};

function departures_form_list() {
  $("#departures-table > tbody").empty();
  console.log("dep_list_current: " , dep_list_current);

  var object_length = dep_response.fidsData.length;
  console.log("object_length: " , object_length);

  var list_limit = dep_list_limit;
  
  if (dep_list_limit + dep_list_current > object_length) {
      list_limit = dep_list_current + (object_length - dep_list_current);
      console.log("list_limit: inside if:  " , list_limit);
      var end_of_list = true;
  }
  else {
      list_limit = dep_list_current + dep_list_limit;
  }
  console.log("list_limit: ", list_limit);

  var display_current_msg = dep_list_current + 1; 
  var departure_progress_msg = "Departures: " + display_current_msg + " - " + list_limit + " of: " + object_length;
  $("#card-header-departure").text(departure_progress_msg);
  for (x = dep_list_current; x < list_limit; x++) {
    var addAirline = dep_response.fidsData[x].airlineName;
    var addFlight = dep_response.fidsData[x].flight;
    var addCity = dep_response.fidsData[x].city;
    var addStatus = dep_response.fidsData[x].remarks;
    var addTime = dep_response.fidsData[x].currentTime;
    var addGate = dep_response.fidsData[x].gate;

var newRow = $("<tr>").append(
   $("<th>").text(addAirline),
   $("<th>").text(addFlight),
   $("<th>").text(addCity),
   $("<th>").text(addStatus),
   $("<th>").text(addTime),
   $("<th>").text(addGate),
   )

   $("#departures-table > tbody").append(newRow);

};
if (end_of_list === true) {
  dep_list_current = 0;
}
else {
  dep_list_current = list_limit;
}
console.log("end of function/ dep_list_current" , dep_list_current);
}


flightstats_arrivals_search();
flightstats_departures_search();
  


  var timeIntervalarr = setInterval(arrivals_form_list, 1000 * refresh_scroll_seconds);
  var timeInterval_dep = setInterval(departures_form_list, 1000 * refresh_scroll_seconds);
  //var timeInterval_ajax = setInterval(arrival_ajax_refresh, 3600000 * refresh_ajax_pull_minutes);
