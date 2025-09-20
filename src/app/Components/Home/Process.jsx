"use client"
import { useEffect } from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import ProcessCard2 from "../ProcessCard/ProcessCard2";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Process = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
    <section className="cs_bg_filed" data-background="/assets/img/how_to_work_bg.svg">
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
             <SectionTitle
                  Title="Basit Çalışma Süreci"
                  SubTitle="Nasıl Çalışırız"
              ></SectionTitle>
          </div>
          <p className="mb-0">Profesyonel tesisat hizmetlerimiz ile evinizde ve iş yerinizde maksimum verimlilik sağlıyoruz</p>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="cs_card_1_wrap">
          <div className="cs_card_1_col">
            <ProcessCard
                    Title="Isı Pompası Sistemleri"
                    Content="En son teknoloji enerji verimli ısı pompası sistemleri ile hem ısıtma hem de soğutma çözümleri"
                    Img="/assets/img/icons/how_to_work_icon_1.svg"
                >
            </ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
                    Title="Doğalgaz Kombi Montajı"
                    Content="Güvenilir doğalgaz kombi sistemlerinin profesyonel montajı ve bakım hizmetleri"
                    Img="/assets/img/icons/how_to_work_icon_2.svg"                
                >
            </ProcessCard2>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
                    Title="Petek ve Tesisat Sistemleri"
                    Content="Kapsamlı petek, boru tesisatı ve kat kaloriferi sistemlerinin kurulum ve onarım hizmetleri"
                    Img="/assets/img/icons/how_to_work_icon_3.svg"
                >
            </ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
                    Title="Yangın Tesisatı ve Acil Servis"
                    Content="Yangın güvenlik sistemleri ve 7/24 acil tesisat hizmetleri ile güvenliğinizi sağlıyoruz"
                    Img="/assets/img/icons/how_to_work_icon_4.svg"                
                >
            </ProcessCard2>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70"></div>
    </section>
    );
};

export default Process;