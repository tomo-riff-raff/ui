import React, { useContext, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { gql, useQuery } from '@apollo/client'
import { UserContext } from '../../UserContext'
import { Button, Form } from 'semantic-ui-react'

export const AUTHENTICATE = gql`
  query authenticate(
    $email: String! 
    $password: String!
  ) {
    authenticate(
        email: $email
        password: $password
      ){
        id email username
      }
  }
`

const LoginForm = () => {
  const [errors, setErrors] = useState({})
  const {user, setUser } = useContext(UserContext);
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value})
  }

  const {loading, error, data } = useQuery(AUTHENTICATE, {
    variables: values
  })

  const onSubmit = (event) => {
    // event.preventDefault()
    setUser(data && data.authenticate)
  }

  return (
    <form>
      <Form.Input
        label="email:"
        placeholder="email"
        name="email"
        type="email"
        value={values.email}
        onChange={onChange}
      />
      <Form.Input
        label="password:"
        placeholder="password"
        name="password"
        type="password"
        value={values.password}
        onChange={onChange}
      />
      <br></br>
      <Form.Button type="submit" primary onClick={onSubmit}>Log In</Form.Button>

      { user ? (
          <Redirect to="/dashboard" />
       ) : (
        error ? (
          <p>Your email/password combination was incorrect</p>
        ) : (<p></p>)
       )
      }

      <div class="register-link">
        <Link to="/register">New to Tomo? Register Here</Link>
      </div>
    </form>
  );
}

export default LoginForm