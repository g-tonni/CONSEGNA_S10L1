import { Component } from 'react'
import { Button } from 'react-bootstrap'

class SingleComment extends Component {
  deleteComment = function () {
    const commentsURL =
      'https://striveschool-api.herokuapp.com/api/comments/' +
      this.props.commentId

    fetch(commentsURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          alert('COMMENTO ELIMINATO CON SUCCESSO!')
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  render() {
    return (
      <div className="d-flex align-items-center border border-1 border-terziary justify-content-between p-2 rounded-2 mb-1">
        <div className="me-2">
          {this.props.comment} | {this.props.rate}/5
        </div>
        <Button
          className="p-1"
          variant="danger"
          onClick={() => {
            this.deleteComment()
          }}
        >
          ELIMINA
        </Button>
      </div>
    )
  }
}

export default SingleComment
