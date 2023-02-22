/**
 * Displays a message on STDOUT
 * Uses the process object
 */
const displayMessage = (msg) => {
  process.stdout.write(`${msg} \n`)
}

module.exports = displayMessage;
