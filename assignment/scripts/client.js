let garage = [];

let parkedCars = [];


// 1. Add an interface for the user to add cars to the garage with 3 input fields:
//
// - year
// - make
// - model
//
// Also an "add car" button that, when clicked, *uses the existing "newCar" function* to add a car to the garage.

$(document).ready(readyNow);

function readyNow(){
  $('#addCarButton').on('click', addCar);
} //end readyNow function


/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  };
  garage.push(newCarObject);
  return true;
} // end newCar



function addCar(){
  // get user input and create a new object
  let newCar = {
    year: $('#carYearIn').val(),
    make: $('#carMakeIn').val(),
    model: $('#carModelIn').val()
  };

    // push the newCar into the parkedCars array
    parkedCars.push(newCar);


  // empty the inputs
  $('#carYearIn').val('');
  $('#carMakeIn').val('');
  $('#carModelIn').val('');

  // display
  displayCars();
} // end addCar function




function displayCars(){
  // target output by its ID
  let el = $('#carsOut');
  // empty
  el.empty();
  // loop through cars
  for(let car of parkedCars){
    el.append(`<li class="list-group-item">` + car.year + ' ' + car.make + ' ' + car.model + ' ' + `</li>`);
  } // end for loop
  // for each car, create a list item
} //end displayCars
