// process.stdout.write("hello node");
// console.log("hello node");
// var log = function(message) {
//   process.stdout.write(message + "\n");
// };
// es2015 定义
// var log2 = message => {
//   process.stdout.write(message + "\n");
// };
// 模板字符串
var msg = "hello";
var a = 1;
process.stdout.write(`
${msg} world 
${a}
`);
