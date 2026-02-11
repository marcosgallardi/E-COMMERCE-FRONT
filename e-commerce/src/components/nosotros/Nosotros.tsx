import "../nosotros/Nosotros.css"
import imgNosotros from "../../assets/images/Home2.svg"

export const Nosotros = () => {
    return (
        <>
            <div className="nosotros">

                <h2>Nosotros</h2>
                <div className="container containerNosotros">
                    <img src={imgNosotros} alt="" className="imgNosotros" />
                    <div className="textNosotros">
                        <h2>Aprende con nosotros</h2>
                        <p className="pNosotros">Creemos que aprender es el primer paso para transformar tu vida.

                            Somos una plataforma dedicada a ofrecer cursos prácticos y accesibles, pensados para que cualquier persona pueda adquirir nuevas habilidades y avanzar con confianza, sin importar su punto de partida.

                            Nuestro compromiso es brindar contenidos claros, aplicables y de calidad, que te permitan crecer personal y profesionalmente, e incluso dar el paso hacia tu propio emprendimiento.

                            Más que cursos, ofrecemos oportunidades de desarrollo.

                            Gracias por confiar en nosotros.</p>
                    </div>

                </div>

            </div>
        </>
    )
}
