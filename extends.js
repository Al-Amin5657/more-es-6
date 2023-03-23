class teamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }

}

class Instructor extends teamMember {
    designation = 'web course Instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for the module ${module}`)
    }
}
class developer extends teamMember {
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`start develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }

}


class jobPlacement extends teamMember {

    designation = 'job placement commandos'
    team = 'job placement'
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`start develop the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please release the version ${version}`)
    }
}
const alia = new developer('alia bhatt', 'dhaka', 'react');
console.log(alia);
alia.provideFeedback();

const bipasha = new jobPlacement('bipasha', 'kolkata', 'India');
console.log(bipasha);