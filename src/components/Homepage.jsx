import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7} >
            <h3 className='aboutmetext'>What is <span>CRS</span></h3>
            <p className='aboutdetails' style={{ textAlign: 'justify' }}>

              The Anonymous Crime Reporting System is a cutting-edge online platform designed to
              empower individuals to report crimes while ensuring their anonymity and maintaining tamper-
              free operations. With the increasing need for public safety, this system provides a secure and
              convenient means for users to report illegal activities without fear of reprisal or disclosure of
              their identity. By leveraging advanced encryption, privacy protocols, and the immutable nature
              of blockchain technology, the Anonymous Crime Reporting System guarantees the
              confidentiality of the reporters' information and ensures that the system is tamper-free. This
              safeguarding of personal details from unauthorized access enhances trust and encourages
              individuals to share crucial information about criminal incidents they witness or suspect.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >

                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Aboutpage