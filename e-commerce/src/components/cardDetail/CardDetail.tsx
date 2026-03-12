import { useParams } from "react-router-dom"
import { dbEmpreSimple } from "../../db/db"
import type { CardInterface } from "../../types/CardInterface"


export const CardDetail = () => {

    const { id } = useParams()

    const detail: CardInterface = dbEmpreSimple.find((item) => item.id === id) as CardInterface

    return (
        <div>
            <img src={detail.imageSrc} alt={detail.imageAlt} />
            <div>cardDetail: {id}</div>
            <div>{detail.title}</div>
            <div>{detail.description}</div>

        </div>

    )
}
