import Image from "next/image";

const ProjectDetails = () => {
    return (
        <div className="project-details">
            <section>
                <div className="cs_height_110 cs_height_lg_75"></div>
                <div className="container">
                    <div className="cs_project_details">
                    <div className="row cs_mb_45 cs_reverse_col cs_gap_y_50">
                        <div className="col-xl-9 col-lg-8">
                        <div className="cs_pr_30">
                            <h2 className="cs_fs_48 cs_semibold cs_mb_22">Profesyonel Sistem Yenileme Projesi</h2>
                            <p>Yüksek verimli üniteler enerji tüketimini önemli ölçüde azaltabilir, elektrik faturalarını düşürebilir, daha iyi ısıtma-soğutma sağlayabilir ve çevresel ayak izini küçültebilir. Profesyonel danışmanlık hizmeti, <br/><br/>
                            Her türlü ısıtma ve soğutma ünitesi için kapsamlı onarım hizmetleri. Küçük düzeltmelerden büyük revizyonlara kadar, servis teknisyenlerimiz her türlü sorunu çözebilecek donanıma sahiptir. Tanı testleri, bileşen onarımı veya değişimi, sistem yeniden dengeleme ve performans optimizasyonu <br/><br/>
                            Sisteminizin verimli ve etkili çalışmasını sağlamak için yılda en az bir kez servis yaptırmanız önerilir. Filtrelerin değiştirilmesi, dış ünitenin temiz tutulması ve evinizdeki sızıntıların kapatılması verimliliği artırabilir. Profesyonel ekip değerlendirmesi önerilir</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                        <div className="cs_project_info_card">
                            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Proje Bilgileri</h2>
                            <ul className="cs_mp_0">
                            <li>
                                <p className="cs_fs_14 mb-0">Müşteriler:</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">Marvin McKinney</h3>
                            </li>
                            <li>
                                <p className="cs_fs_14 mb-0">Kategori:</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">Sistem Yenileme</h3>
                            </li>
                            <li>
                                <p className="cs_fs_14 mb-0">Tarih:</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">12 Mayıs, 2024</h3>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="cs_project_details_in">
                        <div className="row">
                        <div className="col-md-6">
                        <Image src="/assets/img/project_details_1.jpg" alt="img" width={636} height={481}   />
                        </div>
                        <div className="col-md-6">
                        <Image src="/assets/img/project_details_2.jpg" alt="img" width={636} height={481}   />
                        </div>
                        </div>
                        <h3>Proje Zorlukları</h3>
                        <p>Uzman teknisyenlerimiz alanınızı değerlendirecek ve ihtiyaçlarınız için en uygun ısıtma-soğutma ünitesini önerecektir. Optimal performans için doğru yerleştirme, kablolama ve kurulum sağlayarak tüm kurulum sürecini yönetiyoruz.</p>
                        <ol>
                        <li>Düzenli bakım, klima sisteminizin uzun ömürlü ve verimli olması için gereklidir. Bakım hizmetimiz kapsamlı denetim, temizlik, yağlama, filtre değişimi ve sisteminizi mükemmel durumda tutmak için performans testini içerir.</li>
                        <li>Arızalı ısıtma-soğutma ünitelerinin kapsamlı onarım hizmetleri, soğutucu akışkan sızıntıları, arızalı kompresörler ve elektriksel sorunlar gibi sorunları ele alır. Yeni ısıtma-soğutma sistemlerinin profesyonel kurulumu.</li>
                        </ol>
                        <div className="row">
                        <div className="col-md-4">
                            <Image src="/assets/img/project_details_3.jpg" alt="img" width={416} height={504}   />
                        </div>
                        <div className="col-md-4">
                            <Image src="/assets/img/project_details_4.jpg" alt="img" width={416} height={504}   />
                        </div>
                        <div className="col-md-4">
                            <Image src="/assets/img/project_details_5.jpg" alt="img" width={416} height={504}   />
                        </div>
                        </div>
                        <h3>Nihai Sonuç</h3>
                        <p>
                        Tam sistem kurulumu, kanal bağlantısı, termostat entegrasyonu ve her şeyin mükemmel çalıştığından emin olmak için kapsamlı sistem testi ve en sıcak aylarda maksimum verimle çalışmasını sağlama. Düzenli bakım <br/>
                        Filtre değişimi, serpentin temizliği, hareketli parçaların yağlanması, sistem kalibrasyonu ve kapsamlı sistem denetimi. Klima sisteminizin performansını artırmak ve en sıcak aylarda maksimum verimle çalışmasını sağlamak için tasarlanmış kapsamlı ayar hizmeti.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
                </section>            
        </div>
    );
};

export default ProjectDetails;