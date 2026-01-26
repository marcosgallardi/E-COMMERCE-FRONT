import { Link } from 'react-router-dom'
import "../navbar/Navbar.css"

export const ItemNavbar = ({ name, link }: any) => {
  return (

    <>
  
      <Link to={link} className="nav-link"> {name}</Link>
    </>
  )
}
