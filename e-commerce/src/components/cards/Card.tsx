import type { CardInterface } from "../../types/CardInterface"
import "../cards/Card.css"

export const Card = ({
    imageSrc,
    imageAlt = "card image",
    title,
    subtitle,
    children,
    footer,
    actions,
    elevation = "raised",
    className = "",
}: CardInterface) => {

    return (
        <article className={`card card--${elevation} ${className}`}>
            {imageSrc && (
                <div className="card__image">
                    <img src={imageSrc} alt={imageAlt} />
                </div>
            )}
            {(title || subtitle || actions) && (
                <header className="card__header">
                    <div className="card__heading">
                        {title && <h3 className="card__title">{title}</h3>}
                        {subtitle && <p className="card__subtitle">{subtitle}</p>}
                    </div>

                    {actions && <div className="card__actions">{actions}</div>}
                </header>
            )}



            {footer && <footer className="card__footer">{footer}</footer>}
        </article>

    )
}
