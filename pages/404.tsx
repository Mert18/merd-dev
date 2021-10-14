import Container from "../components/Container";
import { useState, useEffect } from "react";
import classes from "../styles/forofor.module.css";

const beKindToWhoisLost = [
  "You are lost. Just like me after watched I Am Thinking Of Ending Things.",
];

export default function NotFound() {
  const [siteyt, setSiteyt] = useState(beKindToWhoisLost[0]);

  useEffect(() => {
    let random = Math.trunc(Math.random() * beKindToWhoisLost.length);
    setSiteyt(beKindToWhoisLost[random]);
  });
  return (
    <Container>
      <div className={classes.forofor}>
        <p>{siteyt}</p>
      </div>
    </Container>
  );
}