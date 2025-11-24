import { Component } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
        <Row>
          <Col>
            <Card
              onClick={() => {
                this.setState({ selected: !this.state.selected })
              }}
              className={
                'shadow border-warning overflow-hidden h-100' +
                (this.state.selected === true ? ' border-2' : ' border-0')
              }
            >
              <div className="overflow-hidden" style={{ height: 300 }}>
                <img src={this.props.imageBook} alt="Libro" className="w-100" />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate fw-bold">
                  {this.props.titleBook}
                </Card.Title>
                <Card.Text className="flex-grow-1 d-flex align-items-center">
                  <span className="fs-5">{this.props.priceBook}</span> €
                </Card.Text>
                <Button variant="warning">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {this.state.selected && (
          <Row>
            <Col>
              <h5 className="my-3">Sezione Commenti</h5>
              <CommentArea bookId={this.props.bookId} />
            </Col>
          </Row>
        )}
      </Col>
    )
  }
}

export default SingleBook
