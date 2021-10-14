import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import {login} from '../actions/userActions.js'
import FormContainer from '../components/FormContainer.js'

const LoginScreen = ({location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newError, setnewError] = useState('')
    const [checkError, setcheckError] = useState(false)
    
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const {loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        debugger; 
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()    
        dispatch(login(email, password))
        // if(email && password){
        
        // }
        // else{
        //     setcheckError(true)
        //     setnewError("Please Input credentials")
        // }
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>} 
            {/* {checkError && <Message variant='danger'>{newError}</Message>} */}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' name="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' varient='primary'>Sign In</Button>
            </Form>

            <Row className='py-3'>
                <Col>New Customer?{' '}<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
