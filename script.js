$(document).ready(function () {

        //Landscape
        //apertura menù
        $("#menu-icon").on('click', function () {
                $(this).toggleClass("bi bi-list").toggleClass("bi bi-x-lg");
                $(".menu").toggleClass("menu-disappear");
        });

        /*Scrollbar*/

        var pos = 1;

        $(".linea-scorrimento").on('input', function(){
                pos = $(".linea-scorrimento").val();
                $(".counter").fadeOut(100, function () {
                        $(this).text(pos);
                }).fadeIn(100);
        });

        
        $(".bi-chevron-right").on('click', function () {
                pos++;
                pos = controllaPos(pos);
                $(".linea-scorrimento").val(pos);
                $(".counter").fadeOut(100, function () {
                        $(this).text(pos);
                }).fadeIn(100);
        });
        
        $(".bi-chevron-left").on('click', function () {
                pos--;
                pos = controllaPos(pos);
                $(".linea-scorrimento").val(pos);
                $(".counter").fadeOut(50, function () {
                        $(this).text(pos);
                }).fadeIn(50);
        });

        function controllaPos(n) {
                if (n > 5) n = 1;
                else if (n < 1) n = 5;
                return n;
        }
});




