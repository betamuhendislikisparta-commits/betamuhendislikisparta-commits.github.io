import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    const serviceData = {
        title: "Isı Pompası Kurulumu",
        breadcrumbTitle: "Isı Pompası Kurulumu",
        mainImage: "/assets/img/service_details_1.jpg",
        subtitle: "Enerji Verimli Isıtma ve Soğutma Çözümleri",
        description: "Beta Mühendislik olarak ısı pompası sistemlerinin profesyonel kurulumu, bakımı ve onarımı konusunda uzmanız. Enerji verimliliği yüksek ısı pompası sistemleri ile hem ısıtma hem de soğutma ihtiyaçlarınızı karşılıyoruz.",
        content: "Isı pompası sistemleri, dış havadan, topraktan veya sudan enerji çekerek evinizi ısıtan veya soğutan çevre dostu sistemlerdir. Bu sistemler, geleneksel ısıtma sistemlerine göre %50-70 daha az enerji tüketir ve çevre dostudur.",
        features: [
            "Profesyonel Kurulum ve Proje Tasarımı",
            "Enerji Verimliliği Analizi",
            "Düzenli Bakım ve Servis Hizmetleri", 
            "7/24 Teknik Destek",
            "Garanti ve Kalite Güvencesi",
            "Çevre Dostu Teknoloji"
        ],
        additionalContent: "Isı pompası sistemleri ile yıl boyunca konforlu bir yaşam alanına sahip olabilirsiniz. Hem ısıtma hem de soğutma işlevleri sayesinde tek sistemle tüm ihtiyaçlarınızı karşılayabilirsiniz."
    };

    return (
        <div className='service-details-page'>
            <BreadCumb Title={serviceData.breadcrumbTitle}></BreadCumb>
            <ServiceDetails serviceData={serviceData}></ServiceDetails>
        </div>
    );
};

export default page;

