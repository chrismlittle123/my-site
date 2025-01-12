import React from 'react';
import ProjectsPage from '../components/ProjectsPageSoftware';
import { CogIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SoftwareEngineering: React.FC = () => {
  const projects = [
    {
      title: "Simply Comply",
      description: "Built a compliance management platform that helps mortgages brokers run identity, income verification and credit checks all in one place.\n\nThe app can extract data from dozens of UK banks, using a PDF parsing library that I built.\n\nThe backend is Typescript + PostgreSQL, with a React + Next.js frontend.",
      technologies: [
        { icon: () => <Image src="/images/react.svg" alt="React" width={32} height={32} />, name: "React" },
        { icon: () => <Image src="/images/typescript.svg" alt="TypeScript" width={32} height={32} />, name: "TypeScript" },
        { icon: () => <Image src="/images/postgresql.svg" alt="PostgreSQL" width={32} height={32}  />, name: "PostgreSQL" },
        { icon: () => <Image src="/images/next_js.svg" alt="Next.js" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Next.js" }
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
      title: "Car Rental Site Scraping Tool",
      description: "Built a tool that ethically scrapes car rental site data to help a client be price competitive.\n\nThe frontend is built with Streamlit + Python. To run the scrape, I used Docker (for the scraping), Terraform (for the infrastructure) and AWS Glue + Athena + S3 (for the ETL pipeline).\n\nThe tool is deployed on AWS and can be scaled to handle several scrapes per day in many locations.",
      technologies: [
          { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32}  />, name: "Python" },
        { icon: () => <Image src="/images/streamlit.svg" alt="Streamlit" width={32} height={32} />, name: "Streamlit" },
        { icon: () => <Image src="/images/docker.svg" alt="Docker" width={32} height={32} />, name: "Docker" },
        { icon: () => <Image src="/images/terraform.svg" alt="Terraform" width={32} height={32}/>, name: "Terraform" },
        { icon: () => <Image src="/images/aws.svg" alt="AWS" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "AWS" }
      ],
      githubUrl: "https://github.com/chrismlittle123/car-rental-sites-scrape",
      images: [
        {
          src: "car_rental_sites_scrape_image_1.png",
          alt: "Car Rental Scrape Dashboard"
        },
        {
          src: "car_rental_sites_scrape_image_2.png",
          alt: "Car Rental Scrape Dashboard"
        }
      ]
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