import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const DataEngineering: React.FC = () => {
  const projects = [
    {
      title: "Weather and Financial Data Pipeline",
      description: "Developed a data pipeline and backend for a large-scale financial analysis application. The app integrated weather data, energy prices, and site-specific data to calculate expected solar site revenues, used by the finance team to make investment decisions. Integrated financial data (Bloomberg API) with weather data (SolarGIS API) and site-specific data (Google Maps API) and processed using Apache Spark. Time series data on solar production from existing solar sites was also integrated into the tool, data was streamed into a data warehouse using Apache Kafka. Below is an architecture diagram of the pipeline.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" },
        { icon: () => <Image src="/images/apache_spark.svg" alt="Apache Spark" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Apache Spark" },
        { icon: () => <Image src="/images/apache_kafka.svg" alt="Apache Kafka" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Apache Kafka" },
        { icon: () => <Image src="/images/postgresql.svg" alt="PostgresSQL" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "PostgresSQL" }
      ],
      githubUrl: null,
      image: {
        src: "weather_and_financial_data.jpg",
        alt: "Weather and Financial Data Pipeline Architecture"
      }
    },
    {
      title: "Data Lake Architecture",
      description: "Enterprise-grade cloud-native data lake implementation leveraging AWS S3 and Apache Spark for large-scale data processing.\n\nThe architecture implements a multi-layer approach with bronze (raw), silver (cleaned), and gold (aggregated) zones for optimal data management. Features comprehensive data cataloging using AWS Glue with automated schema evolution handling.\n\nImplements sophisticated partitioning strategies based on multiple dimensions for optimal query performance. Includes advanced query optimization techniques like file compaction, columnar storage formats, and predicate pushdown.\n\nThe system supports both batch and streaming workloads with built-in data governance, security controls, and encryption at rest and in transit. Provides seamless integration with BI tools through Athena and Redshift Spectrum.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" },
        { icon: () => <Image src="/images/postgresql.svg" alt="PostgresSQL" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "PostgresSQL" },
        { icon: () => <Image src="/images/docker.svg" alt="Docker" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Docker" }
      ],
      githubUrl: "https://github.com/username/data-lake-architecture"
    }
  ];

  return (
    <ProjectsPage 
      title="Data Engineering"
      description="Scalable data pipelines and infrastructure"
      icon={CircleStackIcon}
      projects={projects}
    />
  );
};

export default DataEngineering;