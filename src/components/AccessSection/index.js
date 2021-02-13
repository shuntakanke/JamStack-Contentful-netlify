import React from "react"
import { FaWifi, FaParking, FaPlug } from "react-icons/fa"

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Subtitle,
  ImgWrap,
} from "./AccessElements"

const inlineStyle = {
  marginRight: "1rem",
  fontSize: "1.8rem",
}

const InfoSection = ({ lightBg, id, imgStart, darkText }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper data-aos="fade-up">
                <Subtitle darkText={darkText}>
                  サガミハラテ®️ <br />
                  相模原市中央区千代田3-18-4 <br />
                  金土11:00-20:00(l.o19:30) <br />
                  日-木11:00-18:00(l.o17:30) <br />
                  禁煙(屋外喫煙有り) <br />
                  P有 Wifi有 コンセント有 <br />
                  <FaParking style={inlineStyle} />
                  <FaWifi style={inlineStyle} />
                  <FaPlug style={inlineStyle} />
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12982.259761049922!2d139.37009973457026!3d35.564445483545235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fdaca4e8876b%3A0x77537719e4e3e602!2z55ye55Sw54-I55Cy!5e0!3m2!1sja!2sjp!4v1612249694169!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
