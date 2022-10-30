import './input.css'
const Input = (props: any) => {
    return (
        <div>
            <input type="text" placeholder={props.placeholder} className="input username" minLength={props.minValue} maxLength={props.maxValue} />
        </div>
    )
}

export default Input