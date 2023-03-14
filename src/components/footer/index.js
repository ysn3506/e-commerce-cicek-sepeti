import React from "react";
import "./style.scss";
import qrCodeMobile from "../../assets/qrCodeMobile.png";
import qrCodeDesktop from "../../assets/qrCodeDesktop.png";
import Button from "../button";
import AppStoreButton from "../../assets/appStoreButton";
import AndroidButton from "../../assets/googleAndroidButton";
import ContactFormIcon from "../../assets/contactFormIcon";
import YoutubeIcon from "../../assets/youtubeIcon";
import FacebookIcon from "../../assets/facebookIcon";
import TwitterIcon from "../../assets/twitterIcon";
import InstagramIcon from "../../assets/instagramIcon";
import Logo from "../../assets/logo";

function Footer() {
  const navItems1 = [
    "Çiçek Bakımı",
    "Çiçek Eşliğinde Notlar",
    "Çiçeklerin Anlamı",
    "Özel Günler",
    "Mevsimlere Göre Çiçekler",
    "Bonny Food Saklama Koşulları",
    "Site Haritası",
  ];
  const navItems2 = [
    "Hakkımızda",
    "Kariyer",
    "ÇiçekSepeti'nde Satış Yap",
    "Kurumsal Müşterilerimiz",
    "Reklamlarımız",
    "Basında Biz",
    "Kampanyalar",
    "Vizyonumuz",
  ];
  const navItems3 = ["Bize Ulaşın", "Sıkça Sorulan Sorular"];
  const navItems4 = [
    "Mesafeli Satış Sözleşmesi",
    "Bilgi Toplumu Hizmetleri",
    "Gizlilik Sözleşmesi",
    "Ödeme Seçenekleri",
    "Hesap Bilgieri",
  ];

  return (
    <div className="footer-wrapper">
      <div className="footer-up">
        <div className="mobile">
          <picture>
            <source
              media="(max-width: 991px)"
              srcSet="https://res.cloudinary.com/durtbp9be/image/upload/v1678532345/ciceksepeti/mobile-app/Mask_Group_21_adbi1g.png"
            />
            <source
              media="(min-width: 992px)"
              srcSet="https://res.cloudinary.com/durtbp9be/image/upload/v1678532346/ciceksepeti/mobile-app/Mask_Group_21_2x_wsuhsw.png"
            />
            <img
              src="https://res.cloudinary.com/durtbp9be/image/upload/v1678532345/ciceksepeti/mobile-app/Mask_Group_21_adbi1g.png"
              alt="çiçeksepeti app"
            />
          </picture>
          <div className="mobile-info">
            <div className="mobile-info-1">
              <picture>
                <source media="(max-width: 991px)" srcSet={qrCodeDesktop} />
                <source media="(min-width: 992px)" srcSet={qrCodeDesktop} />
                <img src={qrCodeMobile} alt="çiçeksepeti QR" />
              </picture>
              <div>
                <h3>Çiçek Sepeti Mobil Uygulamayı İndirin</h3>
                <p>Mobil Uygulamayı QR Kod İle İndirin.</p>
              </div>
            </div>
            <div className="mobile-info-2">
              <Button>
                <AppStoreButton />
              </Button>
              <Button>
                <AndroidButton />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="social-media">
          <Logo />
          <div className="social-media-buttons">
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <TwitterIcon />
            </Button>
            <Button>
              <InstagramIcon />
            </Button>
            <Button>
              <YoutubeIcon />
            </Button>
            <Button>
              <ContactFormIcon />
            </Button>
          </div>
          <div className="gdpr">
            <p>
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında oluşturduğumuz aydınlatma metnine buradan
              ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-item">
            <h4 className="footer-nav-header">Faydalı Bilgiler</h4>
            <ul>
              {navItems1.map((el) => (
                <li key={el} className="nav-item-el">
                  <a href="/">{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-nav-item">
            <h4 className="footer-nav-header">Kurumsal</h4>
            <ul>
              {navItems2.map((el) => (
                <li key={el} className="nav-item-el">
                  <a href="/">{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-nav-item">
            <h4 className="footer-nav-header">İletişim</h4>
            <ul>
              {navItems3.map((el) => (
                <li key={el} className="nav-item-el">
                  <a href="/">{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-nav-item">
            <h4 className="footer-nav-header">Gizlilik Sözleşmesi</h4>
            <ul>
              {navItems4.map((el) => (
                <li key={el} className="nav-item-el">
                  <a href="/">{el}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-explanation">
        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
        mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek
        Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz.
        Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir
        yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan
        mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek,
        hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum
        günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için
        yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
        Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
        lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü
        mutlu etmenin adresi; ÇiçekSepeti.
      </div>
      <div className="footer-band">
        Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
      </div>
    </div>
  );
}

export default Footer;
