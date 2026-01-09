import { ItemNavbar } from './ItemNavbar'

export const Navbar = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className='navbar'>
          <ItemNavbar name="Inicio" link="/" />
          <ItemNavbar name="Cursos" link="/cursos" />
          <ItemNavbar name="Nosotros" link="/nosotros" />
          <ItemNavbar name="Ustedes" link="/ustedes" />
          <ItemNavbar name="Contacto" link="/contacto" />
        </div>
      </div>

      <div className="d-lg-none navbar">
        <i className="bi bi-filter-left icon-navbar"></i>
      </div>

    </>
  )
}
