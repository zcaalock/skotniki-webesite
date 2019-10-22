import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { loginUser } from '../actions/users'
import { editState } from '../actions/appState'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  componentDidMount(){
    localStorage.removeItem("state")
    this.props.editState('Admin panel', 'activeItem')
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors })
    }
  }  

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.loginUser(userData, this.props.history);
    
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCredentialError(){
    if(this.state.errors.general) 
     return <Message
     error
     header='Wrong Credentials'
     content='Wrong email or password please try again'
   />
  }

    
  render() {
    //console.log('login state: ', this.state)
    const { errors } = this.state;
    
    return (
      <div>
        
        <div className='login'>
          <Form error onSubmit={this.handleSubmit} >
            <Form.Input
              id="email"
              name="email"
              type="email"
              label="Email"
              //helperText={errors.email}
              //error={errors.email ? true : false}
              error={errors.email ? errors.email : false}
              fluid
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Input
              id="password"
              name="password"
              type="password"
              label="Password"
              //helperText={errors.password}
              error={errors.password ? errors.password : false}
              fluid
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.handleCredentialError()}
            <Button
              type="submit"              
            >
              Login
        </Button>
          </Form>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    UI: state.UI
  }
}

export default connect(mapStateToProps, { loginUser, editState })(Login)