import {
  DataS,
  SoftDev,
  DeepL,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "Projects",
    title: "Projects",
  },  
  {
    id: "contact",
    title: "Contact",
  },
];



const experiences = [
  {
    title: "Cloud Suppor Intern",
    company_name: "Amazon",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "Gained hands-on experience with all AWS services, such as EC2, S3, RDS, CloudWatch, and etc.",
      "Managed and enhanced cloud solutions across AWS services, improving system availability and resource efficiency.",
      "Earned AWS Certified Cloud Practitioner and Solutions Architect certifications, demonstrating deep knowledge in cloud architecture and security.",
    ],
  },
  {
    title: "System Test Engineer Intern",
    company_name: "Signify",
    icon: tesla,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Worked with the system test engineer team to create and execute test cases and automation frameworks for IoT lighting solutions.",
      "Implement continuous integration and continuous deployment practices to streamline testing and deployment processes.",
      "Utilize a variety of testing tools and technologies, including Selenium, Postman, and Jenkins, to automate tests for web interfaces, APIs, and device firmware.",
    ],
  },
  {
    title: "Research Asisstant",
    company_name: "Georgia State Unversity",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2023 - May 2024",
    points: [
      "Developed and refined graph compression and densification techniques, significantly enhancing the handling of simple graphs and GNNs.",
      "Co-authored a paper titled 'Exploring Similarity-Based Graph Compression for Efficient Network Analysis and Embedding,' which was accepted into the workshop program at ICCCN 2024.",
    ],
  },
  {
    title: "Teacher Asisstant",
    company_name: "Georgia State University",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Conducted sessions that complement the main lectures, and provided personalized assistance during office hours.",
      "Assess student performance through grading assignments and exams, and offer constructive feedback to help students understand material and improve their skills.",
    ],
  },
];



const projects = [
  {
    name: "Big Data Programming",
    description:
      "Covered the technologies, tools, frameworks and languages that are most commonly used in Big Data Programming. Topics include the storage, management, processing and analysis of massive datasets, as well as Big Data governance, security, and privacy issues. ",
    tags: [
      {
        name: "Hadoop",
        color: "blue-text-gradient",
      },
      {
        name: "Spark",
        color: "green-text-gradient",
      },
      {
        name: "Scala",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Data Structures & Algorithms",
    description:
    "Concepts and Techniques of data representation and designing efficient algorithms, including linearly-linked lists, trees, searching, sorting , lower bound arguments, algorithms for sorting, graphs, and string matching.",
    tags: [
      {
        name: "Big O",
        color: "blue-text-gradient",
      },
      {
        name: "Quick Sort",
        color: "green-text-gradient",
      },
      {
        name: "Hash Table",
        color: "pink-text-gradient",
      },
      {
        name: "Dijkstra",
        color: "blue-text-gradient",
      },
      {
        name: "Kruskal",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Machine Learning",
    description:
      "Covered the fundamental concepts and principles of supervised learning, unsupervised learning, semi-supervised learning and reinforcement learning. Gained experience of designing and implementing machine learning methods in real scenario.",
    tags: [
      {
        name: "supervised",
        color: "blue-text-gradient",
      },
      {
        name: "unsupervised",
        color: "green-text-gradient",
      },
      {
        name: "gradient",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },  
  {
    name: "Software Development",
    description:
      "Covered techniques used in large scale scientific or technical software development, including requirements analysis, specification, systems design, implementation, testing, validation, verification, and maintenance.",
    tags: [
      {
        name: "Agile",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: SoftDev,
  },
  {
    name: "Deep Learning",
    description:
      "Covered the foundations of deep learning, its training and regularization techniques, and its most prominent architectures such as CNN, RNN, LSTM for image recognition, sequence to sequence processing, and multi-modal applications.",
    tags: [
      {
        name: "GNN",
        color: "blue-text-gradient",
      },
      {
        name: "Neural Network",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: DeepL,
  },
  {
    name: "Data Science",
    description:
      "Covered fundamental concepts of predictive data science for tabular data with qualitative and quantitative scales. Topics include: data exploration, pre-processing and visualization; analytics base table (ABT) generation; basic supervised learning algorithms (i.e. information-based learning, similarity-based learning, and error-based learning), and comparative evaluation of these algorithms.",
    tags: [
      {
        name: "tabular data",
        color: "blue-text-gradient",
      },
      {
        name: "supervised learning",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: DataS,
  },
];

export {   experiences,  projects };
