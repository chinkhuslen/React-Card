import { useButtonContext } from "./contextButton"
const VMButton = ()=>{
    const {setIsClicked, isClicked} = useButtonContext();
    // console.log(setIsClicked)
    return (<button onClick={() => setIsClicked(!isClicked)} className="VMButton">View {isClicked ? "more" : "less"}</button>)
}
export default VMButton