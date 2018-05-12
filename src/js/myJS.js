
// chowanie menu

$(document).ready(function() {
	$("#mySidenav").hide();
    $("#artdecoelement").click(function() {
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
  var button = $(event.relatedTarget) 
  var rodzaj = button.data('whatever')
  var modal = $(this)
  modal.find('#rodzaj').val(rodzaj)
})

// wyśrodkowuje zdjęcia-linki na mniejszych ekranach i włącza buttona na stronie onas

function checkWidth(init)
{
    if ($(window).width() > 975) {
        $('#photo_links').removeClass('d-flex');
    }
    else {
        if (!init) {
            $('#photo_links').addClass('d-flex');
        }
    }
    if ($(window).width() < 434) {
        $('#photos button').prop('disabled', false);
    }
     else {
        if (!init) {
            $('#photos button').prop('disabled', true);
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});

// tablice do opisów O nas

var opisyApp = angular.module('app', []);
 
 opisyApp.controller('opisy', function($scope){
    // // dane
    $scope.opisy = [
                    { Id: 'owner', Osoba: "Bartosz Kowalski", Photo: 'img/owner.jpg', Stanowisko: 'Właściciel', Description: "Założyciel marki. Od samego początku uczestniczy we wszystkich procesach dotyczących produkcji i sprzedaży garniturów. Zwiedził całą Europę i Stany Zjednoczone. Wie co to jakość."},
                    { Id: 'konstruktor', Osoba: "Dagmara Nowosielska", Photo: 'img/konstruktor.jpg', Stanowisko: 'Główny kontstruktor', Description: "Absolwentka MSKPU w Warszawie. Od urodzenia w rodzinie kaletniczej (3 pokolenia). Miłośniczka stylu skandynawskiego. Minimalizm i prezycja cięcia w garniturach są dla niej najważniejsze."},
                    { Id: 'researcher', Osoba: "Małgorzata Wróbel", Photo: 'img/researcher.jpg', Stanowisko: 'Researcher', Description: "Ma oczy wokół głowy. Wszędzie jej pełno. Zna wszystko co jest na topie. Pokazuje nam trendy zanim ujrzą je magazyny. Zawsze stawia na swoim a my dobrze na tym wychodzimy."}
            ];        

 });
