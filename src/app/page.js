import About from "./Components/Home/About";
import Blog from "./Components/Home/Blog";
import Choose from "./Components/Home/Choose";
import Faq from "./Components/Home/Faq";
import HomeSlider from "./Components/Home/HomeSlider";
import Pricing from "./Components/Home/Pricing";
import Process from "./Components/Home/Process";
import Services from "./Components/Home/Services";
import Team from "./Components/Home/Team";
import Testimonial from "./Components/Home/Testimonial";

export default function Home() {
  return (
    <main className="home-page">
        <HomeSlider></HomeSlider>
        <About
                Img="/assets/img/about_img_1.png"
                TitleUp="Hakkımızda"
                Title="Isıtma ve Soğutma Sistemleri Onarım ve Hizmetler"
                Content="Şirketimiz güvenilir ve işimiz güven vericidir. Her zaman güvenebileceğiniz endişesiz hizmet sunuyoruz. Sizin için her türlü onarımı yapacak en iyi personeli bir araya getirdik."
                FeatureList={[
                    "Isı Pompası Kurulumu",
                    "Doğalgaz Kombi Montajı",
                    "Petek ve Tesisat Sistemleri",
                    "Yangın Tesisatı",
                    "Enerji Verimliliği",
                    "24/7 Acil Servis"
                ]}
                NumberContent="Beta Mühendislik Hizmetleri İçin Arayın"
                Number="+90 532 629 90 32"
            ></About>
            <Services></Services>
            <Choose></Choose>
            <Testimonial></Testimonial>
            <Process></Process>
    </main>
  );
}
