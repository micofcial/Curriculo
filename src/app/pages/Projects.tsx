import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { title: 'Pense Company', description: ' Uma plataforma digital para conectar freelancers com contratantes, oferecendo uma abordagem inovadora na criação de experiências web. Inclui recursos de perfil, busca de projetos e comunicação integrada.', image: '/images/projeto1.png', link: 'https://pense-company.netlify.app/' },
  { title: 'Task Manager App', description: ' Um aplicativo de gerenciamento de tarefas com uma interface intuitiva e funcionalidades como criação, edição e exclusão de tarefas, além de organização por categorias e prazos.', image: '/images/projeto2.png', link: '#' },
  { title: 'E-commerce Store', description: 'Uma loja online completa com carrinho de compras, sistema de pagamento, e painel de administração para gerenciar produtos e pedidos.', image: '/images/projeto3.png', link: '#' },
  { title: 'Personal Blog', description: 'Um blog pessoal com funcionalidades para postagem de artigos, categorias, tags, e comentários. Inclui um painel de administração para gerenciar conteúdo.', image: '/images/projeto4.png', link: '#' },
  { title: 'Real-time Chat Application', description: ' Aplicativo de chat em tempo real com funcionalidades de mensagens privadas e em grupo, além de notificações e suporte a emojis e anexos.', image: '/images/projeto5.png', link: '#' },
  { title: 'Portfolio Website', description: 'Um site pessoal para exibir projetos e habilidades, com uma interface visualmente atraente e uma seção de blog ou artigos.', image: '/images/projeto6.png', link: '#' },
];

const ProjectWrapper = styled.section`
  position: relative;
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const ProjectContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectCard = styled.div`
  flex: 0 0 300px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 0 0 80%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProjectContent = styled.div<{ isExpanded: boolean }>`
  padding: 1.5rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.isExpanded ? 'unset' : '3')}; /* Número de linhas visíveis quando não expandido */
    -webkit-box-orient: vertical;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  .toggle-button {
    cursor: pointer;
    color: #007bff;
    font-weight: bold;
    margin-top: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (projectContainerRef.current) {
      const scrollAmount = projectContainerRef.current.clientWidth * 0.8; // Define o quanto deve rolar a cada clique
      projectContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ProjectWrapper id="projects">
      <h2>Meus Projetos</h2>
      <NavButton className="left" onClick={() => scroll('left')}>
        &#8249;
      </NavButton>
      <ProjectContainer ref={projectContainerRef}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent isExpanded={expandedIndex === index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Ver Projeto</a>
              <span
                className="toggle-button"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {expandedIndex === index ? 'Ler menos' : 'Ler mais'}
              </span>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectContainer>
      <NavButton className="right" onClick={() => scroll('right')}>
        &#8250;
      </NavButton>
    </ProjectWrapper>
  );
};

export default Projects;
