type CardElevation = "flat" | "raised";

export interface CardInterface {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    elevation?: CardElevation;
    className?: string;
}