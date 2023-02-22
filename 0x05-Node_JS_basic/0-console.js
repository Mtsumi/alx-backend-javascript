/**
 * Displays a message on STDOUT
 * Uses the process object
 */

function displayMessage(msg){
  process.stdout.write(`${msg} \n`)
}

module.exports = displayMessage;
