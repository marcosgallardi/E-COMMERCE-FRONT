import { ItemNavbar } from './ItemNavbar'
import logoImg from '../../assets/icons/logo.svg'
import logoImg1 from '../../assets/icons/logo1.svg'


export const Navbar = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className='navbar'>
          <img src={logoImg} alt="" className='logoImg' />
          <ItemNavbar name="Inicio" link="/" />
          <ItemNavbar name="Cursos" link="/cursos" />
          <ItemNavbar name="Nosotros" link="/nosotros" />
          <ItemNavbar name="Ustedes" link="/ustedes" />
          <ItemNavbar name="Contacto" link="/contacto" />
        </div>
      </div>

      <div className="d-lg-none navbar-1">
        <i className="bi bi-filter-left icon-navbar" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
      </div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <img src={logoImg1} alt="" className='logoImg' />
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
