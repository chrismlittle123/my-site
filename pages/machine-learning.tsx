import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const MachineLearning: React.FC = () => {
  const projects = [
    {
      title: "ML Model Pipeline",
      description: "End-to-end machine learning pipeline for training and deploying deep learning models. Includes data preprocessing, model training, evaluation metrics and model serving infrastructure.",
      technologies: [
        { icon: CodeBracketIcon, name: "Python" },
        { icon: CodeBracketIcon, name: "TensorFlow" },
        { icon: CodeBracketIcon, name: "PyTorch" }
      ],
      githubUrl: "https://github.com/username/ml-model-pipeline"
    },
    {
      title: "GenAI Applications",
      description: "Suite of generative AI applications leveraging large language models and diffusion models. Includes fine-tuning, prompt engineering and deployment optimizations.",
      technologies: [
        { icon: CodeBracketIcon, name: "Python" },
        { icon: CodeBracketIcon, name: "TensorFlow" },
        { icon: CodeBracketIcon, name: "HuggingFace" }
      ],
      githubUrl: "https://github.com/username/genai-applications"
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