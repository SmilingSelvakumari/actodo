import { useState } from "react"

function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr


    const [newactivity, setnewactivity] = useState("")
    function handlechange(event) {
        setnewactivity(event.target.value)
    }
function addactivity(){
setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
setnewactivity("")
}

    return (
        <div className="flex flex-col gap-3">
            <div>
                <h1 className="text-2xl">Manage Activities</h1>
            </div>
            <div>
                <input value={newactivity} onChange={handlechange} type="text" className="border-black border border-transparent p-1" placeholder="Next Activity?"></input>
                <button onClick={addactivity} className="bg-black border border-black text-white p-1">Add</button>
            </div>
        </div>)
}
export default AddTodoForm