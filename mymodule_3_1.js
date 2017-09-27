const Models = require("./mymodule_3_2");
const Person = Models.Person;
const Shop = Models.Shop;

/**
 * constructor
 * 
 * @returns void
 */
var mymodule_3_logic_part = function(){
    console.log("mymodule_3_logic.constructor called.");
};

/**
 * レコードの内容を表示
 * @param { Person } rec レコード
 */
mymodule_3_logic_part.prototype.showPerson=function(rec){
    console.log("名前:" + rec.name);
    console.log("年齢:" + rec.age);
};
/**
 * レコードの内容を表示
 * @param { Models } shop レコード
 */
mymodule_3_logic_part.prototype.showShop=function(shop){
    console.log("名前:" + shop.name);
    console.log("住所:" + shop.Address);
};

module.exports={
    Logic:mymodule_3_logic_part,
    Models:Models
}
