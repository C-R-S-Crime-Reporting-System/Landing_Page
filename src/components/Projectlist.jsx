import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import adminpanel from '../assets/images/adminpanel.jpg'
import olximage from "/src/assets/images/olximage.jpg";
import netfliximage from "/src/assets/images/netflix.jpg";
import gridlinesbuilders from "/src/assets/images/Gridlinesbuilders.jpg";
import charlespizza from "/src/assets/images/pizza.jpg";
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="aboutpagebackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adminpanel}
                isBlog={false}
                title="Create metamask Wallet"
                description="To set up a Metamask wallet account, simply download the extension or mobile app and follow the straightforward setup instructions. During the process, create a strong password and a unique 12-word seed phrase that serves as a crucial backup for your wallet. Once your account is established, you can seamlessly engage with decentralized applications and efficiently manage your cryptocurrencies. Always prioritize the safety of your funds by safeguarding your seed phrase and refraining from sharing it with others."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Connect Wallet to Browser"
                description="Easily connect your Metamask wallet to your browser with the included extension. Just install the Metamask extension in your browser, and you'll have quick access to manage your cryptocurrencies and interact with decentralized applications seamlessly. No need to navigate away from your browsing experience – it's all conveniently integrated"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Submission of Report"
                description=" Users can fill in the details, upload relevant media files, and click the Submit button. Upon successful submission, a confirmation message will be displayed, indicating that the report has been successfully submitted. This efficient system allows users to report incidents or share information with ease, providing a seamless experience for all users."

              />
            </Col>

            <Col md={4} className="project-card">

            </Col>

            <Col md={4} className="project-card">

            </Col>

            <Col md={4} className="project-card">

            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;