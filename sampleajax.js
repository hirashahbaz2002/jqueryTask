$(function(){
$("#load").click(sendAjax)

});
function sendAjax(){
    console.log("Sending ajax Request")
    //send req here
    $.get("student.txt",handleResponse)
    console.log("sent");
}
function handleResponse(Response){
    console.log("Response Received");
    //console.log(Response);
    $("#result").empty();
    $("#result").append(Response);
}