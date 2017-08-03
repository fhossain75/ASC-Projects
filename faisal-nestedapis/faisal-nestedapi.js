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
    //Phone
    var userPhone=(data.results[0].phone)
    console.log(userPhone);
    $('body').append("<h1>Phone: " + userPhone + "</h1>");
    //Photo
    var userPhoto=(data.results[0].picture.large)
    console.log(userPhoto);
    $('body').append('<h2> Photo: <img src='+ userPhoto+' <img> </h2>');
    //Country Code
    var userCountryCode=(data.results[0].nat)
    console.log(userCountryCode);
    $('body').append("<h1>State: " + userCountryCode + "</h1>");

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha?codes=' + userCountryCode,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        //Nationality
        var userNationality=(data[0].name)
        console.log(userNationality);
          $('body').append("<h1> Nationality: " + userNationality + "</h1>");
        //Flag
        var userFlag=(data[0].flag)
        console.log(userFlag);
        $('body').append('<h2> Flag: <img src='+ userFlag +' <img> </h2>');
    }
});
}
})

