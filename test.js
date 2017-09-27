const mymodule_1 = require('./mymodule_1');
const mymodule_2 = require('./mymodule_2');
const mymodule_3 = require('./mymodule_3_1');

/// mymodule_1 demo
/// basic module
let mod1= new mymodule_1();
mod1.method1();

/// mymodule_2 demo
/// logic class & model class
let mod2= new mymodule_2.mymodule_2();
let rec= new mymodule_2.Record();

rec.name="おれおれ";
rec.age=35;
mod2.method2(rec);

/// mymodule_3 demo
/// multi file
let mod3= new mymodule_3.Logic();
let person= new mymodule_3.Models.Person();
person.name="わたしです";
person.age=45;
let shop= new mymodule_3.Models.Shop();
shop.name="おみせ";
shop.Address="あっち";
mod3.showPerson(person);
mod3.showShop(shop);