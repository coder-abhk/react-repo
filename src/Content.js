const Content = (props) => {
    return(
        <div className="header">
            <h1>Hello {props.name}!</h1>
            <p>Your age is: {props.age}</p>
        </div>
    )
}


export default Content
