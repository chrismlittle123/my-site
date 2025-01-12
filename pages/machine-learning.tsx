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
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" },
        { icon: () => <Image src="/images/docker.svg" alt="Docker" width={32} height={32}  />, name: "Docker" },
        { icon: () => <Image src="/images/fastapi.svg" alt="FastAPI" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "FastAPI" }
      ],
      image: {
        src: "solar_site_detection_model.jpg",
        alt: "Solar Site Detection Model"
      }
    },
    {
      title: "Solar Irradiance Forecasting Model",
      description: "A model that predicts long-term solar irradiance trends. The model is trained on a dataset of irradiance data (SolarGIS) and global climate data (ERA5). I used an autoregressive integrated moving average (ARIMA) model to forecast the irradiance data. I then built a forecasting engine that serves a dashboard in Tableau.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" },
        { icon: () => <Image src="/images/tableau.svg" alt="Tableau" width={32} height={32} />, name: "Tableau" },
      ],
      image: {
        src: "solar_irradiance_forecasting_model.jpg", 
        alt: "Solar Irradiance Forecasting Model"
      }
    }
  ];

  return (
    <ProjectsPage 
      title="Machine Learning"
      description="ML model development and GenAI"
      icon={CpuChipIcon}
      projects={projects}
    />
  );
};

export default MachineLearning;