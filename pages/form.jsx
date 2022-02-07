import React, { useState } from 'react';

export default function form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: true,
    drink: ""
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      agreed: true,
      drink: ""
    });
  }
  const formStyles = {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: ".75rem",
    margin: "0 auto",
    padding: "5rem",
    width: "33rem"
  };

  const inputStyles = {
    fontFamily: "inherit",
    fontSize: "1rem",
    padding: ".55rem",
    maxWidth: "23rem"
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={formStyles}>
        <input type='text'
          placeholder='First Name'
          onChange={handleChange}
          name='firstName'
          value={formData.firstName}
          style={inputStyles}
        />
        <input type='text'
          placeholder='Last Name'
          onChange={handleChange}
          name='lastName'
          value={formData.lastName}
          style={inputStyles}
        />
        <input type='text'
          placeholder='Email '
          onChange={handleChange}
          name='email'
          value={formData.email}
          style={inputStyles}
        />
        <textarea
          placeholder='Your Message goes in here.. '
          onChange={handleChange}
          name='message'
          value={formData.message}
          style={inputStyles}
        />
        <input
          type='checkbox'
          checked={formData.agreed}
          onChange={handleChange}
          name='agreed' />
        <fieldset>
          <legend>Favorite Drink</legend>

          <input
            type="radio"
            id="negroni"
            name="drink"
            value="negroni"
            checked={formData.drink === "negroni"}
            onChange={handleChange}
          />
          <label htmlFor="negroni">Negroni</label>
          <br />

          <input
            type="radio"
            id="old-fashioned"
            name="drink"
            value="old-fashioned"
            checked={formData.drink === "old-fashioned"}
            onChange={handleChange}
          />
          <label htmlFor="old-fashioned">Old Fashioned</label>
          <br />

          <input
            type="radio"
            id="manhattan"
            name="drink"
            value="manhattan"
            checked={formData.drink === "manhattan"}
            onChange={handleChange}
          />
          <label htmlFor="manhattan">Manhattan</label>
          <br />

        </fieldset>
        <button>Send Message</button>
      </form>
    </div>
  );
}
