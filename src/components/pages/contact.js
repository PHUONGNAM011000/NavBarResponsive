import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container__header">
        <div className="container__top-content container__top-content-size">
          <div className="top-content">
            <div className="top-content__left">
              <div className="image-icon">
                <img
                  src="https://edoctor.io/assets/goi-bac-si/icon_heart.png"
                  alt="icon"
                />
              </div>
              <div className="top-content__heading">
                Tư vấn sức khỏe trực tuyến miễn phí
              </div>
              <div className="top-content__text">
                Đặt lịch hẹn. Được tư vấn sức khỏe qua video call hoặc qua trò
                chuyện trực tuyến. Hoàn toàn miễn phí.
              </div>
              <a href="#form" className="top-content__button">
                Đăng ký
              </a>
            </div>
            <div className="top-content__right">
              <img
                src="https://edoctor.io/assets/goi-bac-si/banner.jpg"
                className="top-content__image"
                alt=""
              />
            </div>
          </div>
          <div className="Style_bottom_content__3yQr8">
            <div className="Style_group_title__jvmRG">
              <div className="Style_title__10fV4">Bạn không có thời gian?</div>
              <div className="Style_description__2119u">
                Liên hệ tổng đài để đặt lịch hẹn Bác sĩ tư vấn trực tuyến
              </div>
            </div>
            <div className="Style_right__3gO_m">
              <a href="tel:19006115" className="Style_group_item__lDxn8">
                <img
                  src="https://edoctor.io/assets/goi-bac-si/icon_phone.png"
                  alt=""
                />
                <div className="Style_text__3c2TT">19006115</div>
              </a>
              <a
                href="mailto:hotro@edoctor.vn"
                className="Style_group_item__lDxn8"
              >
                <img
                  src="https://edoctor.io/assets/goi-bac-si/icon_mail.png"
                  alt=""
                />
                <div className="Style_text__3c2TT">hotro@edoctor.vn</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
