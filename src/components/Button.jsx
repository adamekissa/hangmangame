export default function Button(props) {
    return (
        <button onClick={props.callBackFn} id={props.idc} className="alphabet--button" >{props.text}</button>
    )
}