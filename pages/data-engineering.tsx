import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const DataEngineering: React.FC = () => {
  const projects = [
    {
      title: "Data Pipeline Framework",
      description: "A comprehensive and scalable data pipeline framework built with Apache Airflow for orchestrating complex ETL workflows.\n\nThe system handles data ingestion from multiple sources including databases, APIs, and file systems, with configurable connectors and validation rules. Features robust transformation capabilities using both SQL and Python, with support for incremental processing and backfilling.\n\nIncludes advanced monitoring dashboards, automated alerting, automated retry mechanisms, and detailed audit logging. The framework also provides built-in data quality checks, SLA monitoring, and performance optimization tools.\n\nDesigned with horizontal scalability in mind, supporting distributed execution across multiple workers.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" },
        { icon: () => <Image src="/images/sql.svg" alt="SQL" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "SQL" },
        { icon: () => <Image src="/images/github_actions.svg" alt="Github Actions" width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />, name: "Github Actions" }
      ],
      githubUrl: "https://github.com/username/data-pipeline-framework"
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