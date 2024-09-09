import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.p`
  line-height: 1.6;
`;

const About: React.FC = () => {
  return (
    <AboutWrapper id="about">
      <h2>Sobre Mim</h2>
      <AboutText>
        Sou Mickael, desenvolvedor full stack com uma vasta experiência em tecnologias de ponta, incluindo React, Node.js, TypeScript, e muito mais. 
        Minha paixão é transformar ideias em produtos digitais funcionais e esteticamente agradáveis. Tenho um histórico sólido de coordenação de 
        equipes e gestão de projetos complexos, garantindo sempre a entrega com alta qualidade.
      </AboutText>
      <AboutText>
        Com domínio em front-end e back-end, desenvolvo soluções completas, desde a concepção até a implementação final. Estou sempre em busca de 
        aprimorar minhas habilidades e aprender novas tecnologias para oferecer o melhor em cada projeto que assumo.
      </AboutText>
    </AboutWrapper>
  );
};

export default About;
