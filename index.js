class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for (const argument of args) {
            this.push(argument);
        }
    }

    get size() {
        return this._tail - this._head;
    }

    push(value) {
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }

    unshift() {
        if (this.size) {
            const deItem = this[this._head];
            delete this[this._head++];
            return deItem;
        }
    }
}

const mergeQueues = (q1, q2) => {
    const q3 = new Queue();
    for (let i = q1._head; i < q1._tail; i++) {
        q3.push(q1[i])
    }
    for (let i = q2._head; i < q2._tail; i++) {
        q3.push(q2[i])
    }
    return q3;
}

const mergeQueuesPerfect = (...queues) => {
    const a = new Queue();
    for (const q of queues) {
        for (let i = q._head; i < q._tail; i++) {
            a.push(q[i])
        }
    }
    return a;
}