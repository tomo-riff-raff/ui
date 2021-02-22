import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/languages">Languages supported</Link>
    </footer>
  )
}

export default Footer
