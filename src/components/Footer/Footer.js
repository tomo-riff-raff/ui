import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>  
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/languages">Languages supported</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
