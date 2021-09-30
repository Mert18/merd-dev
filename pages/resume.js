import Container from "../components/Container";
import classes from "../styles/resume.module.css";

const technologies = [
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Typescript",
  "GraphQL",
];

const tools = ["Git", "Atlassian", "Figma", "Webpack", "Adobe Illustrator"];

export default function Resume() {
  return (
    <Container>
      <div className={classes.resume}>
        <div className={classes.textpart}>
          <div className={classes.resumetextpart} id={classes.intro}>
            <p>
              Hi, my name is Mert. I have a broad knowledge on web development
              but I prefer calling myself a Frontend Developer. I love creating
              websites.
            </p>
          </div>
          <div className={classes.resumetextpart} id={classes.techs}>
            <ul className={classes.techlist}>
              {technologies.map((tech) => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>
          <div className={classes.resumetextpart} id={classes.tools}>
            <ul className={classes.techlist}>
              {tools.map((tools) => {
                return <li key={tools}>{tools}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
