function Form({ onSubmit, children }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Logique à rajouter après
    if (onSubmit) {
      onSubmit()
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
