import { useState } from "react";

function Car() {
    const [Name, setName] = useState("Rohit");
    const [age, setAge] = useState("22");
    const [car, setCar] = useState("Rohit");

    const handelonclick =() => {
        setName("vishal");
        setAge("27");
        setCar("tiago")
    }
    
    return (
        <>
            <h1>My Name is {Name}</h1>
            <h1>My Age is {age}</h1>
            <h1>My Car is {car}</h1>
            <button
                type="button"
                onClick={handelonclick }
            >Blue</button>
        </>
    )
}
export default Car;