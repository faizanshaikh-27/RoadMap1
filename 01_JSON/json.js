myJSON = `{
    "name": "Faizan",
    "age" : 23,
    "isAdmin": true,
    "License": null,
    "ShopItem": ["food", "clothes", "shoes"],
    "myObj": {
        "name": "JavaScript",
        "color": "Yellow",
        "ShopItem": ["food", "clothes", "shoes"]
    }
}`;
Json_Data = JSON.parse(myJSON);
console.log(Json_Data);

console.log(Json_Data["isAdmin"]);
console.log(Json_Data["ShopItem"][2]);
console.log(Json_Data["myObj"]["ShopItem"][2]);