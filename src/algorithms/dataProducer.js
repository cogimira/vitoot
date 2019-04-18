// 为各种数据结构和算法产生数据

/** 
 * @method 产生特定长度的随机整数数组
*/
function produceIntAry(len, min, max) {
    var minNum = min || -100;
    var maxNum = max || 100;
    var resAry = [];
    for(var i = 0; i < len; i++) {
        var proNum = parseInt(Math.random() * minNum + maxNum);
        resAry.push(proNum);
    }
    return resAry;
}

function produceSortedAry(num) {
    var ary = produceIntAry(num);
    return ary.sort();
}


module.exports = {
    produceIntAry: produceIntAry,
    produceSortedAry:produceSortedAry
}