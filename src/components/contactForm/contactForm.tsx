import * as React from 'react';
import { Input } from '../input/input';
import { Headline } from '../headline/headline';
import { Button } from '../button/button';

const styles = require('./contactForm.module.scss');

export class ContactForm extends React.Component {
  public render() {
    return (
      <form name="contact" method="POST" data-netlify="true" className={styles.contactForm} action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <Headline className={styles.contactFormHeadline} type="h3">
          <strong>Request your free Wakesys demo</strong>
        </Headline>
        <Input className={styles.contactFormInput} htmlForLabel="name" label="Name" type="text" placeholder="Type your name" name="name"/>
        <Input className={styles.contactFormInput} htmlForLabel="website" label="Your website" type="url" placeholder="Type your name" name="website"/>
        <Input className={styles.contactFormInput} htmlForLabel="email" label="E-Mail" type="email" placeholder="your@mail.com" name="email"/>
        <Input className={styles.contactFormInput} htmlForLabel="phone" label="Phone or Skype" type="tel" name="phone"/>
        <textarea
          className={styles.contactFormTextArea}
          name="message"
          placeholder="Tell us a bit about your park. Is it Fullsize or Two-tower? Is it already open or when are you planning to open it?"
        />
        <p className={styles.hidden}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <Button label="Send message" type="submit" buttonType="primary" />
      </form>
    );
  }
}
