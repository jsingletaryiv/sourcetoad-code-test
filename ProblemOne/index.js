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
 * => Then `destructure` each object and create a new object in the disred format
 * => Utilize the `spread` operator to help create updated object array 
*/

function mutateArray(a) {

  let flatArray = [];
  // Commence Destructuring
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
    
    // Begin destructuring of currObject parameter by using the `{...}`
    // NOTE: For the sake of understanding this solution, its assumed that `currObject` will always have the same dataset structure (keys)  
    // const { guest_type: guestType, first_name: firstName, last_name: lastName, 
    //         guest_booking: { room_no: roomNumber, some_array: someArray }} = currObject;

    // console.group('guest data:');
    // console.log('guestType: ', guestType);
    // console.log('firstName: ', firstName);
    // console.log('lastName: ', lastName);
    // console.log('roomNumber: ', roomNumber);
    // console.log('someArray: ', someArray);
    // console.groupEnd();

    flatObject = destructObject(currObject);

    // Unpack data from object and pass in each field as parameter
    // NOTE: I know this example is not very modular and should have recursion logic to work with
    // any object. For brevity, I'm assuming that all data sets will contain same keys
    function destructObject({ guest_type, first_name, last_name, guest_booking: { room_no, some_array: someArray }}) {
      let constructObject = { guest_type, first_name, last_name, room_no, 'some_array': someArray }
      console.log('constructObject:', constructObject);
      return constructObject;
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
