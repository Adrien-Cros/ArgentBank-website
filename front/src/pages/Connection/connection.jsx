import Form from '../../components/Container/Form/Form'
import InputField from '../../components/Container/InputField/InputField'
import SignInButton from '../../components/Container/SignInButton/SignInButton'
import Checkbox from '../../components/Container/Checkbox/Checkbox'

import '@fortawesome/fontawesome-free/css/all.css'
import './connection.css'

function Connection() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form onSubmit={() => console.log('Form submitted correctly')}>
          <InputField label="Username" type="text" id="username" />
          <InputField label="Password" type="password" id="password" />
          <Checkbox id="remember-me" label="Remember me" />
          <SignInButton to="/dashboard">Sign In</SignInButton>
        </Form>
      </section>
    </main>
  )
}

export default Connection
