function Todoitem(props){


    const activityArr = props.activityArr
    const setactivityArr=props.setactivityArr


    function handledelete(deletedid){
var temparr = activityArr.filter(function(item){
if(item.id=== deletedid){
    return false
}
else{
    return true
}
})

setactivityArr(temparr)
    }
    return(<div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
<button><i onClick={()=>handledelete(props.id)}class="fa-solid fa-trash-can" style={{color: "#e85959"} }/></button>
        </div> )
}
export default Todoitem