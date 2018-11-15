function populate_navbar(){
  var navbar_html = "<li class='nav-item'> <a class='nav-link' href='#'>Current</a> </li>"
  past_semesters.forEach(function(sem){ 
    navbar_html += "<li class='nav-item'> <a class='nav-link' href='#" + sem.id + "''>" + sem.name + "</a> </li>"
  })
  document.getElementById('navbar-content').innerHTML = navbar_html
}


function reload_content(){
  var semester = window.location.hash.substr(1);
  var commit = null
  switch(semester){
    case "sp18":
      commit = "c7896ecc3b9c05e693c63a4dff0fc05cd6b79631"
      break
    case "fa17":
      commit = "05cbc6ec92621e61ff3c7cfde5027b63ed725222"
      break
    default:
      break
  }

  if (commit) {
    document.getElementById('ws-content').src = "http://htmlpreview.github.io/?http://github.com/iosdecal/iosdecal.github.io/blob/" + commit + "/index.html"
  } else {
    document.getElementById('ws-content').src = "http://iosdecal.com/"
  }
}

window.onload = function(){populate_navbar();reload_content()}
window.onhashchange = function(){reload_content()}



