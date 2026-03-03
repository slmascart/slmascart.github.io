function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, navbtn;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background-stars color of all navbtn/buttons
  navbtn = document.getElementsByClassName("navbtn");
  for (i = 0; i < navbtn.length; i++) {
    navbtn[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "#777";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
