import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Using = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="h-screen flex flex-col justify-center text-center items-center font-poppins px-4">
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >
                <h1 className="text-7xl md:text-9xl font-extrabold text-green-900">
                    {counterOn ? (
                        <CountUp 
                            start={0} 
                            end={5362} 
                            duration={2} 
                            separator="." 
                        />
                    ) : (
                        0
                    )}
                </h1>
                <h2 className="text-3xl md:text-5xl pt-4 font-bold text-center max-w-4xl" style={{ lineHeight: '1.2' }}>
                    Dipercaya oleh ribuan pengguna untuk layanan CV profesional
                </h2>


            </ScrollTrigger>
        </div>
    );
}

export default Using;
