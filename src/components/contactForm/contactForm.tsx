import * as React from 'react';
import { Input } from '../input/input';
import { Headline } from '../headline/headline';
import { Button } from '../button/button';

const styles = require('./contactForm.module.scss');

export class ContactForm extends React.Component {
  public render() {
    return (
      <form name="wakesys-contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="test-contact" />

        <Input htmlForLabel="name" label="Name" type="text" placeholder="Type your name" name="name" />
        <Input htmlForLabel="website" label="Your website" type="url" placeholder="Type your name" name="website" />
        <Input htmlForLabel="email" label="E-Mail" type="email" placeholder="your@mail.com" name="email" />
        <Input htmlForLabel="phone" label="Phone or Skype" type="text" name="phone" />
        <textarea
          className={styles.contactFormTextArea}
          name="message"
          placeholder="Tell us a bit about your park. Is it Fullsize or Two-tower? Is it already open or when are you planning to open it?"
        />
        <div className="actions">
          <Button label="Send message" type="submit" buttonType="primary" />
        </div>
      </form>
    );
  }
}
