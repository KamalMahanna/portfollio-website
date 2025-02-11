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

export const experiences: Experience[] = [
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
  },
  {
    title: "IAC-Chatbot",
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
    title: "Google's Stock Price Prediction",
    company: "Bharat Intern",
    period: "Jul 2023 - Aug 2023",
    description: [
      "Utilized Long Short‑Term Memory (LSTM) networks for univariate and multivariate stock price prediction",
      "Achieved exceptional results with RMSE of 0.00045 and 0.00016, showcasing expertise in time series forecasting",
      "Conducted exploratory data analysis (EDA) to identify patterns and trends in stock data, contributing to insights",
      "Applied statistical modeling and machine learning techniques for accurate predictions"
    ],
    technologies: ["Python", "LSTM", "Time Series Analysis", "Statistical Modeling", "Machine Learning"]
  },
  {
    title: "Hand Written Digit Recognition with CNN",
    company: "Bharat Intern",
    period: "Jul 2023 - Aug 2023",
    description: [
      "Employed Convolutional Neural Networks (CNNs) to achieve a remarkable 99% accuracy in recognizing handwritten digits",
      "Highlighted proficiency in image processing and specialized neural network architectures",
      "Delivered outstanding results by optimizing the parameters of CNN"
    ],
    technologies: ["Python", "CNN", "Image Processing", "Deep Learning", "Neural Networks"]
  },
  {
    title: "Automated Resume Classification System",
    company: "Ai Variant",
    period: "Jan 2023 - Apr 2023",
    description: [
      "Led the development of an automated resume classification system using Natural Language Processing (NLP) techniques",
      "Applied supervised classification methods, reducing manual HR effort and optimizing resume processing",
      "Enhanced data preprocessing techniques for parsing resumes, improving accuracy and efficiency"
    ],
    technologies: ["Python", "NLP", "Machine Learning", "Text Classification", "Data Preprocessing"]
  },
  {
    title: "Book Recommendation System",
    company: "Ai Variant",
    period: "Oct 2022 - Apr 2023",
    description: [
      "Engineered a book recommendation system that boosted sales through personalized recommendations based on past ratings",
      "Addressed data quality issues by handling over 5,000 null values through data scraping from diverse sources",
      "Implemented content‑based and collaborative filtering techniques to optimize recommendation efficiency and increase average book sales"
    ],
    technologies: ["Python", "Machine Learning", "Collaborative Filtering", "Data Scraping", "Content-based Filtering"]
  }
];
