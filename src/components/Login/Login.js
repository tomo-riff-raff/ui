import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { gql, useQuery } from '@apollo/client'
import { UserContext } from '../../UserContext'
import { Button, Form } from 'semantic-ui-react'

export const AUTHENTICATE = gql`
  query authenticate(
    $email: String! 
    $password: String!
  ) {
    authenticate(
      authenticateInput: {
        email: $email
        password: $password
      }
      ){
        id email username
      }
  }
`

const LoginForm = () => {
  const {user, setUser } = useContext(UserContext);
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value})
  }

  const [authenticate, {loading, error, data }] = useQuery(AUTHENTICATE, {
    update(proxy, result) {
      console.log(result)
    },
    variables: values
  })

  const onSubmit = (event) => {
    event.preventDefault()
    setUser(values)
  }

  return (
    <form onSubmit={onSubmit}>
      <Form.Input
        label="email"
        placeholder="email"
        name="email"
        type="email"
        value={values.email}
        onChange={onChange}
      />
      <Form.Input
        label="password"
        placeholder="password"
        name="password"
        type="password"
        value={values.password}
        onChange={onChange}
      />
      <Button type="submit" primary>
        {/* onClick={() => {
          setUser(data)

          {user ? (
            <p>Your email/password combination was incorrect</p>
          ) : (
            <p>Welcome, {user.username}</p>
          )}
        }} */}
        Log In
      </Button>
    </form>
  );
}

export default LoginForm