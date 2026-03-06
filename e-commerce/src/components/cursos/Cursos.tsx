import { Card } from "../cards/Card"
import "../cursos/Cursos.css"
import { dbEmpreSimple } from "../../db/db"
import { Link } from "react-router-dom"


export const Cursos = () => {
    return (
        <>
            <div className="cursos">
                <h2>Cursos</h2>
                <div className="container cursos__container">
                    {dbEmpreSimple.map((curso, index) => (
                        <div key={index}>
                            <Card title={curso.title}
                                imageSrc={curso.imageSrc}
                                imageAlt={curso.imageAlt}
                                subtitle={curso.subtitle}
                                children={curso.description}

                                footer={<>
                                    <Link to={`/detail/${curso.id}`} className="button-detalle">
                                        Ver detalle
                                    </Link>

                                    <button className="button-comprar">Comprar</button>
                                </>}
                                elevation="raised" id={""}                            >

                            </Card>
                        </div>
                    ))
                    }

                </div>
            </div >
        </>
    )
}
