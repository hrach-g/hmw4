Function ex_1(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let nestedElements = ex_1(arr[i]);
            for (let j = 0; j < nestedElements.length; j++) {
                result.push(nestedElements[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(ex_1([1, [3, 4, [1, 2]], 10]));

// ex_2
function ex_2(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        console.log(sum);
        n = Math.floor(n / 10);
    }

    if (sum > 9) {
        return ex_2(sum);
    }
    return sum;
}
// console.log(ex_2(29));

// ex_4
function ex_4(obj) {
    let res = {};

    for (let prop in obj) {
        if (obj[prop] in res) {
            res[obj[prop]] = Array.isArray(res[obj[prop]]) ? res[obj[prop]] : [res[obj[prop]]];
            res[obj[prop]].push(prop);
        } else {
            res[obj[prop]] = prop;
        }
    }

    return res;
}
// console.log(ex_4({
//     a: '1',
//     b: '2',
//     c: '2'
// }));

// ex_5
function ex_5(arr) {
    function sortByPercent(a, b) {
        if (a.percent < b.percent) {
            return 1;
        }
        if (a.percent > b.percent) {
            return -1;
        }
        return 0;
    }
    function sortByStatus(a, b) {
        if (a.readStatus < b.readStatus) {
            return 1;
        }
        if (a.readStatus > b.readStatus) {
            return -1;
        }
        return 0;
    }

    let result = arr.sort(sortByPercent).sort(sortByStatus);
    return result;
}

// console.log(ex_5([
//     {
//         book: "Animal",
//         readStatus: true,
//         percent: 57
//     },
//     {
//         book: "Flowers",
//         readStatus: false,
//         percent: 90
//     },
//     {
//         book: "test",
//         readStatus: true,
//         percent: 50
//     },
//     {
//         book: "test",
//         readStatus: true,
//         percent: 95
//     },
// ]));