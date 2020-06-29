var fields={};
document.addEventListener("DOMContentLoded", function(){
    fields.message = document.getElementById("message");
})

function isNotEmpty(value){
    if(value == null) return false;

    return (value.length>0);
}
function isValid(){
    var valid = true;

    valid &= isNotEmpty(fields.message.value)

    return valid;
}
function sendContact(){
    if(isValid()){

        alert('Message sent!')
    }
    else{
        alert("Can't send an empty message :'(")
    }
}