import { Outlet } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SearchBox } from "./components/SearchBox";
import './scss/main.scss';

export function App() {
  return (
    <Container fluid>
      <SearchBox />
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
