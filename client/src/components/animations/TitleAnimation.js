import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TitleAnimation = ({title}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div data-aos="fade-right" data-aos-duration={"1000"} className={"text-6xl"}>
                {title}
            </div>
        < />
    );
}
export {TitleAnimation};