$(document).ready(function(){
    console.log("ready")
    $('#submit_button').click(LogIn);
});

$(document).ready(function(){
    console.log("ready")
    $('#signup_button').click(SignUp);
});



// function LogIn(){
//     $.ajax({
//         url: '/api/login',
//         method: 'POST',
//         data: {
//             username: $('#login-username').val(),
//             password: $('#login-password').val()
//         }
//     })
// }


// function SignUp(){
//     $.ajax({
//         url: '/api/signup',
//         method: 'POST',
//         data: {
//             username: $('#signup-username').val(),
//             password: $('#signup-password').val()
//         }
//     })
// }
