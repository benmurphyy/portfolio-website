import { ForwardedRef, forwardRef } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import universityModules from 'src/assets/data/university_modules.json';

const UniModulesSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Container ref={ref} fluid className="background-grunge rounded">
      <Row>
        <Container>
          <Row className="heading-background py-2">
            <Col>
              <h1 className="display-5">University Modules</h1>
              <h5>Current CAP: 5.0/5.0</h5>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Row>
      <Row>
        <Col className="p-2">
          <h2 className="m-0 fw-bold">Computer Science</h2>
        </Col>
        <Table bordered striped>
          <thead className="table-dark">
            <tr>
              <th className="w-25">Code</th>
              <th>Name</th>
              <th className="w-25">Grade</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {universityModules.map((module) => {
              return module.type === 'cs' ? (
                <tr key={module.code}>
                  <td>{module.code}</td>
                  <td>{module.name}</td>
                  <td>{module.grade}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col className="p-2">
          <h2 className="m-0 fw-bold">Technical</h2>
        </Col>
        <Table bordered striped>
          <thead className="table-dark">
            <tr>
              <th className="w-25">Code</th>
              <th className="">Name</th>
              <th className="w-25">Grade</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {universityModules.map((module) => {
              return module.type === 'technical' ? (
                <tr key={module.code}>
                  <td>{module.code}</td>
                  <td>{module.name}</td>
                  <td>{module.grade}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col className="p-2">
          <h2 className="m-0 fw-bold">Others</h2>
        </Col>
        <Table bordered striped className="rounded">
          <thead className="table-dark">
            <tr>
              <th className="w-25">Code</th>
              <th className="">Name</th>
              <th className="w-25">Grade</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {universityModules.map((module) => {
              return module.type === 'others' ? (
                <tr key={module.code}>
                  <td>{module.code}</td>
                  <td>{module.name}</td>
                  <td>{module.grade}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
});

UniModulesSection.displayName = 'UniModulesSection';
export default UniModulesSection;
