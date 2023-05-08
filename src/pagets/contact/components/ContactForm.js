import React, { useRef, useState } from 'react'
import emailjs, { init } from "@emailjs/browser";

const ContactForm = () => {

    init('pfq0--zP87q0mZ8yH');

    const form = useRef();
    const refName = useRef();
    const refEmail = useRef();
    const refMessage = useRef();

    const [formStatus, setFormStatus] = React.useState('Send a Message');
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm("service_8fm0ett", "template_6pos873", form.current, "pfq0--zP87q0mZ8yH")
            .then((result) => {
                setEmailSent(true);
                setFormStatus('Message Sent');
                refName.current.value = ''
                refEmail.current.value = ''
                refMessage.current.value = ''
            }, (error) => {
                setFormStatus('Sending Error');
            });
    }

    return (
        <div className="row">
            <form onSubmit={onSubmit} ref={form} style={{ position: 'relative', padding: '0 10px' }}>
                <div className="input-field col s12">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="validate" type="text" name="name" id="name" required
                        ref={refName}
                        onInvalid={F => F.target.setCustomValidity('Enter Name Here')}
                        onInput={F => F.target.setCustomValidity('')} />
                </div>
                <div className="input-field col s12">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="validate" name="email" type="email" id="email" required
                        ref={refEmail}
                        onInvalid={F => F.target.setCustomValidity('Enter Email Here')}
                        onInput={F => F.target.setCustomValidity('')} />
                </div>
                <div className="input-field col s12">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="validate" id="message" required name='message'
                        ref={refMessage}
                        onInvalid={F => F.target.setCustomValidity('Enter Message Here')}
                        onInput={F => F.target.setCustomValidity('')}
                        style={{
                            height: '120px',
                            border: '1px solid #9e9e9e'
                        }} />
                </div>
                <button className="btn waves-effect waves-light"
                    type="submit"
                    style={{ position: 'absolute', left: 20, top: '337px' }}
                >
                    {formStatus}
                    <i className="material-icons right" style={{ color: 'white' }}>send</i>
                </button>
                {emailSent ? <span
                    style={{
                        position: 'absolute', left: 20, top: '310px', fontSize: '12px', color: 'tomato', fontWeight: 500
                    }}
                >Thank you for your message!</span> : null}
            </form>
        </div>
    )
}
export default ContactForm