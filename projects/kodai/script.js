
function subscribe(){
    var name = document.querySelector('.name').value
    var email = document.querySelector('.email').value
    var submit = document.querySelector('.submit')
    var at = email.indexOf("@")
    var dot = email.indexOf(".")
    if(name == ''){
        alert("Please enter your Name !")
    }
    else if(at<1 || ((dot - at)<2)){
        alert("Please enter valid email id !")
    }

    alert("Submiited Successfully !")
}
