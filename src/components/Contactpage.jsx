import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>

        <div className="textbackground">
          <h2 className="contacthead">Create Your Metamask wallet</h2>
          <p className="contactpara" >
            Get started with your secure Metamask wallet and contribute to anonymous crime reporting.
            <br></br>
            Join us in ensuring public safety while protecting your identity.
          </p>
          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://metamask.io/");
            }}
          >
            Create
          </button>
          <span></span>
        </div>
      </Container>
    </div>
  );
}

export default Contactpage;