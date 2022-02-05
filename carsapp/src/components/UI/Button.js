import classes from './Button.module.css'

function Button(props) {
    return (
            <button className = {classes.button} disabled = {props.disabled} style = {{color: props.color, backgroundColor: props.backColor}} type = {props.type} onClick = {props.onClick}>
                {props.title}
            </button>

    )
}

export default Button