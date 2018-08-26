import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import Photo from '../assets/images/Me-In-Sicily-bw.jpg';

const HomePage = props => (
  <section>
    <Row>
      <Col xs="12">
        <h1>Hello! Welcome to the homepage</h1>
        <article className="d-flex">
          <aside className="col-4">
            <img src={Photo} className="img-fluid" alt="Author in Sicily" />
          </aside>
          <div className="col-8">
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

  // <div>
  //   <h1>Home</h1>
  //   <p>
  //     <button onClick={() => props.changePage()}>
  //       Go to about page via redux
  //     </button>
  //   </p>
  // </div>
);

const mapDispatchToProps = dispatch => {
  return {
    changePage: () => dispatch(push('/data'))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(HomePage);
