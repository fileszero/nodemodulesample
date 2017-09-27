const mymodule_1 = require('./mymodule_1');
const mymodule_2 = require('./mymodule_2');

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
