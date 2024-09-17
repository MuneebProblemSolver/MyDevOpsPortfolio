import projeto1 from "../assets/pro1.jpg";
import Projeto2 from "../assets/pro2.jpg";
import Projeto3 from "../assets/p3_processed.jpg";
import Projeto4 from "../assets/p4.jpg";
import Projeto5 from "../assets/p5.jpg";

export const plansData = [
  {
    Image: <img alt="img-projeto" src={projeto1} width="250" height="150" />,
    icon: <svg width="15" height="13" viewBox="0 0 15 13" xmlns=""></svg>,
    id: 1,
    url: "https://github.com/MuneebProblemSolver/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project",
    features: [
      "Advanced End-to-End DevSecOps Kubernetes Three-Tier Project",
      "Terraform",
      "Amazon Web Services",
      "Docker",
      "Kubernetes",
      "CI/CD Piplines",
    ],
  },

  {
    Image: <img alt="img-projeto" src={Projeto2} width="250" height="150" />,
    icon: <svg width="28" height="24" viewBox="0 0 28 24"></svg>,
    id: 2,
    url: "https://github.com/MuneebProblemSolver/Vitual-Browser",
    features: [
      "Full Stack CI/CD DevOps Project | Virtual Browser DevOps project",
      "IAAC",
      "AWS Cloud",
      "Docker Compose",
      "C/CD piplines",
      "GitLab",
    ],
  },

  {
    Image: <img alt="img-projeto" src={Projeto3} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 3,
    url: "https://github.com/MuneebProblemSolver/Deploying-Infrastructure-using-Terraform-IAAC-Mini-Project?tab=readme-ov-file",
    features: [
      "Deploying Infrastructure on AWS using Terraform",
      "Hosting Full stack Web Application",
      "Terraform",
      "Providers",
      "Amazon Web Services",
      "Security Measures",
    ],
  },
  {
    Image: <img alt="img-projeto" src={Projeto4} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 4,
    url: "https://fellowsdispatch.com",
    features: [
      "Full Stack Truck Dispatching Web Application",
      "Frontend using REACT",
      "Backend using NodeJS",
      "Databases using MongoDB",
      "Hosting by AWS Amplify",
      "Responsive Website Design",
    ],
  },
  {
    Image: <img alt="img-projeto" src={Projeto5} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 5,
    url: "https://github.com/MuneebProblemSolver/learn-jenkins-app",
    features: [
      "CI/CD Pipline Deployment using Jenkins on AWS Cloud",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "SonarQube Analysis",
      "AWS Cloud",
    ],
  },
];
