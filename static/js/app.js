// from data.js
var tableData = data;
var tbody = d3.select("tbody");
//var DTselect = d3.select("#date")
var Drop_01 = d3.select("#Date_List");
var Field_01 = d3.select("#selDate");
var Field_02 = d3.select("#selState");
var Field_03 = d3.select("#selCity");
var FilteredData = [];
var Dateresult = [];
var dateArray = [];
var stateArray = [];
var cityArray = [];
//var text = d3.select("#text");


//function mouseout (d) { alert(this.value); }

Field_01.on("change", handleChange_01 );

Field_02.on("change", handleChange_02 );

Field_03.on("change", handleChange_03 );

//Start filtering by Date
function handleChange_01 (d){
  //console.log("A button was clicked!");
  document.getElementById("selState").options.length = 0;
  var selectedStates = tableData.filter(selectState);
  //console.log(selectedStates);
  FilteredData = selectedStates;
  console.log(FilteredData);
  populateState(getUniqueValues(selectedStates,"state"));
  delTableRows ();
  populateTable(FilteredData);
}



//Start Filtering by State
function handleChange_02 (d){
  //console.log("A button was clicked!");
  document.getElementById("selCity").options.length = 0;
  var selectedCities = FilteredData.filter(selectCity);
  FilteredData = selectedCities;
  console.log(FilteredData);
  populateCity(getUniqueValues(selectedCities,"city"));
  delTableRows ();
  populateTable(FilteredData);
}

//Start Filtering by City
function handleChange_03 (d) {
    //console.log("A button was clicked!");
    document.getElementById("selShape").options.length = 0;
    var selectedShapes = tableData.filter(selectShape);
    FilteredData = selectedShapes;
    console.log(FilteredData);
    populateShape(getUniqueValues(selectedShapes,"shape"));
    delTableRows ();
    populateTable(FilteredData);
}


// Result of Date Filtering
function selectState(stateList) {
  //console.log(document.getElementById("selDate").value);
  return stateList.datetime == document.getElementById("selDate").value;
}

//Result ot State Filtering
function selectCity(cityList) {
  //console.log(document.getElementById("selState").value);
  return cityList.state == document.getElementById("selState").value;
}

//Result ot State Filtering
function selectShape(shapeList) {
  //console.log(document.getElementById("selCity").value);
  return shapeList.city == document.getElementById("selCity").value;
}


/////////////////////////////////////////////////////

tableData.forEach(function(UFOReport) {
  //console.log(UFOReport);
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
  
});

function populateTable (inArray){
    inArray.forEach(function(UFOReport){
      var row = tbody.append("tr");
      Object.entries(UFOReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
  })
}

///
function getUniqueValues (inArray, inValue){
  var ArrLength = inArray.length;
  var dataReturn = [];
  var ReturnResult = [];
  dataReturn.length = ArrLength;
  //console.log(dataReturn.length);
  //console.log(inValue);
      for (var j = 0; j < ArrLength; j++) {
        var newArrayEntry = inArray[j][inValue];
        console.log(newArrayEntry);
        dataReturn.push(newArrayEntry);
        ReturnResult = Array.from(new Set(dataReturn));
      }  
  //console.log(ReturnResult);
  return ReturnResult 
}

//////




function populateDate(inArray){
    //console.log(dateArray);
    //console.log(inArray)
    for (var i=1; i < inArray.length;++i){
       console.log(inArray[i]);
       addOption("selDate", inArray[i], inArray[i]);
    }
}

function populateState(inArray){
  //console.log(dateArray);
  //console.log(inArray)
  for (var i=1; i < inArray.length;++i){
     console.log(inArray[i]);
     addOption("selState", inArray[i], inArray[i]);
  }
}

function populateCity(inArray){
  //console.log(dateArray);
  //console.log(inArray)
  for (var i=1; i < inArray.length;++i){
     console.log(inArray[i]);
     addOption("selCity", inArray[i], inArray[i]);
  }
}

function populateShape(inArray){
  //console.log(dateArray);
  //console.log(inArray)
  for (var i=1; i < inArray.length;++i){
     console.log(inArray[i]);
     addOption("selShape", inArray[i], inArray[i]);
  }
}



function addOption(selectElement,text,value )
    {var optn = document.createElement("OPTION");
        var xxx = document.getElementById(selectElement)
        optn.text = text;
        optn.value = value;
        xxx.options.add(optn);
        // Field_01.append("OPTION");
        // Field_01.attr("value", value);
        // Field_01.attr("text", text)

    }


function delTableRows () {
  var tableHeaderRowCount = 1;
  var table = document.getElementById('mainTable');
  var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}
// YOUR CODE HERE!


populateDate(getUniqueValues(tableData,"datetime"));


//getUniqueDate();
//getUniqueValues(tableData,"datetime")
//  function getUniqueDate (){
//    var ArrLength = tableData.length;
  
//    dateArray.length = ArrLength;
//    stateArray.length = ArrLength;
//    cityArray.length = ArrLength;
//        for (var j = 0; j < tableData.length; j++) {
//          var dataEntry = tableData[j];
//          var datetimeEntry = dataEntry.datetime;
//          dateArray.push(datetimeEntry);
//          Dateresult = Array.from(new Set(dateArray));
//        } 
  
//  }

// // tableData.forEach(function(UFOdate) {
//    var ArrLength = tableData.length;
  
//    dateArray.length = ArrLength;
//    stateArray.length = ArrLength;
//    cityArray.length = ArrLength;
//        for (var j = 0; j < tableData.length; j++) {
//          var dataEntry = tableData[j];
//          var datetimeEntry = dataEntry.datetime;
//          dateArray.push(datetimeEntry);
//          Dateresult = Array.from(new Set(dateArray));
//        }  
// // });
///
// function handleChange(event) {
//   // grab the value of the input field
//   var inputField = d3.event.target.value;

//   // reverse the input string
//   //var reversedInput = reverseString(inputText);

//   // Set the output text to the reversed input string
//   //output.text(reversedInput);
//   console.log(inputField)

// }
////