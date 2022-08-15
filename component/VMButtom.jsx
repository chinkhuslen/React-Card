import { useButtonContext } from "./contextButton"
const VMButton = ({ id }) => {
    const { isClicked, setIsClicked } = useButtonContext();

    const changeState = (isClicked, id) => {
        let arr = isClicked.filter(el => {
            el.isButtonClicked = (el.index == id) ? !el.isButtonClicked : el.isButtonClicked;
            return true
        })
        setIsClicked(arr);
    }
    return (<button onClick={() => { changeState(isClicked, id) }} className="VMButton">View {isClicked[id].isButtonClicked ? "less" : "more"}</button>)
}
export default VMButton