import React from 'react'
import { Button, Card } from 'react-bootstrap'

function BlogContent({id, title, content, handleDelete}) {

    if(title)return (
    <Card className='mt-1 '>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                    <h4>{title}</h4>
                    <Button variant="danger" onClick={()=>{handleDelete(id)}} >X</Button>
                </Card.Title>
                <Card.Text className='p-2 text-muted' max="200">
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
  )
}

export default BlogContent