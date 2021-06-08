import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../utils/urls';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const options = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Transgender',
      value: 'transgender',
    },
  ];

  const notify = (message) => toast(message);

  const checkError = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error('Try again later!');
    }
  };

  const onSubmit = async () => {
    console.log(firstName, lastName, gender, email);
    const data = {
      firstName,
      lastName,
      email,
      gender,
    };
    await fetch(`${url.api}user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(checkError)
      .then((data) => {
        console.log('SuccessFully 🎯');
        notify('Successfully Registered!');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
        notify('Try again later!');
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="MyModalLabel">
              Pre Book this Apartment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                className="form-control"
                id="firstName"
                placeholder="John"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="email"
                value={lastName}
                className="form-control"
                id="lastName"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                placeholder="johnDoe@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="gender">
                Gender
              </label>
              <select
                value={gender}
                className="form-select"
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                {options.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={onSubmit}
              disabled={firstName === '' || lastName === '' || email === ''}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
