import { Card } from "../cards/Card"
import "../cursos/Cursos.css"


export const Cursos = () => {
    return (
        <>
            <div className="cursos">
                <h2>Cursos</h2>
                <div className="container cursos__container">
                    <Card title="hola"
                        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGFpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        imageAlt="course"
                        subtitle="hola"
                        children="hola"
                        actions={<button>⋯</button>}
                        footer={
                            <>
                                <button>Cancelar</button>
                                <button>Guardar</button>
                            </>
                        }
                        elevation="raised"
                    >

                    </Card>
                    <Card title="hola"
                        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGFpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        imageAlt="course"
                        subtitle="hola"
                        children="hola"
                        footer="hola"
                        actions="hola"
                    />
                    <Card title="hola"
                        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGFpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        imageAlt="course"
                        subtitle="hola"
                        children="hola"
                        footer="hola"
                        actions="hola"
                    />
                </div>
            </div >
        </>
    )
}
