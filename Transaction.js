export default class Transaction {
    constructor(value, direction) {
        this.value = value;
        this.direction = direction;
    }

    getValue() {
        return this.value;
    }

    getDirection() {
        return this.direction;
    }
}