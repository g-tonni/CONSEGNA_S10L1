import { Component } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    commentPost: {
      comment: '',
      rate: '1',
      elementId: this.props.bookId,
    },
  }

  putComments = () => {
    const commentsURL = 'https://striveschool-api.herokuapp.com/api/comments/'

    fetch(commentsURL, {
      method: 'POST',
      body: JSON.stringify(this.state.commentPost),
      headers: {
        'Content-Type': 'application/json', // metodi POST e PUT
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          alert('COMMENTO PUBBLICATO CON SUCCESSO!')
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.setState({
        commentPost: {
          ...this.state.commentPost,
          elementId: this.props.bookId,
        },
      })
    }
  }

  render() {
    return (
      <Col xs={12} className="mt-3">
        <Form
          onSubmit={(e) => {
            e.preventDefault()

            this.putComments()

            this.setState({
              commentPost: {
                comment: '',
                rate: '1',
                elementId: this.props.bookId,
              },
            })
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Inserisci un Commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.commentPost.comment}
              onChange={(e) => {
                this.setState({
                  commentPost: {
                    ...this.state.commentPost,
                    comment: e.target.value,
                  },
                })
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lascia un punteggio (da 1 a 5)</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.commentPost.rate}
              onChange={(e) => {
                this.setState({
                  commentPost: {
                    ...this.state.commentPost,
                    rate: e.target.value,
                  },
                })
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="warning" type="submit">
            INVIA COMMENTO
          </Button>
        </Form>
      </Col>
    )
  }
}

export default AddComment
