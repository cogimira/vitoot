const producer = require("../dataProducer");

function merge(ary1, ary2) {
    if(!ary1) {
        return ary2;
    }
    if(!ary2) {
        return ary1;
    }
    var resAry = [];
    var index1 = 0;
    var index2 = 0;
    for(var i = 0; i < ary1.length; i = index1) {
        // console.log(index1 +"__"+index2)
        // 如果另外一个数组超出了边界,j就把当前数组剩下的元素push进结果数组
        if(index2 >= ary2.length) {
            for(var j = i; j < ary1.length; j++) {
                resAry.push(ary1[j]);
            }
            break;
        }
        if(ary1[index1] < ary2[index2]) {
            resAry.push(ary1[index1]);
            index1++;
        } else if(ary1[index1] > ary2[index2]) {
            resAry.push(ary2[index2]);
            index2++;
        } else if(ary1[index1] == ary2[index2]) {
            resAry.push(ary1[index1]);
            resAry.push(ary2[index2]);
            index1++;
            index2++;
        }
    }
    
    // 如果ary2数组的元素还没有全部push进结果数组
    if(index2 < ary2.length) {
        // console.log("push" + index2);
        for(var k = index2; k < ary2.length; k++) {
            resAry.push(ary2[k])
        }
    }

    return resAry;
}

function mergeSort(ary) {
    if(ary.length === 1) {
        // console.log(ary);
        return ary;
    }
    var resAry1, resAry2;
    var sliceIndex = parseInt(ary.length / 2);
    var ary1 = ary.slice(0,sliceIndex);
    var ary2 = ary.slice(sliceIndex,ary.length);
    resAry1 = mergeSort(ary1);
    resAry2 = mergeSort(ary2); 
    return merge(resAry1,resAry2);
}

var toSort = producer.produceIntAry(12);

// var testMerge1 = producer.produceSortedAry(4);
// var testMerge2 = producer.produceSortedAry(4);
// console.log(testMerge1);
// console.log(testMerge2);

// var res = merge(testMerge1, testMerge2);

var resSort = mergeSort(toSort);

console.log(resSort);

// function merge1(left, right) {
//     var tmp = [];
  
//     while (left.length && right.length) {
//       if (left[0] < right[0])
//         tmp.push(left.shift());
//       else
//         tmp.push(right.shift());
//     }
  
//     return tmp.concat(left, right);
//   }
  
// function mergeSort(a) {
// if (a.length === 1) 
//     return a;

// var mid = ~~(a.length / 2)
//     , left = a.slice(0, mid)
//     , right = a.slice(mid);

// return merge(mergeSort(left), mergeSort(right));
// }
