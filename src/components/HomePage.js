import React from 'react'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import Stack from 'react-bootstrap/Stack';

const HomePage = () => {
  return (
    <Stack gap={2} className="col-md-1 mx-auto">
    <Create />
    <Read />
    <Update />
    <Delete />
    </Stack>
  )
}

export default HomePage
