// chowanie menu

$(document).ready(function(){
	$("#mySidenav").hide();
    $("#artdecoelement").click(function(){
        $("#mySidenav").toggle();
    });
});


// strona garnitury menu ze zdjęć photolinks
function openDescr(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}

