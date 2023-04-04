/* Complete the following greetPerson function so that it passes 
the tests in index.test.js. */

export function greetPerson(name) {
  // Write the code for this function based on what you see in the tests!
  if (typeof name === 'string') {
    return `Greetings, ${name}`;
  } else {
    return 'Please try again with a name!';
  }
}
