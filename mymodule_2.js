
/**
 * constructor
 * 
 * @returns void
 */
var mymodule_2 = function(){
    console.log("mymodule_2.constructor called.");
};

mymodule_2.prototype.method1=function(){
    console.log("mymodule_2.method1 called.");
};

/// data type
var Record=function(){
    /**
     * おなまえ
     * @type String
     */
    this.name="";

    /**
     * 年齢
     * @type int
     */
    this.age=0;
};

/**
 * レコードの内容を表示
 * @param {Record} rec レコード
 */
mymodule_2.prototype.method2=function(rec){
    console.log("名前:" + rec.name);
    console.log("年齢:" + rec.age);
};

module.exports={
    mymodule_2:mymodule_2,
    Record:Record
};