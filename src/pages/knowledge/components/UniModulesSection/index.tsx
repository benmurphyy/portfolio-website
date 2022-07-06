import { ForwardedRef, forwardRef } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import universityModules from 'src/assets/data/university_modules.json';
import SectionHeader from 'src/components/SectionHeader';

const UniModulesSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Container ref={ref}>
      <SectionHeader title="University Modules" subtitle="CAP: 5.0 / 5.0" />
      <Row>
        <Col>
          <h2>Computer Science</h2>
        </Col>
      </Row>
      <Table striped>
        <thead className="table-secondary">
          <tr>
            <th className="w-25">Code</th>
            <th>Name</th>
            <th className="w-25">Grade</th>
          </tr>
        </thead>
        <tbody>
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
      <Col>
        <h2>Technical</h2>
      </Col>
      <Table>
        <thead className="table-secondary">
          <tr>
            <th className="w-25">Code</th>
            <th className="">Name</th>
            <th className="w-25">Grade</th>
          </tr>
        </thead>
        <tbody>
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
      <Col>
        <h2>Others</h2>
      </Col>
      <Table>
        <thead className="table-secondary">
          <tr>
            <th className="w-25">Code</th>
            <th className="">Name</th>
            <th className="w-25">Grade</th>
          </tr>
        </thead>
        <tbody>
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
    </Container>
  );
});

UniModulesSection.displayName = 'UniModulesSection';
export default UniModulesSection;
