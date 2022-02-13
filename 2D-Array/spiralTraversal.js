function spiralTraversal(N, M, arr) {
  let count = 0;
  let str = [];
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = M - 1;


  while (count < N * M) {

    for (let i = top; i <= bottom && count < N * M; i++) {
      str.push(arr[i][left]);
      count++;
    }

    left++;

    for (let i = left; i <= right && count < N * M; i++) {
      str.push(arr[bottom][i]);
      count++;
    }

    bottom--;

    for (let i = bottom; i >= top && count < N * M; i--) {
      str.push(arr[i][right]);
      count++;
    }

    right--;

    for (let i = right; i >= left && count < N * M; i--) {
      str.push(arr[top][i]);
      count++;
    }

    top++;

  }

  console.log(str.join(" "));

}



// input Taking
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let arr = [];
    let [N, M] = input[line++].trim().split(" ").map(Number);
    for (let j = 0; j < N; j++) {
      let row = input[line++].trim().split(" ").map(Number);
      arr.push(row);
    }

    spiralTraversal(N, M, arr);
  }



}
if (process.env.USERNAME === "User") {
  runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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