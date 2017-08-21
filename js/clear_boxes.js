window.onload = function () {
    var xButtons = document.getElementsByClassName("clear-button");

    for (var i = 0; i < xButtons.length; i++) {
        xButtons[i].onclick = function () {
            var searchFields = document.getElementsByClassName("search-box");

            for (var i = 0; i < searchFields.length; i++) {
                searchFields[i].value = "";
            }
        };
    };
};