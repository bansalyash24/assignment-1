import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Home from './Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    const [obj, setobj] = useState({
        fname: '',
        lname: '',
        username: '',
        email: ''
    })
    useEffect(() => {
      if(localStorage.getItem('data')){
        let res=JSON.parse(localStorage.getItem('data'))
        setdata([...res])
      }
    }, [])
    
    const [data, setdata] = useState([])
    const handleChange = (e) => {
        let cur = e.target
        obj[cur.name] = cur.value;
        setobj({ ...obj })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        data.push(obj)
        setdata([...data])
        localStorage.setItem('data',JSON.stringify(data))
        setobj({
            fname: '',
            lname: '',
            username: '',
            email: ''
        })
        console.log(data)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="fname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type={"text"} name='fname' onChange={handleChange} required value={obj?.fname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type={"text"} name='lname' onChange={handleChange} required value={obj?.lname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type={"email"} name='email' onChange={handleChange} required value={obj?.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type={"text"} name='username' onChange={handleChange} value={obj?.username}
                                required />
                        </Form.Group>
                        <button type='submit'>Submit</button>
                    </Form>
                </Col>
                <Col>
                    <h1>Table</h1>
                    <Home data={data} />
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;