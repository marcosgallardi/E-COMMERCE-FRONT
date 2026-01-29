import type { HeroVideoProps } from '../../types/HeroInterface'
import "../hero/HeroVideo.css"

export const HeroVideo = ({ videoSrc, videoSrc1


}: HeroVideoProps) => {
   
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
            <section className='d-lg-none hero'>
                <video
                    className="hero__video1"
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
