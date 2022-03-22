/* Created by: Marshall
 * Created on: Mar 2022
 * This CSS file contains the JS functions for index.html 
*/

function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = parseInt(document.getElementById("street-name").value)

  // output
  document.getElementById("address").innerHTML =
    "<p>Your street address is: " + street-number + street-name + ".</p>"
}
