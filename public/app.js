var  resultDisplayed = false;
function buttons(user_btn) {
    var screen = document.getElementById("input-screen");
    if (resultDisplayed) {
        screen.value = user_btn;
        resultDisplayed = false;
    }
    else{
        screen.value += user_btn;
    }

}

function result() {
    var screen = document.getElementById("input-screen");
    var result = eval(screen.value);
    screen.value = result;
    resultDisplayed = true;

}

function remove() {
    var input = document.getElementById("input-screen")

    input.value = "";
    // console.log(input.slice( 0 , -1 ));
}