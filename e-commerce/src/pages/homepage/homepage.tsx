import { HeroVideo } from '../../components/hero/HeroVideo'
import { Navbar } from '../../components/navbar/Navbar'
import hero from "../../assets/videos/hero.mp4"
import hero1 from "../../assets/videos/hero1.mp4"
import { Nosotros } from '../../components/nosotros/Nosotros'


export const Homepage = () => {
    return (
        <>
            <Navbar />

            <HeroVideo
                videoSrc={hero}
                videoSrc1={hero1}
            />
            <Nosotros />
        </>
    )
}
