import "./buttons.css"
const Buttons = (props: any) => {
    return (
        <div>
            <button className="button">
                {props.value}
            </button>
        </div>
    )
}

export default Buttons