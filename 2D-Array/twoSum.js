function twoSum(N,K,arr){
    let flag = true;
    for(let i=0; i<N && flag; i++){
        for(let j=i+1; j<N; j++){
            if(K==arr[i]+arr[j]){
                flag=false;
                console.log(i,j);
                break;
            }
        }
    }
    
    if(flag){
        console.log(-1,-1);
    }
    
    
    
}

// input taking
function runProgram(input) {
    
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;

    for(let i=0; i<tc; i++){
        let [N,K] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);

        twoSum(N, K, arr);
    }
  
  
  }
  if (process.env.USERNAME === "User") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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
      process.exit(0) ;
    });
  }