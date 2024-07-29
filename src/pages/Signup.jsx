import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props){
    const navigate = useNavigate()
    const users=props.users
    const setusers=props.setusers

    const [Eusername,setEusername]=useState()
    const[Epassword,setEpassword]=useState()
    const[Cpassword,setCpassword]=useState()
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    function handleUinput(evt){
        setEusername(evt.target.value)
        }
        
        function handleUpassword(evt){
        setEpassword(evt.target.value)
        }

        function handleCpassword(evt){
            setCpassword(evt.target.value)
        }

        function addusers(){
            if(Epassword===Cpassword){
                setusers([...users,{username:Eusername,password:Epassword}])
                setPasswordsMatch(true);
                navigate("/")
            }
           else{
            setPasswordsMatch(false);
           }
        }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-4">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
          
               { passwordsMatch?<p>You can Signup here:)</p>:<p className="text-red-400">Password do not match</p>}
                <div className="flex flex-col m-2 gap-2">
                <input type="text" className ="border-black w-52 p-2 bg-transparent border rounded-md"
                 placeholder="Username" onChange={handleUinput}></input>
                <input type="text" className ="border-black w-52 p-2 bg-transparent border rounded-md" placeholder="Password" onChange={handleUpassword}></input>
                <input type="text" className ="border-black w-52 p-2 bg-transparent border rounded-md" placeholder="Confirm Password" onChange={handleCpassword}></input>
            </div>
            <button className="bg-orange-400 p-1 w-24 rounded-md " onClick={addusers}>Sign Up</button>
            <p>Already you have an account?<Link to={"/"} className="underline">Login</Link></p>
            </div>

            
        </div>
    )
}
export default Signup