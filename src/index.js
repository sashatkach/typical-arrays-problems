exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    let min = array[0];
    array.slice(1).forEach(item => { if (min > item) { min = item } });
    return min;
}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    let max = array[0];
    array.slice(1).forEach(item => { if (max < item) { max = item } });
    return max;
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    let avg = array.reduce((acc, item) => acc + item, 0) / array.length;
    let diff = 0;
    let i = 0
    if (array.includes(avg) !== -1) {
        return avg;
    }
    array.forEach((item, index) => { if (diff > Math.abs(avg - item)) diff = Math.abs(avg - item);
        i = index })
    return array[i];

}