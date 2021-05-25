$(function () {
    $("#input").change(function () {
        var input = $(this).val();
        $("ul").append('<li>' + input + '<div>  <i class=' + 'check' + '>✔</i> <i class=' + 'delete' + '>❌</i></div></li>');
        $('input').text(" ");
        $(this).val(" ");

    })

    $('ul').on('click', '.delete', function () {
        $(this).parents('li').fadeOut(200);
    })

    $('ul').on('click', '.check', function () {
        $(this).parents('li').toggleClass('checked');
    })

})


