// var argvs = process.argv;
// console.log(argvs);
//参数中的前两位成员都没有什么意义
var argvs = process.argv.slice(2);
// console.log(argv.toString());
switch (argvs[0]) {
  case "init":
    console.log("你需要INIT");
    break;
  case "install":
    var installPackageName = argvs[1];
    console.log("你在安装" + installPackageName);
    break;
  case "uninstall":
    console.log("uninstall");
    break;
  default:
    console.log("命令错误");
}
