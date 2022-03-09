import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Once you have Premium Access to Raya and the last dragon, you can
          watch it on any platform where Disney + is offered, as long as you are
          a Disney + subscriber. To get Premium Access to Raya and the last
          dragon, you must have an active Disney + subscription.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  cursor: pointer;
  width: 100%;
  padding: 17px 0;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
