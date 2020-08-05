$("#login-btn").on("click", login)
$("#register-btn").on("click", register)

function register() {
    $("#login").css("left", "-400px")
    $("#login").css("display", "none")
    $("#register").css("left", "50px")
    $("#register").css("display", "block")
    $("#btn").css("left", "110px")
    $("#login-btn").css({
        "color": "black",
        "font-weight": "bold"
    })
    $("#register-btn").css({
        "color": "white",
        "font-weight": "bold"
    })
}

function login() {
    $("#login").css("left", "50px")
    $("#login").css("display", "block")
    $("#register").css("left", "450px")
    $("#register").css("display", "none")
    $("#btn").css("left", "-5px")
    $("#register-btn").css({
        "color": "black",
        "font-weight": "bold"
    })
    $("#login-btn").css({
        "color": "white",
        "font-weight": "bold"
    })
}