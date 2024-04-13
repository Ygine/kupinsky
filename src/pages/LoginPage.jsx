import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn, signOut } = useAuth();
  const [fromLoc, setFromLoc] = useState('')

  useEffect(() => {
    const fromPage = location.state?.from?.pathname || '/';
    setFromLoc(fromPage)
  }, [])

  const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const userName = form.username.value;

      console.log('event.target', form.username.value);

      signIn(userName, () => navigate(fromLoc, { replace: true}))
  }


  return (
    <>    <div className={'mb-5'}>{fromLoc || 'Login page'}</div>

      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username"/>
        </label>
        <button className={'block'} type='submit'> Login </button>
      </form>
    </>
  )
}

export default LoginPage;
