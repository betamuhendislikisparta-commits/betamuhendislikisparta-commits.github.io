import React from 'react';
import HomeSlider2 from '../Components/Home2/HomeSlider2';
import About2 from '../Components/About/About2';
import Services2 from '../Components/Home2/Services2';
import Choose2 from '../Components/Home2/Choose2';
import Cta from '../Components/Services/Cta';
import Contact2 from '../Components/Home2/Contact2';
import Team from '../Components/Home2/Team';
import Project2 from '../Components/Home2/Project2';
import Testimonial3 from '../Components/Home2/Testimonial3';
import Blog2 from '../Components/Home2/Blog2';

const page = () => {
    return (
        <div className='home-page2'>
            <HomeSlider2></HomeSlider2>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="Hakkımızda"
                Title="Evinizde ve iş yerinizde profesyonel tesisat çözümleri"
                Content="Beta Mühendislik olarak ısı pompası, doğalgaz kombi, kat kaloriferi, petek ve tesisat sistemlerinde uzman çözümler sunuyoruz. Ayrıca yangın tesisatı projelendirme ve uygulama hizmetleriyle güvenliğinizi ön planda tutarız."
                FeatureList={[
                    "Isı Pompası Sistemleri",
                    "Doğalgaz Kombi Montajı",
                    "Petek ve Tesisat Sistemleri"
                ]}
                Experience="15+"
                BioImg="/assets/img/avatar_1.png"                
                BioName="Beta Mühendislik"                
                BioContent="Hizmetler için her zaman arayın"                
            ></About2>
            <Services2></Services2>
            <Choose2></Choose2>
            <Cta></Cta>
            <Team></Team>
            <Contact2></Contact2>
            <Project2></Project2>
            <Testimonial3></Testimonial3>
            <Blog2></Blog2>
        </div>
    );
};

export default page;