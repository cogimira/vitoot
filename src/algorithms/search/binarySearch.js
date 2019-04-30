const producer = require("../dataProducer");

// 二分查找
function binarySearch(ary, left, right, target) {
    
    var mid = Math.floor((left + right) / 2);
    while(mid != left && mid > left) {
        if(ary[mid] == target) {
            return mid;
        }
        if(target < ary[mid]) {
            right = mid - 1;
        }
        if(target > ary[mid]) {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return -1;


}