$( document ).ready(function() {
    $("#menu-mobile").hide();

    $("#open-menu-mobile").click(function() {
        $("#menu-mobile").show();
    });

    $("#close-menu-mobile").click(function() {
        $("#menu-mobile").hide();
    });
});