let stdId: number = 1111;
let stdName: string = "seok";
let age: number = 20;
let completed: boolean = false;

interface Student {
  stdId: number;
  stdName: string;
  age: number;
  gender: string;
  completed: boolean;
  setName: (name: string) => void;
  //   getName: () => string;
}

class MyStudent implements Student {
  stdId = 1234;
  stdName = "park";
  age = 30;
  gender = "male";
  course = "node.js";
  completed = false;
  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
  getName?: () => string;
}

// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "lee",
//     gender: "female",
//     age: 20,
//     completed: false,
//   };
// }

const myInstace = new MyStudent();
myInstace.setName("석쿠");
