import "../nosotros/Nosotros.css"
import imgNosotros from "../../assets/images/Home1.svg"

export const Nosotros = () => {
    return (
        <>
            <div className="nosotros">

                <h2>Nosotros</h2>
                <div className="container containerNosotros">
                    <img src={imgNosotros} alt="" className="imgNosotros" />
                    <div>
                        <h2>holanda</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit, vitae voluptatum alias, veniam enim sapiente optio aliquam dolorum fugiat culpa consequuntur nulla blanditiis cum! Excepturi maiores optio hic at?</p>
                    </div>

                </div>

            </div>
        </>
    )
}
