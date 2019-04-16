const producer = require("../dataProducer");

//冒泡排序
function bubSort(ary) {
    for(var i = 0; i < ary.length; i++) {
        console.log(ary);
        for( var j = ary.length -1; j > i; j--) {
            var bubNum = ary[j];
            var bubTo = ary[j-1];
            //冒泡
            if(bubNum > bubTo) {
                var temp = bubTo;
                ary[j-1] = bubNum;
                ary[j] = temp;
            }
        }
    }
}

//test
var ary = producer.produceIntAry(12);
bubSort(ary)
module.exports = bubSort;