// You are given two arraysAandB, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in descending order.
// You have to find the number of elements common in both the arrays.

function twoArray(n, arr1, arr2) {
    arr2 = arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let count = 0;
    while (i < n && j < n) {

        if (arr1[i] == arr2[j]) {
            count++;
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }

    console.log(count);

}

// input Taking
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr1 = input[line++].split(" ").map(Number);
        let arr2 = input[line++].split(" ").map(Number);

        twoArray(n, arr1, arr2);
    }




}
if (process.env.USERNAME === "User") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}