$(document).ready(function () {
    $("#show-button").click(function () {
        ToggleClass("#hide-button", "d-none", "d-block");
        ToggleClass("#show-button", "d-block", "d-none");
        ToggleClass("#banner-message", "d-none", "d-block")
    });
    $("#hide-button").click(function () {
        ToggleClass("#show-button", "d-block", "d-none");
        ToggleClass("#hide-button", "d-none", "d-block");
        ToggleClass("#banner-message", "d-none", "d-block")
    });
    $("#new-page").click(function () {
        console.log("test");
        $("#task-to-add").click(function() {
            alert("working");
        });
    });
});

function ToggleClass(tagId, firstClass, secondClass) {
    if ($(tagId).hasClass(firstClass)) {
        $(tagId).removeClass(firstClass);
        $(tagId).addClass(secondClass);
    }
    else {
        $(tagId).removeClass(secondClass);
        $(tagId).addClass(firstClass);
    }
}
