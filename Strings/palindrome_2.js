// You are given a string S. Find if the string, can be converted into a palindrome.

// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

// Deletion or addition of characters is not allowed.


function palindrome(N,str){
    let obj={};
    
    for(let i=0; i<N; i++){
        if(obj[str[i]]===undefined){
            obj[str[i]]=1;
        }else{
            obj[str[i]]++;
        }
    }
    let count=0;
    for(let k in obj){
        if(obj[k]%2==1){
            count++;
        }
    }

    if(count>1){
        console.log("Not Possible!");
    }else{
        console.log("Possible!");
    }
}

// input Taking
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    
    let N = +input[line++];
    let str = input[line++].trim();

    palindrome(N,str);
  }



}
if (process.env.USERNAME === "User") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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