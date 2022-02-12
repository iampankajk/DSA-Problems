
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

function takeOutMax(N, K, arr) {
    let maximum = [];
    let max = 0;
    for (let i = 0; i < K; i++) {
        max = max + arr[i];
    }

    maximum.push(max);

    let right = K;
    let left = 0;

    while (right < N) {
        max = max - arr[left];
        max = max + arr[right];
        maximum.push(max);
        left++;
        right++;
    }

    maximum.sort((a, b) => b - a);

    console.log(maximum[0]);


}




// input taking
function runProgram(input) {

    input = input.split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    takeOutMax(N, K, arr);


}
if (process.env.USERNAME === "User") {
    runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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