import React from 'react';
import '../styles/MyProjects.css';

const projects = [
    {
        image: '/images/BioHackAI.png',
        title: 'BioHackAI',
        description: `BiohackAI is an innovative platform that uses AI to provide intelligent guidance and information in the field of healthcare. It helps users better understand symptoms, care methods, and standard rehabilitation training and treatments for various common diseases.`,
    },
    {
        image: '/images/UNIXshell.png',
        title: 'UNIX Shell',
        description: 'This simple shell program, inspired by Unix shells, allows users to interact with the operating system via a command-line interface. It supports executing commands, running processes in the background, a history feature to re-execute the last command, input/output redirection, and piping between commands.',
    },
    {
        image: '/images/TFTP-protocol.jpeg',
        title: 'TFTP Protocol',
        description: 'This project provides a complete implementation of the Trivial File Transfer Protocol (TFTP) for file transfer between a client and a server. TFTP is a simple, lock-step, file transfer protocol that allows a client to get from or put a file onto a remote host. One of its primary uses is in the early stages of nodes booting from a local area network.',
    },
    {
        image: '/images/Assembly.png',
        title: 'Assembly',
        description: 'Project 4 description',
    },
    {
        image: 'images/MazeSolver.png',
        title: 'Maze Solver',
        description: 'Given a text file representing a maze, as below, find the path for creature to get to the exit and mark the path explored.',
    },
    {
        image: 'images/SkipList.png',
        title: 'SkipList',
        description: 'Working with pointers and linked lists',
    },
];

const MyProjects = () => {
    return (
        <div className="page-container">
            <h1 className="header">My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-box">
                        <div className="project-image">
                            <img src={project.image} alt={`Project ${index + 1}`} />
                        </div>
                        <div className="divider"></div>
                        <div className="project-title"><h3>{project.title}</h3></div>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
