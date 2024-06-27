
interface User{
    name: string;
    age: number;

}


function canDrive(usr) {
    console.log("user is", usr.name);

    if(usr.age >= 16) {
        console.log("allow to drive");
    } else{
        console.log("not allow to drive");
    }
}

const tom ={
    name : "tom",
    age : 20
}

canDrive(tom);
