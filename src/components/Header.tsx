import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaDownload } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 10px 20px;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 20px;
  
  a {
    color: #ecf0f1;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: #3498db;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <header>
      <Nav>
        <Ul>
          <Li><a href="#home"><FaHome /> Home</a></Li>
          <Li><a href="#about"><FaUser /> Sobre</a></Li>
          <Li><a href="#projects"><FaFolderOpen /> Projetos</a></Li>
          <Li><a href="#contact"><FaEnvelope /> Contato</a></Li>
          <Li><a href="/path/to/curriculo.pdf" download><FaDownload /> Baixar Currículo</a></Li>
        </Ul>
      </Nav>
    </header>
  );
};

export default Header;
