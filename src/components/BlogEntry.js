import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import BlogContent from './BlogContent';
import {useRef} from 'react'
import {nanoid} from 'nanoid'


function BlogEntry(){
  
  const titleRef= useRef()
  const contentRef= useRef()
  
  const [content, setContent] =useState([{}])


  function handleAddContent(e){
    e.preventDefault()
    setContent([...content,
      {
      id: nanoid(),
      title: titleRef.current.value,
      content: contentRef.current.value
      }
    ])
    titleRef.current.value =''
    contentRef.current.value =''
  }
  
  function handleDelete(id){
      const newContent =content.filter((content)=>{
        return (content.id !== id)
      })

      setContent(newContent)
  }
  
  return (
    <>
        <Container className='p-3' 
        style={{width:"50%",
        border:"solid 1px #e6e6e6",
        borderRadius:"5px",
        boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Post Title</Form.Label>
              <Form.Control ref={titleRef} type="email from-control-sm" placeholder="Enter Post Title" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Post Content</Form.Label>
              <Form.Control ref={contentRef} as="textarea" rows={3} placeholder="Your Post..." required />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={handleAddContent}>Add</Button>
        </Form>
        
      </Container>
      <div className='mt-3 p-3 overflow-auto' 
      style={{width:"53%",
      margin:"auto",
      borderRadius:"5px",
      height:"50vh",
      boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      {
          content.map((content)=>{
            return <BlogContent  id ={content.id} title={content.title} content={content.content} handleDelete={handleDelete}/>
          })
        }
      
      </div>
    </>
  )
} 

export default BlogEntry;