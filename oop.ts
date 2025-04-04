class Employee {
  empName: string;
  empAge: number;
  empJob: string;

  constructor(empName: string, empAge: number, empJob: string) {
    this.empName = empName;
    this.empAge = empAge;
    this.empJob = empJob;
  }

  prnitEmp = (): void => {
    console.log(
      `${this.empName}의 나이는 ${this.empAge}이고 직업은 ${this.empJob} 입니다.`
    );
  };
}

let employee1 = new Employee("kim", 123, "seok");

employee1.prnitEmp();
