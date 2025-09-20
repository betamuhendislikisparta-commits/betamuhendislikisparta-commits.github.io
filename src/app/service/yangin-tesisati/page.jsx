import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    const serviceData = {
        title: "Yangın Tesisatı",
        breadcrumbTitle: "Yangın Tesisatı",
        mainImage: "/assets/img/service_details_4.png",
        subtitle: "Güvenlik Öncelikli Yangın Tesisatı Sistemleri",
        description: "Yangın tesisatı projelendirme, kurulum ve bakım hizmetleri ile güvenliğinizi en üst düzeyde tutuyoruz. Tüm standartlara uygun yangın güvenlik sistemleri kuruyoruz.",
        content: "Yangın tesisatları can ve mal güvenliği açısından kritik öneme sahiptir. Uzman ekibimiz tüm güvenlik standartlarına uygun olarak yangın tesisatı projelendirme ve kurulum hizmetleri vermektedir.",
        features: [
            "Yangın Tesisatı Projelendirme",
            "Sprinkler Sistem Kurulumu",
            "Yangın Söndürme Sistemleri",
            "Duman Tahliye Sistemleri",
            "Güvenlik Kontrol ve Test",
            "Bakım ve Periyodik Kontrol"
        ],
        additionalContent: "Yangın tesisatları düzenli olarak kontrol edilmeli ve bakımları yapılmalıdır. Uzman ekibimiz kurulum sonrası düzenli kontrol ve bakım hizmetleri ile sisteminizin her zaman hazır olmasını sağlar. Tüm yasal gerekliliklere uygun hizmet vermekteyiz."
    };

    return (
        <div className='service-details-page'>
            <BreadCumb Title={serviceData.breadcrumbTitle}></BreadCumb>
            <ServiceDetails serviceData={serviceData}></ServiceDetails>
        </div>
    );
};

export default page;

