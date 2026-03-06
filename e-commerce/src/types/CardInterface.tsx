type CardElevation = "flat" | "raised";

export interface CardInterface {
    id: string;
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    elevation?: CardElevation;
    className?: string;
}