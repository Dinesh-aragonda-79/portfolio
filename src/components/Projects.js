import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
`;

const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.h2`
  ${gradientText}
  text-align: center;
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #1f1f1f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
`;

const ProjectTitle = styled.h3`
  ${gradientText}
  font-size: 1.5em;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
`;

const Technologies = styled.p`
  font-size: 0.9em;
  margin-bottom: 20px;
  strong {
    font-weight: bold;
  }
`;

const ProjectLink = styled.a`
  color: #ffffff;
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
  display: inline-block;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: linear-gradient(90deg, #E100FF, #7F00FF);
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Code Tracker',
      description: 'A project tracking tool to help developers keep track of their coding activities and progress.',
      technologies: 'HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB',
      link: 'https://github.com/Dinesh-aragonda-79/Code-Tracker'
    },
    {
      title: 'Canteen Wallah',
      description: 'A food delivery app with features for user and admin logins, focusing on seamless user experience.',
      technologies: 'HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB',
      link: 'https://github.com/Dinesh-aragonda-79/Canteen-Wallah'
    },
    {
      title: 'Chatting App',
      description: 'A real-time chat application with multiple chat rooms and user authentication.',
       technologies: 'HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB',
      link: 'https://github.com/Dinesh-aragonda-79/Chatting-App'
    },
    {
      title: 'Tech News',
      description: 'A platform to get the latest technology news from various sources, presented in an intuitive interface.',
      technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda-79/Tech-News'
    },
    {
      title: 'Attendance Manager',
      description: 'An application to manage and track attendance for students or employees, with detailed reports.',
       technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda-79/Attendance-manager-app'
    },
    {
      title: 'Advanced ToDo List',
      description: 'A feature-rich to-do list app to manage tasks with priorities, deadlines, and reminders.',
      technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda-79/Advanced-ToDo-List'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Technologies><strong>Technologies:</strong> {project.technologies}</Technologies>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
