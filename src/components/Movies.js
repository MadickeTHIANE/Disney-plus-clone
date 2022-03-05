import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.leparisien.fr/resizer/Mlbi9cyK-B2Q5KxCD-pLICHQ7ns=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/EVLD5FAQKRGMZHU2Y73M7L4BS4.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
  }
`;
