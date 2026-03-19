function binarySearch(list: number[], target: number): number | null {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === undefined) break;

        if (guess === target) return mid;
        if (guess > target) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

const list = [1,3,5,7,9,10,13]
console.log(binarySearch(list, 7))
console.log(binarySearch(list, 4))