var num=[1,2,3,4,5,6,7,8,9]
var randomnum = Math.floor(Math.random() * num.length)+1;
var num2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
var randomnum2 = Math.floor(Math.random() * num.length)+1;
var num3=["Male","Female"]
var randomnum3 = Math.floor(Math.random() * num.length)+1;
var randomuser= "https://randomuser.me/api/?results=5000"

function setup(){
  $('.petNum').html(""+randomnum)
  $('.kidNum').html(""+randomnum)
  $('.monthNum').html(""+randomnum2)
  $('.genderNum').html(""+randomnum3)

var randomuser= "https://randomuser.me/api/?results=5000"// + ID + "&appKey="+ KEY;
var userPhoto;
var userPhoto1;
var cycles = 0;
$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    //FIRST NAME
    var userFirstName=(data.results[0].name.first)
    $('.matchFirstName1').attr("src",''+ userFirstName +'');

    //LAST NAME
    var userLastName=(data.results[0].name.last)
    $('.matchLastName1').attr("src",''+ userLastName +'');
    
    //Photo
    userPhoto=(data.results[0].picture.large)
    $('.matchPhoto1').attr("src",''+ userPhoto +'');

    //State
    var userState=(data.results[0].location.state)
    $('.matchState1').attr("src",''+ userState +'');
  }
})
$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //FIRST NAME
    var userFirstName=(data.results[0].name.first)
    $('#matchFirstName2').attr("src",''+ userFirstName +'');

    //LAST NAME
    var userLastName=(data.results[0].name.last)
    $('#matchLastName2').attr("src",''+ userLastName +'');
    
    //Photo
    userPhoto=(data.results[0].picture.large)
    $('#matchPhoto2').attr("src",''+ userPhoto +'');

    //State
    var userState=(data.results[0].location.state)
    $('#matchState2').attr("src",''+ userState +'');
  }
}) 
}

$(document).ready(setup)