import React from 'react';
import About2 from '../Components/About/About2';
import BreadCumb from '../Components/Common/BreadCumb';
import Testimonial from '../Components/Home/Testimonial';
import Faq from '../Components/Home/Faq';
import Process from '../Components/Home/Process';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="Hakkımızda"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="Hakkımızda"
                Title="Eviniz ve iş yerinizde profesyonel tesisat çözümleri"
                Content="Beta Mühendislik olarak ısı pompası, doğalgaz kombi, kat kaloriferi, petek ve tesisat sistemlerinde uzman çözümler sunuyoruz. Ayrıca yangın tesisatı projelendirme ve uygulama hizmetleriyle güvenliğinizi ön planda tutarız."
                FeatureList={[
                    "Havalandırma Sistemi Bakımı",
                    "İç Hava Kalitesi Testi", 
                    "Özel Tasarım Çözümler"
                ]}
                Experience="15+"
                BioImg="/assets/img/avatar_1.png"                
                BioName="Beta Mühendislik"                
                BioContent="Hizmetler için her zaman arayın"                
            ></About2>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default page;