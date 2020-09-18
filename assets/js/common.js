$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
<<<<<<< HEAD
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
=======
>>>>>>> First comit. Sourced from https://github.com/alshedivat/al-folio
});
