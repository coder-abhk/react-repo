import Content from './Content'
import Clock from './Clock'

const App = () =>{
    
    return(
        <div className="container">
            <Content name="Dev" age={20} />
            
            <div className="clockContainer">
                <Clock date={new Date()}/>
            </div>

        </div>
    )
}

export default App