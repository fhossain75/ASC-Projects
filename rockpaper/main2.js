//Set database object
var database = firebase.database().ref();


//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

   var value = {
        "NAME" : name,
        "MESSAGE" : message,
    }
    //Update database here
    database.push(value)

}

database.on('child_added' , function(rowData) {
    var row = rowData.val();
    var name = row.NAME;
    var message = row.MESSAGE;
    var fullText = "<p>" + name + ": " + message + "</p>";
    $(".allMessages").append(fullText)
})