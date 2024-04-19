import { useEffect,useState } from "react";

const Profile=()=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("Namste React Op")
        },1000);

        return()=>{
            clearInterval(timer);
            console.log("useEffect Return/ Unmount...")
        }
    },[])

    console.log("render")



    return(
        <div>
            <h2>Profile Component </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas rerum nihil sapiente vitae totam inventore quisquam incidunt assumenda veritatis.</p>
        </div>
    )
}

export default Profile;