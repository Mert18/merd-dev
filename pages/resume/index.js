import React from "react";
import classes from "./resume.module.css";
import Tech from "../../components/Tech.js";
const Resume = () => {
  return (
    <section className={classes.resume}>
      <article className={classes.introduction}>
        <h2>Introduction</h2>
        <div className={classes.introductiontext}>
          <p>
            Hello My name is Mert. I am a Frontend Developer. I started web
            development in May, 2020, and never ceased learning since then.
          </p>
          <p>Currently I am working with Javascript technologies.</p>
        </div>
      </article>

      <article className={classes.techs}>
        <h2>Technologies I use</h2>
        <div className={classes.techsflex}>
          <Tech name="HTML" rank={90} />
          <Tech name="CSS" rank={70} />
          <Tech name="Javascript" rank={80} />
          <Tech name="React.js" rank={70} />
          <Tech name="Next.js" rank={70} />
          <Tech name="MongoDB" rank={50} />
          <Tech name="PostgreSQL" rank={40} />
          <Tech name="Typescript" rank={30} />
          <Tech name="GraphQL" rank={30} />
          <Tech name="Prisma" rank={30} />
        </div>
        <h2>Tools</h2>
        <div className={classes.tools}>
          <p>Git</p>
          <p>Atlassian</p>
          <p>Figma</p>
          <p>Webpack</p>
          <p>Adobe Illustrator</p>
        </div>
      </article>
    </section>
  );
};

export default Resume;