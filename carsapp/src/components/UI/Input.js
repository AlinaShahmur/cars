import classes from './Input.module.css'

function Input(props) {
    return (
        <div className = {classes.input}>
            <label htmlFor = {props.id}>{props.title}</label> <br></br>
            <input id = {props.id}
                   type = {props.type}        
                   onChange = {props.onChange}
                   value = {props.value}/>
        </div>
    )
}

export default Input