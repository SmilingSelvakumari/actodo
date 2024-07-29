import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate()
    const [Eusername, setEusername] = useState()
    const [Epassword, setEpassword] = useState()
    const [Ruser, setRuser] = useState(true)

    const users = props.users
    function handleUinput(evt) {
        setEusername(evt.target.value)
    }

    function handleUpassword(evt) {
        setEpassword(evt.target.value)
    }

    function checkuser() {

        var userfound = false
        users.forEach(function (item) {
            if (item.username === Eusername && item.password === Epassword) {
                console.log("Login Successful")
                userfound = true
                navigate("/Landing",{state:{user:Eusername}})
            }

        })
        if (userfound === false) {
            console.log("Login Failed")
            setRuser(false)
        }
    }


    return (
        < div className="bg-black p-10">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
                {Ruser ? <p>I help you manage your activities after you login:)</p> : <p className='text-red-400'>Please signup before your Login</p>}
                <div className=" flex flex-col gap-2 m-2">
                    <input type="text" className="border-black w-52 p-2 bg-transparent border rounded-md" placeholder="Username" onChange={handleUinput}></input>
                    <input type="text" className="border-black w-52 p-2 bg-transparent border rounded-md" placeholder="Password" onChange={handleUpassword}></input>


                </div>
                <button className="bg-[#8272DA] p-1 m-5 text-white rounded-md w-24" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>

        </div>
    )
}
export default Login