var ID = "a049daa4";
var KEY = "5e8dce4b71e20dda1450400ab2145ff2";
var bigMacUrl= "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + ID + "&appKey="+ KEY;

$.ajax({
    url:bigMacUrl,
    success:function(data){
        //console.log(data);
    var food = data.hits[0];
    var name = food.fields.item_name;
    var cals = food.fields.nf_calories;
    $("body").append("<h2> This" + name + "has" + cals + "kcal !!!</h2>");
    }
});