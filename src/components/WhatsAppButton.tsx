import React from 'react';
import styled from 'styled-components';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';

const FloatingButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
`;

const WhatsAppIcon = styled(Whatsapp)`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;

const WhatsAppButton: React.FC = () => {
  return (
    <FloatingButton href="https://wa.me/5511999999999" target="_blank">
      <WhatsAppIcon />
    </FloatingButton>
  );
};

export default WhatsAppButton;
