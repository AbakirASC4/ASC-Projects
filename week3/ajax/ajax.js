// id :61472674
//key : 6a18c145a47d03536d4a0b3a162fd45c
var id = "61472674";
var key = "6a18c145a47d03536d4a0b3a162fd45c";
var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&" +
              "appId=" + id + "&appKey=" + key;

$.ajax({
    url: foodURL,
    success:function(data){
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2> This " + name + " has " + cals + " Kcals!!</h2")
    }
});

