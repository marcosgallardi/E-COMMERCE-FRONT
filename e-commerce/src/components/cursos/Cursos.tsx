import { Card } from "../cards/Card"
import "../cursos/Cursos.css"
import { dbEmpreSimple } from "../../db/db"


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
                                
                                footer={
                                    <>
                                        <button>Cancelar</button>
                                        <button>Guardar</button>
                                    </>
                                }
                                elevation="raised"
                            >

                            </Card>
                        </div>
                    ))
                    }

                </div>
            </div >
        </>
    )
}
