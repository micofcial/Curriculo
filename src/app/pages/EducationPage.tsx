import React from 'react';
import styled from 'styled-components';

// Estilizando os componentes
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #2c3e50;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const EducationContainer = styled.div`
  margin-bottom: 30px;
`;

const CourseContainer = styled.div`
  margin-bottom: 20px;
`;

const Degree = styled.h3`
  font-size: 20px;
  color: #34495e;
  margin: 0;
`;

const Institution = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin: 5px 0;
`;

const Period = styled.p`
  font-size: 14px;
  color: #95a5a6;
  margin: 5px 0;
`;

const CourseName = styled.h4`
  font-size: 18px;
  color: #2980b9;
  margin: 0;
`;

const Provider = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin: 5px 0;
`;

const CompletionDate = styled.p`
  font-size: 14px;
  color: #95a5a6;
  margin: 5px 0;
`;

interface EducationProps {
  degree: string;
  institution: string;
  period: string;
}

interface CourseProps {
  name: string;
  provider: string;
  completionDate: string;
}

const Education: React.FC<EducationProps> = ({ degree, institution, period }) => (
  <EducationContainer>
    <Degree>{degree}</Degree>
    <Institution>{institution}</Institution>
    <Period>{period}</Period>
  </EducationContainer>
);

const Course: React.FC<CourseProps> = ({ name, provider, completionDate }) => (
  <CourseContainer>
    <CourseName>{name}</CourseName>
    <Provider>{provider}</Provider>
    <CompletionDate>{completionDate}</CompletionDate>
  </CourseContainer>
);

const EducationSection: React.FC<{ educations: EducationProps[] }> = ({ educations }) => (
  <section>
    <SectionTitle>Formação Acadêmica</SectionTitle>
    {educations.map((education, index) => (
      <Education key={index} {...education} />
    ))}
  </section>
);

const CoursesSection: React.FC<{ courses: CourseProps[] }> = ({ courses }) => (
  <section>
    <SectionTitle>Cursos</SectionTitle>
    {courses.map((course, index) => (
      <Course key={index} {...course} />
    ))}
  </section>
);

const EducationPage: React.FC = () => {
  const educations = [
    { degree: 'Bacharelado em Ciência da Computação', institution: 'Universidade Estácio de Sá', period: '2015 - 2019' },
    { degree: 'Mestrado em Inteligência Artificial', institution: 'Universidade UFRJ', period: '2020 - 2022' },
  ];

  const courses = [
    { name: 'React Avançado', provider: 'Udemy', completionDate: 'Março de 2023' },
    { name: 'TypeScript Completo', provider: 'Alura', completionDate: 'Janeiro de 2024' },
  ];

  return (
    <Container>
      <h1>Minha Formação Acadêmica e Cursos</h1>
      <EducationSection educations={educations} />
      <CoursesSection courses={courses} />
    </Container>
  );
};

export default EducationPage;
