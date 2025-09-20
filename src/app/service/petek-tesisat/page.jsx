import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    const serviceData = {
        title: "Petek ve Tesisat Sistemleri",
        breadcrumbTitle: "Petek ve Tesisat Sistemleri",
        mainImage: "/assets/img/service_details_3.jpg",
        subtitle: "Kaliteli Petek ve Tesisat Hizmetleri",
        description: "Petek sistemleri kurulumu, tesisat montajı, bakım ve onarım hizmetleri ile evinizde konforlu ısıtma sağlıyoruz. Modern petek sistemleri ve kaliteli tesisat malzemeleri kullanıyoruz.",
        content: "Petek sistemleri, evinizin her köşesine eşit ısı dağılımı sağlayan en etkili ısıtma yöntemlerinden biridir. Kaliteli malzemeler ve profesyonel işçilik ile uzun ömürlü sistemler kuruyoruz.",
        features: [
            "Modern Petek Sistemleri Kurulumu",
            "Tesisat Montajı ve Planlaması",
            "Su Tesisatı Bakım ve Onarımı",
            "Kaliteli Malzeme Kullanımı",
            "Sistem Performans Optimizasyonu",
            "Kaçak Tespiti ve Onarımı"
        ],
        additionalContent: "Petek ve tesisat sistemleri doğru planlanmalı ve kaliteli malzemelerle kurulmalıdır. Uzman ekibimiz en uygun sistem tasarımını yaparak maksimum verimlilik sağlar. Kurulum sonrası düzenli bakım hizmetleri de sunmaktayız."
    };

    return (
        <div className='service-details-page'>
            <BreadCumb Title={serviceData.breadcrumbTitle}></BreadCumb>
            <ServiceDetails serviceData={serviceData}></ServiceDetails>
        </div>
    );
};

export default page;

