const aryProducer = require("../dataProducer");

function singleDirectList(value) {
    this.next = null;
    this.value = value;
}

singleDirectList.prototype.addNode = function addNode(value) {
    if(this.next == null) {
        var node = new singleDirectList(value);
        this.next = node;
    } else {
        this.next.addNode(value);
    }
}

function doubleDirectList(value) {
    this.pre = null;
    this.next = null;
    this.value = value;
}

doubleDirectList.prototype.addNode = function addNode(value) {
    if(this.next == null) {
        var node = new doubleDirectList(value);
        this.next = node;
        node.pre = this;
    } else {
        this.next.addNode(value);
    }
}


// 将链表转换成字符串
function list2Ary(header, data) {
    if(header.value) {
        data.push(header.value);
    } else {
        return;
    }
    //
    if(!header.next) {
        return;
    }

    list2Ary(header.next, data);
}
// gen 单向链表 值是随机的
function proSingleDirectList(num) {
    var testAry = aryProducer.produceSortedAry(num);
    var header = new singleDirectList(testAry[0]);
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    var data = [];
    console.log("base ary:  ");
    console.log(testAry.join(" - "));
    list2Ary(header, data);
    console.log("listRes:  ");
    console.log(data.join(" > "));
    return header;
}

// gen双向链表 值是随机的
function proDoubleDirectList(num) {
    var testAry = aryProducer.produceSortedAry(num);
    var header = new doubleDirectList(testAry[0]);
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    return header;
}

function dblist2Ary(header, data) {
    var ind = {};
    if(header.value) {
        ind.value = header.value;
        ind.nextValue = header.next ? header.next.value : null;
        ind.preValue = header.pre ? header.pre.value : null;
        data.push(ind);
    } else {
        return;
    }
    if(!header.next) {
        return;
    }
    dblist2Ary(header.next, data);
}

// proSingleDirectList(10);
var dl = proDoubleDirectList(12);
var dataD = [];
dblist2Ary(dl, dataD);
console.log(dataD);

// exports
module.exports = {
    proSingleDirectList: proSingleDirectList,
    proDoubleDirectList:proDoubleDirectList,
    list2Ary:list2Ary,
    dblist2Ary:dblist2Ary
}

