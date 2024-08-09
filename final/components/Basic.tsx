"use client"

import {FC} from "react";

const staticNum:number = 5;
 
type Gender = "Malle"| "Female"; 

interface Props{
    initVal:number
    gender:Gender;
}

interface Person {
    firstName?:String;
    lastName:String;
    age?:number; //ต้องมีค่าห้ามมีค่าว่าง
    single:boolean;    
}
const person:Person ={
    firstName:"Mark",
    lastName:"que5t10nmark",
    age: 20,
    single:true,
};


const Basic:FC<Props> = ({initVal, gender}) => {
    const verifyGender = (gd:Gender) =>{
        if(gd === "Female")console.log(gender);
        else console.log("Not Female");
    };

    return(
        <>
        <p>Basic</p>
        <div>{staticNum}</div>
        <div>{person.firstName}</div>
        <div>{initVal}</div>
        <div>{gender}</div>
        <button>Increase</button>
        <button onClick= {() => verifyGender(gender)}>Gender</button>
        </>
    );
};

Basic.defaultProps={
    initVal: 0,
    gender: "Female"
};
export default Basic;