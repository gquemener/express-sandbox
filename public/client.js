$(function () {
    var appendToList = function (elements) {
        var list = [];
        for (var i in elements) {
            list.push($('<li>', { text: elements[i] }));
        }
        $('#example').append(list);
    };

    $.get('/members', appendToList);

    $('form').on('submit', function (event) {
        event.preventDefault();
        var form = $(this);
        var memberData = form.serialize();

        $.ajax({
            type: 'POST', url: '/members', data: memberData
        }).fail(function (response) {
            alert(response.responseText);
        }).done(function (name) {
            appendToList([name]);
            form.trigger('reset');
        });
    });
});
