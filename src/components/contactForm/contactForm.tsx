import * as React from 'react';
import { Input } from '../input/input';
import { Headline } from '../headline/headline';
import { Button } from '../button/button';

const styles = require('./contactForm.module.scss');

export class ContactForm extends React.Component {
  public render() {
    return (
      <form name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
        <input type="hidden" name="form-name" value="contact" />
        <Headline className={styles.contactFormHeadline} type="h2">
          Request your free Wakesys demo
        </Headline>
        <Input className={styles.contactFormInput} htmlForLabel="name" label="Name" type="text" placeholder="Type your name" />
        <Input className={styles.contactFormInput} htmlForLabel="website" label="Your website" type="url" placeholder="Type your name" />
        <Input className={styles.contactFormInput} htmlForLabel="email" label="E-Mail" type="email" placeholder="your@mail.com" />
        <Input className={styles.contactFormInput} htmlForLabel="phone" label="Phone or Skype" type="tel" />
        <textarea
          className={styles.contactFormTextArea}
          name="comment"
          placeholder="Tell us a bit about your park. Is it Fullsize or Two-tower? Is it already open or when are you planning to open it?"
        />
        <Button label="Send message" type="submit" />
      </form>
    );
  }
}
