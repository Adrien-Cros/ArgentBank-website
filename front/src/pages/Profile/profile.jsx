import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AccountSection from '../../components/Profile/AccountSection/AccountSection'
import { updateUsername } from '../../store/APIrequest/userProfileUpdate'

import './profile.css'

function Profile() {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)

  const [userNamePanelOpen, setUserNamePanel] = useState(false)
  const [userNameValue, setUserNameValue] = useState(authState.userName ?? '')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleUsernamePanel = () => {
    setUserNamePanel(!userNamePanelOpen)
    setUserNameValue(authState.userName ?? '')
    setErrorMessage(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (userNameValue === null || userNameValue === '') {
      setErrorMessage('The user name cannot be empty.')
    } else {
      dispatch(
        updateUsername({ userName: userNameValue, token: authState.token })
      )
      setUserNamePanel(!userNamePanelOpen)
      setUserNameValue(authState.userName)
      setErrorMessage(null)
    }
  }

  useEffect(() => {
    setUserNameValue(authState.userName)
  }, [authState.userName])

  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ]

  return (
    <main className="main bg-dark">
      {userNamePanelOpen === false && (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {authState.firstName} {authState.lastName}
          </h1>
        </div>
      )}

      {userNamePanelOpen === true && (
        <section className="change-username-content">
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper-edit">
              <label htmlFor="userName">User Name: </label>
              <input
                type="text"
                id="user-name"
                value={userNameValue}
                onChange={(event) => setUserNameValue(event.target.value)}
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="first-name">First Name: </label>
              <input
                disabled
                className="disabled"
                type="text"
                id="first-name"
                value={authState.firstName}
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="last-name">Last Name: </label>
              <input
                disabled
                className="disabled"
                type="text"
                id="last-name"
                value={authState.lastName}
              />
            </div>
            <div className="edit-button-container">
              <button type="submit" className="edit-button larger">
                Save
              </button>
              <button
                type="button"
                className="edit-button larger"
                onClick={handleUsernamePanel}
              >
                Cancel
              </button>
            </div>
          </form>
          {errorMessage !== null && <p>{errorMessage}</p>}
        </section>
      )}

      {userNamePanelOpen === false && (
        <button className="edit-button" onClick={handleUsernamePanel}>
          Edit Name
        </button>
      )}

      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountSection key={accounts[index].title} {...account} />
      ))}
    </main>
  )
}

export default Profile
