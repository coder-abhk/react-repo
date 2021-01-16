import ReactDom from 'react-dom'
import App from './App'
import "./styles/index.css"

const tick = () => {
    ReactDom.render(
        <App />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)