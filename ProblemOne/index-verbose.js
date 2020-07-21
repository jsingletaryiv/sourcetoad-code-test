/**
 * @summary       Front-End Developer Test
 * @description   Provide code examples for employment consideration.
 * @emits         Console.* I left them in and added some groups to tidy up the log. Switch over to the `master` branch for no logs.
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
  console.group('Guest List:');
  examineArray(a);
  console.groupEnd();
  
  // Commence Destructuring
  async function examineArray(currArray) {
    console.log('Original Array: ', currArray);
    // Find iterable objects to flatten
    console.group('Guest Data:');
    for (let i in currArray) {
      const currObject = currArray[i];
      console.groupCollapsed('Guest ' + i + ': ');
      console.log('Original Object: ', currObject);
      const result = examineObject(currObject);
      console.groupEnd();
      // Add flat object to array
      flatArray.push(result);
    }
    console.groupEnd();
  }

  // NOTE: For the sake of understanding this solution, its assumed that `currObject` will always have the same dataset structure (keys)  
  function examineObject(currObject) {
    const flatObject = destructObject(currObject);
    // Unpack data from object and pass in each field as parameter
    function destructObject({ guest_type, first_name, last_name, guest_booking: { room_no, some_array: someArray }}) {
      // Calculate the sum of the values in `some_array` then replace it with `some_total`    
      const someTotal = someArray.reduce((a, b) => a + b, 0);
      const restructObject = { guest_type, first_name, last_name, room_no, 'some_total': someTotal }
      
      console.log('Mutated Object:', restructObject);
      return restructObject;
    }

    return flatObject;
  }

  // NOTE: This should be a reusable component but again, for brevity...
  const sortBy = function(key, minor) {
    return function(o, p) {
      let a, b;
      let result;
      // Safeguard - Only sorting object literals at this time
      if(o && p && typeof o === 'object' && typeof p === 'object') {
        a = o[key];
        b = p[key];
        // Preserve the first sort while performing the next chained sort.
        if(a === b) return typeof minor === 'function' ? minor(o, p) : 0;
        if(typeof a === typeof b) {
          result = a < b ? -1 : 1;
        } else {
          result = typeof a < typeof b ? -1 : 1;
        }
        return result;

      } else {
        throw {
          name: 'Error',
          message: 'Expected an object when sorting by ' + key
        };
      }
    };
  }

  // NOTE: I would normally create a utility component to handle this type of logic however, for this example...
  // Filter `flatArray` to only show `guest_type` of guest
  const filterGuests = flatArray.filter(manifest => manifest.guest_type.toLowerCase() == 'guest');
  const filterCrew = flatArray.filter(manifest => manifest.guest_type.toLowerCase() == 'crew');

  console.group('New "Flattened" Array:');
  console.log('Filter: Guests', filterGuests);
  console.log('Filter: Crew', filterCrew);
  console.groupEnd();

  // Sort and return the array in `ASC` alphabetical order by `last_name` / `first_name`
  const sortedGuests = filterGuests.sort(sortBy('last_name', sortBy('first_name')));
  return sortedGuests;
}
// Ok - Render the DOM
$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
