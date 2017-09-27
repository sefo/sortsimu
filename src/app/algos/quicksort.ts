export function quickSort(initArray, metaLeft, metaRight) {
    if (initArray.length <= 1) { 
        return initArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = initArray.pop();
        var length = initArray.length;

        for (var i = 0; i < length; i++) {
            if (initArray[i] <= pivot) {
                left.push(initArray[i]);
            } else {
                right.push(initArray[i]);
            }
        }
        console.log([].concat(metaLeft, left, pivot, right, metaRight));
        var sortedLeft = quickSort(left, metaLeft, [pivot].concat(right, metaRight))
        var sortedRight = quickSort(right, metaLeft.concat(sortedLeft, pivot), metaRight)
        return newArray.concat(sortedLeft, pivot, sortedRight);
    }
}