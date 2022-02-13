function circularTraversal(N,arr){
    let ans = [];
    for(let i=N-1; i>=0; i--){
        ans.push(arr[i][0]);
    }
    
    for(let i=1; i<N; i++){
        ans.push(arr[0][i]);
    }
    
    for(let i=1; i<N; i++){
        ans.push(arr[i][N-1]);
    }
    
    for(let i=N-2; i>=1; i--){
        ans.push(arr[N-1][i]);
    }
    
    
    console.log(ans.join(" "));
    
    
}

// input taking
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let arr = [];
    let N = +input[line++];
    for (let j = 0; j < N; j++) {
      let row = input[line++].trim().split(" ").map(Number);
      arr.push(row);
    }

    circularTraversal(N,arr);
  }



}

if (process.env.USERNAME === "User") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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