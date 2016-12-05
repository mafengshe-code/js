function Student(no, sex, year) {

    this.no = no;
    this.sex = sex;
    this.year = year;
    return this;
}
var goodStudent = {
    happy: true
};
var xiaoming = Student.call(goodStudent, 1, '男', 18);

console.log(xiaoming);