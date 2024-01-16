import { useSelector } from 'react-redux'
import AccountSection from '../../components/Profile/AccountSection/AccountSection'

import './profile.css'

function Profile() {
  const authState = useSelector((state) => state.auth)

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
      <div className="header">
        <h1>
          Welcome back
          <br />
          {authState.firstName} {authState.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountSection key={accounts[index].title} {...account} />
      ))}
    </main>
  )
}

export default Profile
