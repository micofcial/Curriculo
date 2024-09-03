import styled from 'styled-components';
import React from 'react';

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
  min-width: 300px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

const ContactImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Field = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <Container>
        <Column>
          <ContactImage
            src="https://pense-company.netlify.app/src/img/banner-contato/banner-contato.png"
            alt="Imagem de Contato"
          />
        </Column>
        <Column>
          <Form>
            <FormTitle>Entre em Contato</FormTitle>
            <Field>
              <Label htmlFor="nome">Nome</Label>
              <Input
                type="text"
                placeholder="Seu Nome"
                id="nome"
              />
            </Field>
            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                placeholder="Seu E-mail"
                id="email"
              />
            </Field>
            <Field>
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                placeholder="Digite a sua mensagem para o recrutador"
                id="mensagem"
              />
            </Field>
            <Field>
              <Button type="submit">Enviar</Button>
            </Field>
          </Form>
        </Column>
      </Container>
    </ContactSection>
  );
};

export default Contact;
