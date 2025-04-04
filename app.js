var stdId = 1111;
var stdName = "seok";
var age = 20;
var completed = false;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 1234;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = false;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "lee",
//     gender: "female",
//     age: 20,
//     completed: false,
//   };
// }
var myInstace = new MyStudent();
myInstace.setName("석쿠");
