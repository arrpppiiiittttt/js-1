class user{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        //return this._password.toUpperCase()
        return`${this._password}arpit`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const arpit = new user("arpit@gmail.com","abc")
console.log(arpit.password);
console.log(arpit.email);