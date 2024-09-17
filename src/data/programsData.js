import { SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";

import {
  SiJenkins,
  SiKubernetes,
  SiAmazonaws,
  SiTerraform,
  SiGithub,
  SiPrometheus
} from "react-icons/si";

const programsData = [
  {
    image: (
      <svg width="12" height="16" viewBox="0 0 20 16">
        <SiJavascript />
      </svg>
    ),
    id: 1,
    heading: "JS",
    // details: "Core technology of the Web",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaReact />
      </svg>
    ),
    id: 2,
    heading: "REACT",
    // details: "Core technology of the Web",
  },



  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaNodeJs />
      </svg>
    ),
    id: 4,
    heading: "NodeJS",
    // details: "Core technology of the Web",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiAmazonaws />
      </svg>
    ),
    id: 3,
    heading: "AWS Cloud",
    // details: "Core technology of the Web",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiTerraform />
      </svg>
    ),
    id: 5,
    heading: "Terraform",
    // details: "Core technology of the Web",
  },


  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaDocker />
      </svg>
    ),
    id: 8,
    heading: "Docker",
    // details: "Possuo conhecimentos com Docker",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiKubernetes/>
      </svg>
    ),
    id: 6,
    heading: "K8s",
    // details: " technology of the Web",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiGithub/>
      </svg>
    ),
    id: 8,
    heading: "Git/Github",
    // details: "Possuo conhecimentos com ",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiJenkins/>
      </svg>
    ),
    id: 9,
    heading: "Jenkins",
    // details: "Possuo conhecimentos com ",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiPrometheus/>
      </svg>
    ),
    id: 7,
    heading: "Prometheus",
    // details: "Possuo conhecimentos com ",
  },
];

export default programsData;
