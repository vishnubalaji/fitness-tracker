import Button from 'react-bootstrap/Button';

const uri = 'http://localhost:5000/'
const onClick = () => {
  console.log(uri)
}

const Read = () => {
  return (
    <Button variant="outline-secondary" onClick={onClick}>Read</Button>
  )
}

export default Read
