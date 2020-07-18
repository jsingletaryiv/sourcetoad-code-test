/**
 * @summary       Front-End Developer Test
 * @description   Provide code examples for employment consideration.
 * 
 * @author        Sourcetoad
 * @name          James Singletary
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

function mutateArray(a) {
  /**  
   * Solution #2: Leveraging Object Deconstruction (ES6+)
   * Thoughts for solution include:
   * => Loop through array finding all iterable objects 
   * => Then `deconstruct` each object and create a new object in the disred format 
   * => Utilize the new `spread` operator to create an updated object array 
  */

  let flatArray = [];
  // Commence flattening
  examineArray(a);

  async function examineArray(currArray) {
    console.log('Guest List: ', currArray);
    // Find iterable objects to flatten
    for (let i in currArray) {
      let currObject = currArray[i];
      // console.log('Guest Info: ', currObject);
      let result = examineObject(currObject);
      // Add flat object to array
      flatArray.push(result);
    }
  }

  function examineObject(currObject) {
    let flatObject = {};
    
    // Begin deconstruction of currObject parameter by using the `{...}`
    // NOTE: For the sake understanding the solution, all key/value pairs are being deconstructed and mapped  
    const { guest_type: guestType, first_name: firstName, last_name: lastName, 
            guest_booking: { room_no: roomNumber, some_array: someArray }} = currObject;

    console.log('guestType: ', guestType);
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);
    console.log('roomNumber: ', roomNumber);
    console.log('someArray: ', someArray);

    flatObject = deconObject(currObject);

    // Pass in the deconstructed object values (I got `undefined` when using mapped identifiers)
    // NOTE: I know this example is not very modular and should have recursion logic to work with
    // any object. For brevity, I'm assuming that all data sets will contain same props
    function deconObject({ guest_type, first_name, last_name, guest_booking: { room_no, some_array }}) {
      let reconObject = { guest_type, first_name, last_name, room_no, some_array }
      console.log('reconObject:', reconObject);
      return reconObject;
    }

    // console.log('Flat Object: ', flatObject);
    return flatObject;
  }

  return flatArray;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
