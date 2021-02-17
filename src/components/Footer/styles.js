import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background:  #101522;
  padding: 0 24px 40px 24px;
`;

export const FooterContant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 920px;
  margin: 0 auto;
`;

export const FooterWrap = styled.div`
  text-align: center;
  color: #fff;

  h2 {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 12px;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const WebsiteRights =  styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons =  styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px auto;
`;

export const SocialIconLink =  styled.a`

  svg {
    color: #fff;
    font-size: 30px;
  }

`;
