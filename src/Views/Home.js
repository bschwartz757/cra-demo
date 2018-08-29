import React from 'react';
import { Row, Col } from 'reactstrap';
import Photo from '../assets/images/Me-In-Sicily-bw.jpg';

const HomePage = () => (
  <section>
    <Row>
      <Col xs="12">
        <h1>Hello! Welcome to the homepage</h1>
        <article className="d-flex">
          <aside className="col-12 col-md-4">
            <img src={Photo} className="img-fluid" alt="Author in Sicily" />
          </aside>
          <div className="col-12 col-md-8">
            <p>
              This is just a little bit of an introduction. The "real" me is a
              lot more interesting - maybe you'll see me around.
            </p>
            <p>
              I'm a hard-working developer with a passion for clean, semantic
              code and modern design aesthetics. My skills include front- and
              back-end development languages and frameworks and a solid
              understanding of responsive design techniques.
            </p>
          </div>
        </article>
      </Col>
    </Row>
  </section>
);

export default HomePage;
