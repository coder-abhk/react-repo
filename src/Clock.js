const Clock = (props) => {
    return(
        <p className="fs">Time: {props.date.toLocaleTimeString()}</p>
    )
}

export default Clock
