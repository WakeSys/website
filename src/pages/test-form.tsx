import React from 'react';
import { Input } from '../components/input/input';

const TestForm: React.FunctionComponent = () => {
  return (
    <form name="test-contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="test-contact" />

      <Input htmlForLabel="name" label="Name" type="text" placeholder="Type your name" name="name" />
      <Input htmlForLabel="website" label="Your website" type="url" placeholder="Type your name" name="website" />
      <Input htmlForLabel="email" label="E-Mail" type="email" placeholder="your@mail.com" name="email" />
      <Input htmlForLabel="phone" label="Phone or Skype" type="text" name="phone" />
      <textarea
        name="message"
        placeholder="Tell us a bit about your park. Is it Fullsize or Two-tower? Is it already open or when are you planning to open it?"
      />
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  );
};

export default TestForm;
