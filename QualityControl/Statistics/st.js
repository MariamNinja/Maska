let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
let sidebarname = document.querySelector(".logo_name");

sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active"); 
        sidebarname.classList.toggle("show"); // Toggle the "hide" class

  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");

  } else {
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");   

  }
}; 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Cancelled flights', 8],
  ['Edited flights ', 2],
  ['Completed flights', 10],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Flights', 'width':1500, 'height':700};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
