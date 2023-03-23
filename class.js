// syntactic sugar
class Instructor {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for the module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
// console.log(aamir);
aamir.startSupportSession('9.00')
aamir.createQuiz(60);
const solaiman = new Instructor('solaiman', 'dhaka');
console.log(solaiman);
