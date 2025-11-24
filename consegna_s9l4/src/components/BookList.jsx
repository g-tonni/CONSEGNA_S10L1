import { Component } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends Component {
  state = {
    search: '',
  }

  render() {
    const filterBook = this.props.singleBook.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <>
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
        <Row className="g-4 px-4">
          {filterBook.map((book) => {
            return (
              <SingleBook
                key={book.asin}
                imageBook={book.img}
                titleBook={book.title}
                priceBook={book.price}
                bookId={book.asin}
              />
            )
          })}
        </Row>
      </>
    )
  }
}

export default BookList
