var TimeMap = /** @class */ (function () {
    function TimeMap() {
        this.keyStore = new Map();
        this.keyStore = new Map();
    }
    TimeMap.prototype.set = function (key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            // const newArray = new Array();
            // newArray.push([value, timestamp])
            this.keyStore.set(key, [value, timestamp]);
        }
        else {
            var list = this.keyStore.get(key) || [];
            list.push([value, timestamp]);
        }
    };
    TimeMap.prototype.get = function (key, timestamp) {
        if (this.keyStore.has(key)) {
            var list = this.keyStore.get(key);
            //binary search on the keys finding the value that is <= the current timestamp
            var left = 0;
            var right = list.length - 1;
            var res = null;
            while (left <= right) {
                var middle = Math.floor((left + right) / 2);
                if (list[middle][1] <= timestamp) {
                    res = list[middle];
                    left = middle + 1;
                }
                else if (list[middle][1] >= timestamp) {
                    right = middle - 1;
                }
            }
            if (res) {
                return res[0];
            }
        }
        return "";
    };
    return TimeMap;
}());
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
