
/**
 * constructor
 * 
 * @returns void
 */
var mymodule_1 = function(){
    console.log("mymodule_1.constructor called.");
};

mymodule_1.prototype.method1=function(){
    console.log("mymodule_1.method1 called.");
}

module.exports=mymodule_1;