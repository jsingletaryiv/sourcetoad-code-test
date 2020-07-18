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
   * Solution: Leveraging Recursion Functions (ES6)
   * Inital thoughts for solution include:
   * => Loop through array finding all iterable objects 
   * => Then loop / iterate through each object
   * => Create `recursive` function that will examine all nested properties
   * => Build new object based on the key / value pairs found in `recursive` logic
   * => Add new object to a new array that will be returned and displayed in DOM 
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
    flattenObject(currObject, '');

    function flattenObject(currObject, parentKey) {
      // Identify and flatten nested key / value pairs using recursion
      for (let key in currObject) {
        let propValue = currObject[key];
        // Verify the iterated data type and whether or not to continue recursion
        // Recursion Safeguard - Prevents recursion if property value is object literal   
        if (propValue.constructor !== Object) {
          if (parentKey == null || parentKey == '') {
            flatObject[key] = propValue;

          } else {
            if (key == null || key == '') {
              flatObject[parentKey] = propValue;
  
            } else {
              flatObject[parentKey + '.' + key] = propValue;
            }
          }
  
        } else {
          if (parentKey == null || parentKey == '') {
            flattenObject(propValue, key);
  
          } else {
            flattenObject(propValue, parentKey + '.' + key);
          }
        }
      }
    }

    console.log('Flat Object: ', flatObject);
    return flatObject;
  }
  
  return flatArray;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
