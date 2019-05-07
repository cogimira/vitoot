const producer = require("../dataProducer");

//快速排序
function quickSort2(ary) {
    function sort(ary, left, right) {
        var startLeft = left;
        var startRight = right;
        // 递归退出条件
        if(left >= right) {
            return;
        } 
        //设置指针为right
        var index = right;
        while(left < right) {
            if(ary[left] <= ary[index]) {
                left ++;
                continue; 
            }
            //如果左边的值比目标要大
            if(ary[left] > ary[index]) {
                if(right == index) {
                    right--;
                    var temp = ary[left];
                    ary[left] = ary[right]
                    ary[right] = temp;
                    continue;
                }
                var temp = ary[left];
                ary[left] = ary[right]
                ary[right] = temp;
                right--;
                continue;
            }
        }

        // 将index的值移动到目标位置
        var temp = ary[left];
        ary[index] = ary[left]
        ary[left] = temp;
        var nextIndex = left;

        sort(ary, startLeft, nextIndex-1);
        sort(ary, nextIndex + 1, startRight);
        
    }

    sort(ary, 0, ary.length-1);
}

// function quickSort(arr){
//     //如果数组<=1,则直接返回
//     if(arr.length <=1 ){return arr;}
//     var pivotIndex=Math.floor(arr.length/2);
//     //找基准，并把基准从原数组删除
//     var pivot=arr.splice(pivotIndex,1)[0];
//     //定义左右数组
//     var left=[];
//     var right=[];

//     //比基准小的放在left，比基准大的放在right
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<=pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     //递归
//     return quickSort(left).concat([pivot],quickSort(right));
// } 

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }

    }
    return items;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


// var aryToSort = producer.produceIntAry(12);
// console.log(aryToSort);
// var res = quickSort(aryToSort, 0, 11);
// console.log(res);

// 13*, 92, 63, 84, 25, 16, 97, 87#, 33*
// 13, 92*, 63, 84, 25, 16, 97, 87#, 33*
// 13, 33*, 63, 84, 25, 16, 97*, 87#, 92
// 13, 33, 63*, 84, 25, 16, 97*, 87#, 92
// 13, 33, 63, 84*, 25, 16, 97*, 87#, 92
// 13, 33, 63, 84, 25*, 16, 97*, 87#, 92
// 13, 33, 63, 84, 25, 16*, 97*, 87#, 92
// 13, 33, 63, 84, 25, 16, 97**, 87#, 92
// 13, 33, 63, 84, 25, 16, 87!, 97, 92

// 利用快速排序找到第k大的元素