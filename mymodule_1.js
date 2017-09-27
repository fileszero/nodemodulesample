
/**
 * constructor
 * 
 * @returns void
 */
var mymodule_1 = function(){
    console.log("mymodule_1.constructor");
};

mymodule_1.prototype.method1=function(){
    console.log("mymodule_1.method1");
}

module.exports=mymodule_1;