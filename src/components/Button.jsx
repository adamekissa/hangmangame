export default function Button(props) {
    return (
        <button onClick={props.callBackFn} id="myButton" className="alphabet--button" >{props.text}</button>
    )
}