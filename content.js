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
  if (semester in semester_latest_commit){
    commit = semester_latest_commit[semester]
  }
  
  if (commit) {
    document.getElementById('ws-content').src = "http://htmlpreview.github.io/?http://github.com/iosdecal/iosdecal.github.io/blob/" + commit + "/index.html"
  } else {
    document.getElementById('ws-content').src = "http://iosdecal.com/"
  }
}

window.onload = function(){populate_navbar();reload_content()}
window.onhashchange = function(){reload_content()}



