import { Component } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
  }

  getComments = function () {
    const commentsURL =
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId
    fetch(commentsURL, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        console.log(data)

        this.setState({
          comments: data,
          loading: false,
        })
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        this.setState({
          loading: false,
        })
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <Row>
        {this.state.loading && (
          <div className="text-center">
            <Spinner animation="border" variant="warning"></Spinner>
          </div>
        )}
        <CommentList commentArr={this.state.comments} />
        <AddComment bookId={this.props.bookId} />
      </Row>
    )
  }
}

export default CommentArea
