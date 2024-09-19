function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.boxShadow =
    "-1px 0.7px 4px 3px var(--light-purple-color)";

  // Target the first element with class 'nav-menu'
  document.getElementsByClassName("nav-menu")[0].style.right = "-0%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
