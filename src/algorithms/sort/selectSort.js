const producer = require("../../dataproducer");

function selectSort(ary) {
    var minIndex = 0;
    for(var i = 0; i < ary.length - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < ary.length; j++) {
            if(ary[j] < ary[minIndex]) {
                minIndex  = j;   
            }
        }
        if(minIndex != i) {
            var temp = ary[i];
            ary[i] = ary[minIndex];
            ary[j] = temp;
        }
    }
}

//test
var tary = producer.produceIntAry(8);
selectSort(tary);
console.log(tary);