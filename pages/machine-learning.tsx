import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const MachineLearning: React.FC = () => {
  const projects = [
    {
      title: "Solar Site Detection Model",
      description: "A model that detects solar sites from satellite imagery. The model is trained on a dataset of satellite imagery (Google Maps) and labeled solar sites (Public datasets). Deployed using Docker + FastAPI and weights hosted on HuggingFace.",
      technologies: [
        { icon:"/images/python.svg", name: "Python", invert: false },
        { icon:"/images/docker.svg", name: "Docker", invert: false },
        { icon:"/images/fastapi.svg", name: "FastAPI", invert: true }
      ],
      image: {
        src: "solar_site_detection_model.jpg",
        alt: "Solar Site Detection Model"
      },
      githubUrl: null
    },
    {
      title: "Solar Irradiance Forecasting Model",
      description: "A model that predicts long-term solar irradiance trends. The model is trained on a dataset of irradiance data (SolarGIS) and global climate data (ERA5).\n\nI used an autoregressive integrated moving average (ARIMA) model to forecast the irradiance data. I then built a forecasting engine that serves a dashboard in Tableau.",
      technologies: [
        { icon:"/images/python.svg", name: "Python", invert: false },
        { icon:"/images/postgresql.svg", name: "Postgresql", invert: false },
        { icon:"/images/tableau.svg", name: "Tableau", invert: false },
      ],
      image: {
        src: "solar_irradiance_forecasting_model.jpg", 
        alt: "Solar Irradiance Forecasting Model"
      },
      githubUrl: null
    }
  ];

  return (
    <ProjectsPage 
      title="Machine Learning"
      projects={projects}
    />
  );
};

export default MachineLearning;