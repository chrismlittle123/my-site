import React from 'react';
import ProjectsPage from '../components/ProjectsPageSoftware';
import { CogIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SoftwareEngineering: React.FC = () => {
  const projects = [
    {
      title: "Simply Comply",
      description: "Built a compliance management platform that helps businesses track and manage their regulatory obligations.\n\nThe platform features a dashboard showing compliance status across different regulations, automated reminders for upcoming deadlines, and document management capabilities.\n\nImplemented role-based access control, audit logging, and integrations with popular document storage solutions.",
      technologies: [
        { icon: () => <Image src="/images/react.svg" alt="React" width={32} height={32} />, name: "React" },
        { icon: () => <Image src="/images/typescript.svg" alt="TypeScript" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "TypeScript" },
        { icon: () => <Image src="/images/postgresql.svg" alt="PostgreSQL" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "PostgreSQL" },
        { icon: () => <Image src="/images/nodejs.svg" alt="Node.js" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Node.js" }
      ],
      githubUrl: null,
      images: [
        {
          src: "simply_comply_image_1.png",
          alt: "Simply Comply Dashboard"
        },
        {
          src: "simply_comply_image_2.png",
          alt: "Simply Comply Compliance Tracking"
        },
        {
          src: "simply_comply_image_3.png",
          alt: "Simply Comply Document Management"
        },
        {
          src: "simply_comply_image_4.png",
          alt: "Simply Comply Analytics"
        }
      ]
    },
    {
      title: "API Service",
      description: "RESTful API service built with Express and MongoDB. Includes rate limiting, caching, authentication and comprehensive documentation.\n\nImplemented robust error handling, request validation, and API versioning. The service features automated API documentation generation and extensive test coverage.\n\nDeployed using Docker containers with automated CI/CD pipeline.",
      technologies: [
        { icon: () => <Image src="/images/express.svg" alt="Express" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Express" },
        { icon: () => <Image src="/images/mongodb.svg" alt="MongoDB" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "MongoDB" },
        { icon: () => <Image src="/images/typescript.svg" alt="TypeScript" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "TypeScript" },
        { icon: () => <Image src="/images/docker.svg" alt="Docker" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Docker" }
      ],
      githubUrl: null
    }
  ];

  return (
    <ProjectsPage 
      title="Software Engineering"
      description="Full-stack development"
      icon={CogIcon}
      projects={projects}
    />
  );
};

export default SoftwareEngineering;