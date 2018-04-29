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


// do modalu:
$('#fitting').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var rodzaj = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  // modal.find('.modal-title').text('New message to ' + rodzaj)
  modal.find('#rodzaj').val(rodzaj)
})

// wyśrodkowuje zdjęcia-linki

function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() > 975) {
        $('#photo_links').removeClass('d-flex');
    }
    else {
        if (!init) {
            $('#photo_links').addClass('d-flex');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});

