import React from 'react';
import ProjectsPage from '../components/ProjectsPageSoftware';
import { CogIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SoftwareEngineering: React.FC = () => {
  const projects = [
    {
      title: "Simply Comply",
      description: "Built a compliance management platform that helps mortgages brokers run identity, income verification and credit checks all in one place.\n\nThe app can extract data from dozens of UK banks, using a PDF parsing library that I built.\n\nThe backend is Typescript + PostgreSQL, with a React + Next.js frontend.\n\nSee slides below.",
      technologies: [
        { icon: "/images/react.svg", name: "React", invert: false },
        { icon: "/images/typescript.svg", name: "TypeScript", invert: false },
        { icon: "/images/postgresql.svg", name: "PostgreSQL", invert: false },
        { icon: "/images/next_js.svg", name: "Next.js", invert: true }
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
      description: "Built a tool that ethically scrapes car rental site data to help a client be price competitive.\n\nThe frontend is built with Streamlit + Python. To run the scrape, I used Docker (for the scraping), Terraform (for the infrastructure) and AWS Glue + Athena + S3 (for the ETL pipeline).\n\nThe tool is deployed on AWS and can be scaled to handle several scrapes per day in many locations.\n\nSee slides below.",
      technologies: [
        { icon: "/images/python.svg", name: "Python", invert: false },
        { icon: "/images/streamlit.svg", name: "Streamlit", invert: false },
        { icon: "/images/docker.svg", name: "Docker", invert: false },
        { icon: "/images/terraform.svg", name: "Terraform", invert: false },
        { icon: "/images/aws.svg", name: "AWS", invert: true }
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