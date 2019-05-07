// 队列  head tail enqueue dequeue
// tail指针指向的位置是没有数据的

/* 
* @method:基本队列  
* @param: { num } 队列的初始化空间
*/
function queue(size) {
    this.size = size;
    this.queueStore = new Array(size);
    this.head = 0;
    this.tail = 0;
}

// 入队
queue.prototype.enqueue = function (value) {
    if(this.tail > this.size - 1) {
        if(this.head == 0) {
            console.log("进入队列失败");
            return false;
        } else {
            // 数据搬移
            for(var i = this.head; i < this.size; i++) {
                this.queueStore[i - this.head] =  this.queueStore[i];
            }
            this.head = 0;
            this.tail = this.tail - this.head;
            // 数据搬移完之后进行入队操作
            this.queueStore[this.tail] = value;
            return value;
        }
    }
    // 直接入队
    this.queueStore[this.tail] = value;
    this.tail++;
    return value;
}

queue.prototype.dequeue = function () {
    if(this.head < this.tail) {
        var res = this.queueStore[this.head];
        this.head++;
        // 队为空的时候重置队列
        if(this.head == this.tail) {
            this.head == 0;
            this.tail == 0;
        }
        return res;
    } else {
        // 
        console.log("队列中已经没有数据了");
        return null;
    }
}

// 循环队列
function circleQueue(size) {
    this.queueStore = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
}

// 循环队列入队
circleQueue.prototype.enqueue= function (value) {
    // 如果队列的尾指针已经指到数组的最后一个位置
    if(this.tail >= this.size - 1) {
        if(this.head > 0) {
            this.tail = 0;
            this.queueStore(this.size - 1) = value;
        } else {
            console.log("队列已经满了");
            return null;
        }
    } else {
        var next = this.tail + 1;
        if(next == this.head) {
            console.log("队列已经满了");
            return null;
        } else {
            this.queueStore[this.tail] = value;
            this.tail++;
        }
    }
}

// 循环队列出队
circleQueue.prototype.dequeue(va) = function () {
    if(this.head === this.tail) {
        console.log("队列为空");
        return null;
    } else {
        var res = this.queueStore[this.head];
        this.head++;
        // 头的指针超过了边界
        if(this.head > this.size - 1) {
            this.head == 0;
        }
        console.log("出队成功");
        return res;
    }
}




// 基于链表的队列
// 链表循环队列
// 阻塞队列
// 并发队列
// 循环并发队列