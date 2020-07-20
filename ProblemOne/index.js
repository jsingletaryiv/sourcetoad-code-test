/**
 * @summary       Front-End Developer Test
 * @description   Provide code examples for employment consideration.
 * 
 * @author        Sourcetoad
 * @name          James_Singletary
 * 
 * @copyright     Sourcetoad 2020
*/

var arr = [
{
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

/**  
 * Solution #2: Leveraging Object Destructuring (ES6+)
 * Thoughts for solution include:
 * => Loop through array finding all iterable objects 
 * => Then `destruct` each object and `construct` the new object
 * => Possible use of:
 *   -> Array / Object Destructuring
 *   -> Spread Operator {...}
 *   -> Use of `.map(), .sort(), .reduce()` methods
*/

function mutateArray(a) {

  let flatArray = [];
  // Commence Destructuring
  console.group('Guest List:');
  examineArray(a);
  console.groupEnd();

  async function examineArray(currArray) {
    console.log('Original Array: ', currArray);
    // Find iterable objects to flatten
    console.group('Guest Data:');
    for (let i in currArray) {
      let currObject = currArray[i];
      console.groupCollapsed('Guest ' + i + ': ');
      console.log('Original Object: ', currObject);
      let result = examineObject(currObject);
      console.groupEnd();
      // Add flat object to array
      flatArray.push(result);
    }
    console.groupEnd();
  }

  // NOTE: For the sake of understanding this solution, its assumed that `currObject` will always have the same dataset structure (keys)  
  function examineObject(currObject) {
    let flatObject = destructObject(currObject);
    
    // Unpack data from object and pass in each field as parameter
    function destructObject({ guest_type, first_name, last_name, guest_booking: { room_no, some_array: someArray }}) {
      // Calculate the sum of the values in `some_array` then replace it with `some_total`    
      const someTotal = someArray.reduce((a, b) => a + b, 0);
      let constructObject = { guest_type, first_name, last_name, room_no, 'some_total': someTotal }
      
      console.log('Mutated Object:', constructObject);
      return constructObject;
    }

    return flatObject;
  }

  console.group('New Array:');
  console.log(flatArray);
  console.groupEnd();
  return flatArray;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
