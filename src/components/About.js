import React from 'react';
import styled from 'styled-components';
import profile from './profile.jpg'; // Ensure this path is correct
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';

// Define gradient text style
const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Styled components
const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #1c1c1c, #2c2c2c);
  color: #ffffff;
  margin-top: 50px;
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    padding: 30px 15px;
    margin-top: 30px;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  max-width: 600px;
  padding-right: 20px;
  animation: fadeInLeft 1.5s ease-in-out;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    max-width: 100%;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Name = styled.h1`
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(90deg, #FF007F, #FF00FF, #7F00FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
  ${gradientText}
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 1.1em;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #b3b3b3;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 10px 5px 20px 0;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #E100FF, #7F00FF);
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(225, 0, 255, 0.5);
  }

  svg {
    margin-right: 8px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
  animation: fadeInUp 1.5s ease-in-out;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #E100FF;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
    margin: 0 8px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  animation: fadeInRight 1.5s ease-in-out;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ProfileImage = styled.img`
  border-radius: 20px;
  border: 5px solid #7F00FF;
  width: 100%;
  max-width: 300px;
  height: 380px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
  transform: rotate(-3deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  filter: brightness(0.9) contrast(1.1);

  &:hover {
    transform: rotate(-1deg);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    max-width: 250px;
    height: auto;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    max-width: 200px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(127, 0, 255, 0.3), rgba(225, 0, 255, 0.3));
  mix-blend-mode: overlay;
  pointer-events: none;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <TextContainer>
        <Name>Hi there, I'm Dinesh</Name>
        <Title>Competitive Programmer and ML Enthusiast</Title>
        <Description>I am a Computer Science and Engineering student at NIT Silchar.</Description>
       
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/dinesh-aragonda-5795a2223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></SocialLink>
          <SocialLink href="https://github.com/Dinesh-aragonda-79" target="_blank"><FaGithub /></SocialLink>
          <SocialLink href="https://x.com/dinesh793?t=3p720jOFux8HZ7VHZ42k8g&s=08" target="_blank"><FaTwitter /></SocialLink>
        </SocialLinks>
      </TextContainer>
      <ImageContainer>
        <ProfileImage src={profile} alt="Dinesh Aragonda" />
        <Overlay />
      </ImageContainer>
    </AboutSection>
  );
};

export default About;
