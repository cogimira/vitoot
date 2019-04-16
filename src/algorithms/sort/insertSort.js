const producer = require("../../dataproducer");

//simple insert sort
function insertSort(ary) {
    var resAry = [ary[0]];
    for(var i = 1; i < ary.length -1; i++) {
        var toInsert = ary[i];
        //insert to
        for(var j = 0; j < resAry.length; j++) {
            if(toInsert <= resAry[j]) {
                resAry.splice(j,0,toInsert);
                break;
            }else if(j === resAry.length - 1){
                resAry.push(toInsert);
            }
        }
    }

    return resAry;
}

// direct insert sort
// 从第一个元素开始，该元素可以认为已经被排序
// 取出下一个元素，在已经排序的元素序列中从后向前扫描
// 如果该元素（已排序）小于新元素，将新元素插入该元素下一位置
// 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置，将新元素插入到该位置后
// 若无，则将新元素插入最左侧
// 重复步骤2~5
function insertSort2(ary) {
    // choose which index use to insert
    for(var i = 1; i < ary.length; i++) {
        // insert range
        for(var j = 0; j < i; j++) {
            
        }
    }
}

//test
var tary = producer.produceIntAry(12);
var resary = insertSort2(tary);
console.log(resary);