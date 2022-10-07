class User{
    constructor(name,email){
        this.name = name;
        this.email = email
    }


    // if we want to make this private just use #courselist = [] (we can get same result in getcourseList) -- in class no need to use let , const, var
    courseList = []

    getinfo(){
        return {name : this.name, email : this.email }
    }


    // setters
    enrollCourse(name){
        this.courseList.push(name)
    }


    // getters
    getCourseList(){
        return this.courseList;
    }
    
}

var javid = new User("Javid","mahammedjavid8@gmail.com")
console.log(javid)

javid.enrollCourse("Angular")
javid.enrollCourse("React")

console.log(javid.getCourseList())



let course = javid.courseList()

course.forEach(c => {
    console.log(c)
});






