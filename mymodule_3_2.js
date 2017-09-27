
/// data type
var Person=function(){
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

/// data type
var Shop=function(){
    /**
     * おなまえ
     * @type String
     */
    this.name="";

    /**
     * 住所
     * @type String
     */
    this.Address="";
};

module.exports={
    Person:Person,
    Shop:Shop
};