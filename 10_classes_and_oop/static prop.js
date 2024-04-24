const user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const hitesh = new user("hitesh")
console.log(hitesh.createID());
