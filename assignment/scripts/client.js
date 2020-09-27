let garage = [];

let parkedCars = [];

const maxCars = 5;



$(document).ready(readyNow);


function readyNow(){
  $('#addCarButton').on('click', addCar);
} //end readyNow function


/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput, priceInput){
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
    price: priceInput
  };
  garage.push(newCarObject);
  return true;
} // end newCar



function addCar(){
  // get user input and create a new object
  let newCar = {
    year: $('#carYearIn').val(),
    make: $('#carMakeIn').val(),
    model: $('#carModelIn').val(),
    price: $('#carPriceIn').val()
  };

    // push the newCar into the parkedCars array if all inputs are filled

    // if year input is not defined, do not add car to array
    if(!newCar.year && newCar.make && newCar.model && newCar.price){
      return 'Car not added';
    }

    // if make input is not defined, do not add car to array
    if(newCar.year && !newCar.make && newCar.model && newCar.price){
      return 'Car not added';
    }

    // if model input is not defined, do not add car to array
    if(newCar.year && newCar.make && !newCar.model && newCar.price){
      return 'Car not added';
    }

    // if price input is not defined, do not add car to array
    if(newCar.year && newCar.make && newCar.model && !newCar.price){
      return 'Car not added';
    }

    if(parkedCars.length < maxCars){
      parkedCars.push(newCar);
    }

  // empty the inputs
  $('#carYearIn').val('');
  $('#carMakeIn').val('');
  $('#carModelIn').val('');
  $('#carPriceIn').val('');

  // display
  displayCars();
  displayPrices();
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
} //end displayCars

function displayPrices(){
  let el = $('#carPrices');
  el.empty();
  for(let car of parkedCars){
    el.append(`<li class="list-group-item">` + '$' + car.price + `</li>`);
  }
}
