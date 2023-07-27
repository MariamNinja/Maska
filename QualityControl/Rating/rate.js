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