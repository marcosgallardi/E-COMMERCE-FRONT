import { ItemNavbar } from './ItemNavbar'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ItemNavbar name="Inicio" link="/" />
      <ItemNavbar name="Cursos" link="/cursos" />
      <ItemNavbar name="Nosotros" link="/nosotros" />
      <ItemNavbar name="Ustedes" link="/ustedes" />
      <ItemNavbar name="Contacto" link="/contacto" />
    </div>
  )
}
