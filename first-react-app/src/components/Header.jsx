import logo from '../logo.svg';
import './Header.css'

const reactDescriptions = ['Fundamental','Crucal','Core']
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {

    const description = reactDescriptions[genRandomInt(2)]

    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="200" />
          <p>
            {description} React concepts you will need
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
    )
}

export default Header