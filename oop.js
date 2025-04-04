var Employee = /** @class */ (function () {
    function Employee(empName, empAge, empJob) {
        var _this = this;
        this.prnitEmp = function () {
            console.log("".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this.empAge, "\uC774\uACE0 \uC9C1\uC5C5\uC740 ").concat(_this.empJob, " \uC785\uB2C8\uB2E4."));
        };
        this.empName = empName;
        this.empAge = empAge;
        this.empJob = empJob;
    }
    return Employee;
}());
var employee1 = new Employee("kim", 123, "seok");
employee1.prnitEmp();
