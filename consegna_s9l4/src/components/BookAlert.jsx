import Alert from 'react-bootstrap/Alert'

function BookAlert() {
  return (
    <Alert className="bg-success bg-opacity-25 text-success m-4 border-success">
      <Alert.Heading>Bentornato!</Alert.Heading>
      <p>
        Bentornato nella libreria più completa del web! Qui troverai tutti i
        migliori libri Horror
      </p>
    </Alert>
  )
}

export default BookAlert
