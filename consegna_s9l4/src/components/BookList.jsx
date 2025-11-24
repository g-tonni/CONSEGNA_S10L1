import { Component } from 'react'
import { Row, Form, Button, Col, Container } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    search: '',
    bookId: '',
    selectedBook: '',
  }

  getBookId = (value) => {
    this.setState({ bookId: value })
  }

  selectedBook = (value) => {
    this.setState({ selectedBook: value })
  }

  render() {
    const filterBook = this.props.singleBook.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <>
        <Row>
          <Col xs={12} md={8}>
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} md={6}>
                  <Form className="d-flex w-100 justify-content-between px-4 align-items-center my-5">
                    <Form.Group
                      className="flex-grow-1 d-flex align-items-center me-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Cerca..."
                        value={this.state.search}
                        onChange={(e) => {
                          return this.setState({ search: e.target.value })
                        }}
                      />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                      CERCA
                    </Button>
                  </Form>
                </Col>
              </Row>
              <Row className="g-4">
                {filterBook.map((book) => {
                  return (
                    <SingleBook
                      key={book.asin}
                      asin={book.asin}
                      imageBook={book.img}
                      titleBook={book.title}
                      priceBook={book.price}
                      selectedBook={this.selectedBook}
                      selected={this.state.selectedBook === book.asin}
                      getBookId={this.getBookId}
                    />
                  )
                })}
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={4} className="p-0">
            <h1 className="pt-5 pb-4">Sezione commenti</h1>
            <CommentArea bookId={this.state.bookId} />
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
