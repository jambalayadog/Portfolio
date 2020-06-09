function selectActivity(evt, activity) {
    var i, x, tablinks;
    x = document.getElementsByClassName("activity");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  // set display to none
    }
    tablinks = document.getElementsByClassName("navitem");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" navitem-selected", "");  //remove red highlight 
    }
    document.getElementById(activity).style.display = "block";  // 
    evt.currentTarget.className += " navitem-selected";     // add red highlight
}

window.addEventListener('load', function () {
//selectActivity(event,'Profile')
//selectActivity(event,'ProjectSummary')
//selectActivity(event,'Competencies')
//selectActivity(event,'Work')
//selectActivity(event,'Interests')

})


var checkScrollBars = function(){
  var b = $('body');
  var normalw = 0;
  var scrollw = 0;
  if(b.prop('scrollHeight')>b.height()){
      normalw = window.innerWidth;
      scrollw = normalw - b.width();
      $('#container').css({marginRight:'-'+scrollw+'px'});
  }
}

