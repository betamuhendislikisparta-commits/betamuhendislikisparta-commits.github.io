import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    const serviceData = {
        title: "Doğalgaz Kombi Montajı",
        breadcrumbTitle: "Doğalgaz Kombi Montajı",
        mainImage: "/assets/img/service_details_2.jpg",
        subtitle: "Güvenli ve Verimli Kombi Sistemleri",
        description: "Doğalgaz kombi montajı, bakımı ve onarımı konusunda uzman ekibimizle güvenli ve verimli ısıtma çözümleri sunuyoruz. Tüm markalar için servis hizmeti vermekteyiz.",
        content: "Doğalgaz kombileri, modern evlerin en yaygın ısıtma sistemidir. Hem ekonomik hem de pratik olan bu sistemler, doğru montaj ve düzenli bakımla uzun yıllar sorunsuz çalışır. Uzman ekibimiz tüm marka ve modellerde hizmet vermektedir.",
        features: [
            "Profesyonel Kombi Montajı",
            "Gaz Tesisat Bağlantıları",
            "Güvenlik Testleri ve Kontrolleri",
            "Düzenli Bakım Hizmetleri",
            "Arıza Onarım Servisi",
            "Yedek Parça Temini"
        ],
        additionalContent: "Doğalgaz kombi sistemleri düzenli bakım gerektirir. Yıllık bakımlarla hem güvenliğinizi sağlar hem de cihazınızın ömrünü uzatırsınız. Tüm güvenlik standartlarına uygun olarak montaj ve bakım hizmetleri sunuyoruz."
    };

    return (
        <div className='service-details-page'>
            <BreadCumb Title={serviceData.breadcrumbTitle}></BreadCumb>
            <ServiceDetails serviceData={serviceData}></ServiceDetails>
        </div>
    );
};

export default page;


