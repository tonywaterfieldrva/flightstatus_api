$(document).ready(function () {


  function flightstats_arrivals_search() {
 //   $("#arrivals-table").empty();
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
      console.log(response);
     for (x = 0; x < response.fidsData.length; x++) {
       var addAirline = response.fidsData[x].airlineName;
       var addFlight = response.fidsData[x].flight;
       var addCity = response.fidsData[x].city;
       var addStatus = response.fidsData[x].remarks;
       var addTime = response.fidsData[x].currentTime;
       var addGate = response.fidsData[x].gate;
     
       console.log("addAirLine", addAirline);
       console.log("addFlight", addFlight);
       console.log("addCity", addCity);
       console.log("addStatus", addStatus);
       console.log("addTime", addTime);
       console.log("addGate", addGate);

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
   

      //END OF DOC READY
  };

  // DEPARTURES FUNCTION
  function flightstats_departures_search() {
//    $("#departures-table").empty();
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
      console.log(response);
     for (x = 0; x < response.fidsData.length; x++) {
       var addAirline = response.fidsData[x].airlineName;
       var addFlight = response.fidsData[x].flight;
       var addCity = response.fidsData[x].city;
       var addStatus = response.fidsData[x].remarks;
       var addTime = response.fidsData[x].currentTime;
       var addGate = response.fidsData[x].gate;
     
       console.log("addAirLine", addAirline);
       console.log("addFlight", addFlight);
       console.log("addCity", addCity);
       console.log("addStatus", addStatus);
       console.log("addTime", addTime);
       console.log("addGate", addGate);

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
   

      //END OF DOC READY
  };
    flightstats_arrivals_search();
    flightstats_departures_search();
  });

