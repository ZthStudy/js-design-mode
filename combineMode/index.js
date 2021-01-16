/*
 * @Description: 组合模式
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-16 13:57:40
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-01-16 19:05:33
 */
// 扫描文件夹下所有文件夹和文件
class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
  }
  add(file) {
    this.files.push(file);
  }
  scan() {
    console.log("开始扫描文件夹" + this.name);
    for (let i = 0, file; (file = this.files[i++]); ) {
      file.scan();
    }
  }
}

class File {
  constructor(name) {
    this.name = name;
  }
  add() {
    throw new Error("文件下面不能再添加文件");
  }
  scan() {
    console.log("开始扫描文件" + this.name);
  }
}

const folder = new Folder("学习资料");

const file1 = new File("js设计模式");
const folder1 = new Folder("js");
const file2 = new File("你不知道的js");

folder.add(file1);
folder1.add(file2);
folder.add(folder1);

folder.scan();
