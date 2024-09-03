import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../assets/perfil.jpg';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const InfoContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 2rem;
  }
`;

const NameTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SkillIcon = styled.img`
  margin: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Home: React.FC = () => {
  return (
    <HomeSection id="home">
      <ProfileImage src={ImageComponent} alt="Perfil de Mickael" />
      <InfoContainer className="component-hab">
        <NameTitle>Mickael - Desenvolvedor e Gestor de Projetos</NameTitle>
        <SkillsContainer>
          <SkillIcon
            alt="Mickael-AngularJS"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
          />
          <SkillIcon
            alt="Mickael-React"
            height="40"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          />
          <SkillIcon
            alt="Mickael-HTML"
            height="40"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
          />
          <SkillIcon
            alt="Mickael-CSS"
            height="40"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
          />
          <SkillIcon
            alt="Mickael-JavaScript"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <SkillIcon
            alt="Mickael-Node.js"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <SkillIcon
            alt="Mickael-Gulp"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg"
          />
          <SkillIcon
            alt="Mickael-Solidity"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
          />
          <SkillIcon
            alt="Mickael-SQL"
            height="50"
            width="50"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
          <SkillIcon
            alt="Mickael-Git"
            height="40"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
        </SkillsContainer>
      </InfoContainer>
    </HomeSection>
  );
};

export default Home;
