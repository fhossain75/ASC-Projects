//var ID = "a049daa4";
//var KEY = "5e8dce4b71e20dda1450400ab2145ff2";
var randomuser= "https://randomuser.me/api/?results=5000"// + ID + "&appKey="+ KEY;

$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    //FIRST NAME
    var userFirstName=(data.results[0].name.first)
    console.log(userFirstName);
    $('body').append("<h1>First Name: " + userFirstName + "</h1>");
    //LAST NAME
    var userLastName=(data.results[0].name.last)
    console.log(userLastName);
    $('body').append("<h1>Last Name: " + userLastName + "</h1>");
    //Photo
    var userPhoto=(data.results[0].picture.large)
    console.log(userPhoto);
    $('body').append('<h2> Photo: <img src='+ userPhoto+' <img> </h2>');
    //State
    var userState=(data.results[0].location.state)
    console.log(userState);
    $('body').append("<h1>State: " + userState + "</h1>");
}
});


