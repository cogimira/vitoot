const producer = require("../dataproducer");

//希尔排序
function shellSort(ary) {
    var n = ary.length;
    //计算分组增量
    var stepInc = parseInt(n/2);
    //
    while(stepInc > 0) {
        for(var i = 0; i < stepInc; i++) {
            for( var j = i + stepInc; j < n; j += stepInc) {
                if(ary[j] < ary[j - stepInc]) {
                    var temp = ary[j];
                    var k = j - stepInc;
                    // 插入到目标位置
                    while( k >= 0 && ary[k] > temp) {
                        ary[k + stepInc] = ary[k];
                        k -= stepInc;
                    }
                    ary[k + stepInc] = temp;
                }
            }
        }
     
        stepInc = parseInt(stepInc / 2);
    }

}

var toSort = producer.produceIntAry(12);
console.log(toSort);
shellSort(toSort);
console.log(toSort);
