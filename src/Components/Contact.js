import React from 'react'
import "../CSS/Contact.css"
const Contact = () => {
  return (
    <div className='container mt-5 contactus'>
        <div className='contact-us'>
            <div className='page-heading'>Add Query</div>
            <div className='contact-form'>
                <form action="https://formspree.io/f/moqzdkky" method="POST" className='row justify-content-center'>
                    <div className='col-md-5 contact-form-item'>
                        <div className='contact-input'>
                            <label for="username">Name : <span className='asterix'>*</span></label>
                            <br />
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className='contact-input'>
                            <label for="useremail">Email ID : <span className='asterix'>*</span></label>
                            <br />
                            <input type="email" id="useremail" name="useremail" required />
                        </div>
                    </div>
                    <div className='col-md-5 contact-form-item'>
                        <div className='contact-input'>
                            <label for="userMessage">Message : <span className='asterix'>*</span></label>
                            <br />
                            <textarea cols="40" rows="7" id="userMessage" name="userMessage" required />
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
  )
}

export default Contact