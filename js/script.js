/* Created by: Marshall
 * Created on: Mar 2022
 * This CSS file contains the JS functions for index.html 
*/

function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML =
    "<p>Your street address is: " + streetNumber + " " + streetName + ".</p>"
}
