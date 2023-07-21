import { Link } from "react-router-dom";
import banner from '../assets/images/banner.png';
import hero from '../assets/images/hero.png';
import Footer from "../components/Footer";
import Section from "../components/ui/sectionTemp";
const Home = () => {
    return (
        <>
            <Section className="md:px-8 min-h-[calc(100vh-80px)]">
                <div className="flex justify-between items-center ">
                    <div>
                        <h1 className="text-6xl font-black text-primary mb-2">
                            HAYLOU <br /> SOLAR PLUSE
                        </h1>
                        <p className="text-secondary font-semibold text-xl">
                            Effortless communication at your fingertips
                        </p>
                        <div className="text-primary mt-20">
                            <p>Bluetooth 5.2 for easy, secure communication</p>
                            <p>Precise 143 Amoled display for clear visuals</p>
                        </div>
                        <button className="mt-5">Learn more</button>
                    </div>
                    <div className="relative -right-14">
                        <img src={banner} alt="" />
                    </div>
                </div>
                <div className="mb-96">
                    <div>
                        <img className="mx-auto" src={hero} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-black text-primary uppercase mt-10">
                            The future of tech is here
                        </h1>
                        <button className="mt-10" >
                            <Link to="/products">Brows all products</Link>
                        </button>
                    </div>
                </div>


            </Section>
            <Footer />
        </>
    );
};

export default Home;