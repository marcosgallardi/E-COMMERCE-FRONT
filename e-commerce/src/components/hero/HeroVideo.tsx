import type { HeroVideoProps } from '../../types/HeroInterface'
import "../hero/HeroVideo.css"

export const HeroVideo = ({ videoSrc, videoSrc1


}: HeroVideoProps) => {
    console.log(videoSrc)
    return (
        <>
            <section className="hero d-none d-lg-block">

                <video
                    className="hero__video"
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            </section>
            <section className='d-lg-none'>
                <video
                    className="hero__video"
                    src={videoSrc1}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            </section>
        </>
    )
}
