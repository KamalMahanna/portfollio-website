export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'ai-resume-creator',
    title: "AI Resume Creator",
    description: "A powerful tool leveraging Gemini API to generate professional resumes effortlessly, ensuring well-structured and tailored outputs for diverse career needs.",
    image: "projects/images/ai-resume-creator.png",
    technologies: ["Python", "Flask", "Gemini AI","Made With Cline","Prompt Engineering"],
    liveUrl: "https://ai-resume-creator.netlify.app/",
    githubUrl: "https://github.com/KamalMahanna/AI-Resume-Creator",
  },
  {
    id: 'ingredient-analyzer',
    title: "Ingredient Safety Analyzer",
    description: "An innovative tool powered by Gemini AI that analyzes product ingredients, providing detailed safety profiles for informed purchasing decisions.",
    image: "projects/images/ingredient-safety-analyzer.png",
    technologies: ["Python", "Flask", "React", "Gemini AI", "Prompt Engineering"],
    liveUrl: "https://ingredient-safety-analyzer.netlify.app/",
    githubUrl: "https://github.com/KamalMahanna/Ingredient-Safety-Analyzer",
  },
  {
    id: 'career-helper',
    title: "AI Career Helper",
    description: "A comprehensive career development suite offering ATS scoring, text summarization, interview preparation, and personalized career guidance.",
    image: "projects/images/ai-career-helper.png",
    technologies: ["AI", "NLP", "React", "Prompt Engineering", "Gemini AI"],
    liveUrl: "https://ai-career-helper.netlify.app/",
    githubUrl: "https://github.com/KamalMahanna/Ai-Career-Helper",
  },
  {
    id: 'stock-prediction',
    title: "Book Recommendation System",
    description: "A sophisticated recommendation system using collaborative filtering and content-based methods to suggest personalized book recommendations based on user preferences and reading history.",
    image: "projects/images/book-recommendation-system.png",
    technologies: ["Machine Learning", "Python", "Streamlit", "Collaborative Filtering"],
    liveUrl: "https://kamalmahanna.github.io/Book-Recommendation-System/",
    githubUrl: "https://github.com/kamalmahanna/Book-Recommendation-System",
  },
];

interface ExperienceDescription {
  text: string;
  link?: string;
  linkText?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: (string | ExperienceDescription)[];
  technologies: string[];
}

export const openSourceContributions: Experience[] = [
  {
    title: "Open Source Contributor",
    company: "Resume Matcher",
    period: "Aug 30, 2024 - Dec 3, 2024",
    description: [
      "Fixed critical project initialization issues by automating the creation of missing directories, ensuring smooth project setup",
      "Enhanced Docker-compose functionality by implementing automated file/folder generation, resolving deployment failures",
      "Implemented code quality standards by integrating flake8 with git commit hooks, ensuring consistent coding standards",
      {
        text: "Contributed to the successful deployment of the project, now live on",
        link: "https://resume-matcher-c.streamlit.app",
        linkText: "streamlit"
      }
    ],
    technologies: ["Python", "Docker", "Git", "flake8", "Streamlit"]
  }
];

export const experiences: Experience[] = [
  {
    title: "Data Science Intern",
    company: "Industry Academia Community",
    period: "Jul 2023 - Oct 2023",
    description: [
      "Developed an AI-powered chatbot using Google's Dialogflow, enhancing user engagement for a student community of 5,000+ members by 35",
      "Demonstrated proficiency in natural language processing (NLP) and conversational AI, improving response accuracy by 25",
      "Achieved a 20% reduction in support response time through effective chatbot design and implementation"
    ],
    technologies: ["Dialogflow", "NLP", "Conversational AI", "Python", "Google Cloud"]
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Bharat Intern",
    period: "Jul 2023 - Aug 2023",
    description: [
      "Challenged to develop machine learning solutions addressing both computer vision and financial forecasting needs within a competitive internship program.",
      "Created dual ML applications: a CNN-based handwritten digit recognition system and a time-series model for Google stock price prediction.",
      "Implemented TensorFlow-based deep learning architectures, conducted extensive data preprocessing, and optimized model hyperparameters through iterative testing and validation.",
      "Delivered a digit recognition system with 97% accuracy and a stock prediction model with interactive visualizations that provided actionable financial insights, receiving recognition for technical versatility."
    ],
    technologies: ["Python", "LSTM", "CNN", "Time Series Analysis", "Image Processing", "Machine Learning", "Deep Learning"]
  },
  {
    title: "Data Science Intern",
    company: "Ai Variant",
    period: "Oct 2022 - Apr 2023",
    description: [
      "Identified critical inefficiencies in document processing workflows and content recommendation systems affecting business productivity.",
      "Developed an automated resume classification system and a personalized book recommendation engine to streamline operations and enhance user engagement.",
      "Leveraged NLP techniques for document parsing, implemented collaborative filtering algorithms, and designed intuitive user interfaces with Python and relevant frameworks.",
      "Reduced HR document processing time by 40% through automated resume categorization while increasing user engagement metrics by 25% through personalized book recommendations, demonstrating significant business impact."
    ],
    technologies: ["Python", "NLP", "Machine Learning", "Text Classification", "Collaborative Filtering", "Content-based Filtering", "Data Preprocessing", "Data Scraping"]
  }
];
