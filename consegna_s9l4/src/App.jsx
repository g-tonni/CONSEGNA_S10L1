import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import BookAlert from './components/BookAlert'
import BookNav from './components/BookNav'
import BookFooter from './components/BookFooter'
import BookList from './components/BookList'
import books from './books/horror.json'

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column min-vh-100">
      {/* HEADER */}
      <Row>
        <Col>
          <BookNav />
        </Col>
      </Row>

      {/* MAIN */}
      <Row className="flex-grow-1">
        <Col xs={12}>
          <BookAlert />
        </Col>
        <Col>
          <BookList singleBook={books} />
        </Col>
      </Row>

      {/* FOOTER */}
      <Row>
        <Col>
          <BookFooter />
        </Col>
      </Row>
    </Container>
  )
}

export default App
