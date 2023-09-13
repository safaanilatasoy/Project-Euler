process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function sumOf3or5(num) {
  num = BigInt(num);

  return BigInt(
    sumOfSequence(num - 1n, 3) +
      sumOfSequence(num - 1n, 5) -
      sumOfSequence(num - 1n, 15)
  ).toString();
}

function sumOfSequence(num, multiple) {
  // find the number of times multiple can go into num
  let terms = num / BigInt(multiple);
  // Use Gauss's summation trick
  let sum = (terms * (terms + 1n)) / 2n;
  return BigInt(multiple) * sum;
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());

    let result = sumOf3or5(n);
    console.log(result);
  }
}
