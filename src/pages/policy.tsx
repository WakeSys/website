import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { Paragraph } from '../components/paragraph/paragraph';
import { AccordionFeatureListItem } from '../components/accordionFeatureListItem/accordionFeatureListItem';

export default class PrivacyPolicy extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header type={HeaderType.GREY}>
          <Headline type="h1">Privacy policy</Headline>
        </Header>
        <SectionWrapper alignment="column">
          <Headline type="h2">General</Headline>
          <Paragraph>
            At WakeSys, we place the highest importance on handling your personal data with respect and confidentiality. Accordingly,
            WakeSys adheres to all applicable data protection laws and regulations, in particular to the EU General Data Protection
            Regulation (GDPR). The following privacy policy outlines which data is collected from you and how it is handled. This policy
            applies to all WakeSys products and services. WakeSys is a service of WakeSys s.a.r.l..
            <br />
            <br />
            We would also like to note the following as regards to the usage of service providers located outside of the European Union:
            WakeSys Booking System is a service that is offered internationally. Thus, it extends not only beyond the Grand Duchy of
            Luxembourg, but also beyond the European Union. We operate worldwide and our users are scattered across this planet. We would
            prefer to use European service providers for particular services and service offerings, where such providers can deliver the
            required services at a comparable and competitive price and service level. However, we also wish to be completely transparent.
            For many of the services that we use there is simply no comparable, acceptable alternative. As a result we therefore employ the
            use of a range of service providers outside the European Union, in particular from the USA. We take steps to ensure that
            measures according to the European Data Protection law are taken and applied so as to guarantee an adequate level of data
            protection.
            <br />
            <br />
            For questions about this privacy policy, you can write to us at any time via our contact form or by mail:
            <br />
            <br />
            WakeSys s.a.r.l.
            <br />
            ATTN: Privacy
            <br />
            3, montée St. Hubert
            <br />
            L8387 Koerich
            <br />
            Luxembourg
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Your personal information</Headline>
          <Paragraph>
            WakeSys collects, processes, and uses your personal information without asking for explicit consent only when this information
            is necessary for fulfilling the terms of our contract and for billing purposes. What does this mean for you?
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">What Information is stored and how is it used?</Headline>
          <Headline type="h3">Information you provide</Headline>
          <Paragraph>
            When registering in WakeSys, it is necessary to specify:
            <ul>
              <li>An email address</li>
              <li>Your first and last name</li>
              <li>Your gender</li>
              <li>Your birthday</li>
              <li>Your address </li>
              <li>Your postal code</li>
              <li>Your city</li>
              <li>Your country</li>
              <li>Your state</li>
              <li>Your phone number</li>
              <li>A phone number of a person to contact in case of an emergency</li>
              <li>A pin</li>
              <li>A password</li>
              <li>A picture</li>
            </ul>
            Your first name, last name, birthday and gender are used to find you in the WakeSys Booking System, and identify you as the
            holder of a valid ticket and/or season pass and/or punch card. Furthermore, your first name and your last name will be displayed
            on your personal receipts and if applicable on your release of liability. This information also serves for security reasons. In
            case of an emergency on the water, we know who you are and who to contact.
            <br />
            <br />
            Your address, postal code, city, country, and state are only used to be displayed on receipts & invoices and if applicable on
            the release of liability.
            <br />
            <br />
            Your phone number is used to inform you about last minute cancellations of tickets and events.
            <br />
            <br />
            The phone number of a person in case of an emergency is only used if something has happened to you, and we need to notify a
            person close to you.
            <br />
            <br />
            The pin is used to give you an additional layer when paying with your prepaid payments.
            <br />
            <br />
            The specified email address, together with your password, will be your login credentials to login to the WakeSys Booking System.
            All passwords are stored encrypted on our servers, and do not exist in clear-text. Logging into your account allows you, at any
            time, to delete your account as well as to see which personal information is stored in WakeSys.
            <br />
            <br />
            After signing up, a member of staff will take a picture of your face, to connect you to your profile. This is necessary to
            identify you as the holder of a valid ticket and/or season pass and/or punch card, at the starting dock and/or cash register.
            <br />
            <br />
            All the above data will be stored on our server in Germany, only until you delete your WakeSys account. There is one exception
            to the above provision: For legal reasons we are required to retain billing information (first name, last name, address, postal
            code, city, country and state) and release of liability information (first name, last name, birthday, gender, address, postal
            code, city, country and state as well as, where applicable, the first name, last name and birthday of the legal guardian) for
            ten years.
            <br />
            <br />
            All information that you enter into WakeSys, will be transferred over an encrypted SSL connection (SHA-256 with RSA Encryption)
            to our server in Germany.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Minors and Children’s Privacy</Headline>
          <Paragraph>
            Protecting the privacy of young children is especially important. We are aware that children use our customer’s service and with
            that also their data is collected in WakeSys. However, autonomous sign up in WakeSys of underaged children is only allowed
            starting at the age of 16. Prior to that, the parent or legal guardian is in charge of registering the child and confirming
            consent with their signature in the name of the child. If we learn that personal data has been collected from persons under 16
            years of age and without verifiable parental consent, then we will take the appropriate steps to delete this information or
            contact the parent to register the child as a relation to their own account. If you are a parent or guardian and discover that
            your child under 16 years of age has obtained an account within WakeSys without your consent, then you may alert us at
            info@wakesys.com and request that we delete that child’s personal data from our systems.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Information on the usage of your WakeSys Booking System</Headline>
          <Paragraph>
            When you log into your WakeSys Booking System, the WakeSys server automatically collects data on how you use WakeSys in what is
            known as an activity log. The server collects information on your activity (number of sign-ins, etc.), statistical data (such as
            your browser, date and time of log in, cookie ID, and referrer URL), and your IP address for up to 3 months.
            <br />
            <br />
            Logging into your account allows you to view your full transaction history at any time.
            <br />
            <br />
            Your transaction history and activity log can be used for statistical and financial analysis, both on an individual as well as
            aggregated level, by the business owner.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Storage of cookies on your computer</Headline>
          <Paragraph>
            When you log into your WakeSys Booking System, the WakeSys server automatically collects data on how you use WakeSys in what is
            known as an activity log. The server collects information on your activity (number of sign-ins, etc.), statistical data (such as
            your browser, date and time of log in, cookie ID, and referrer URL), and your IP address for up to 3 months.
            <br />
            <br />
            Logging into your account allows you to view your full transaction history at any time.
            <br />
            <br />
            Your transaction history and activity log can be used for statistical and financial analysis, both on an individual as well as
            aggregated level, by the business owner.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Session cookies for identification</Headline>
          <Paragraph>
            When you sign into your WakeSys Booking System, WakeSys automatically sets a cookie to recognize your browser (this is called a
            session cookie). This allows you to enter your password only once per session (when you log in), without being asked repeatedly
            to do so while using WakeSys. Most browsers accept cookies by default, but it is possible to change your browser settings to
            refuse all cookies. If your browser is set to refuse all cookies, WakeSys will not function properly. You can delete cookies at
            any time, however, but will have to sign in again the next time you want to edit your WakeSys site.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Advertising and analytics cookies</Headline>
          <Paragraph>
            Third-party services are used only used on www.wakesys.com for analysis-related purposes and not in the WakeSys Booking System.
            Most browsers allow you to deactivate third-party cookies in their settings. You can also choose to deactivate third-party
            cookies by going to the Network Advertising Initiative site and following the instructions there.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Data security</Headline>
          <Paragraph>
            All personal data that is processed by WakeSys is stored on servers in Germany.
            <br />
            <br />
            We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we
            receive it. We maintain appropriate administrative, technical and physical safeguards to protect personal data against
            accidental or unlawful destruction, accidental loss, unauthorized alteration, unauthorized disclosure or access, misuse, and any
            other unlawful form of processing of the personal data in our possession. This includes, for example, firewalls, password
            protection and other access and authentication controls. We use SSL technology to encrypt data during transmission through
            public internet.
            <br />
            <br />
            However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. We cannot ensure or
            warrant the security of any information you transmit to us or store on the service, and you do so at your own risk. We also
            cannot guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical,
            technical, or managerial safeguards. If you believe your personal data has been compromised, please contact us
            (info@wakesys.com).
            <br />
            <br />
            If we learn of a security systems breach, we will inform you and the authorities of the occurrence of the breach in accordance
            with applicable law.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">WakeSys uses the following third-party services:</Headline>
          <Paragraph>
            We will not intentionally disclose any personal data or client data that we collect or store on the service to third parties
            without the consent of the applicable WakeSys user. We may disclose information to third parties if you consent to us doing so,
            as well as in the following circumstances:
            <br />
            <br />
            We work with third party service providers who provide website, application development, hosting, maintenance, and other
            services for us. These third parties may have access to, or process personal data or client data as part of providing those
            services for us. We limit the information provided to these service providers to that which is reasonably necessary for them to
            perform their functions, and our contracts with them require them to maintain the confidentiality of such information.
            <br />
            <br />
            We guarantee that we do not collect and process your data for any other purpose than stated in the paragraphs above. This
            includes that we absolutely refrain from passing on and/or selling your personal data for advertising purposes or other purposes
            not stated above.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Google Analytics</Headline>
          <Paragraph>
            www.wakesys.com uses Google Analytics, a web analysis service of Google Inc., (“Google”). Google Analytics stores cookies on
            your computer which allow you to analyze the surfing patterns of visitors to your website. The information generated by the
            cookie about your use of this website (including your IP address) will be sent to a Google server in the United States and
            stored there. Google will use this information to evaluate your use of the website, to compile reports on website activity for
            website operators and to p other website activity and internet-related services. If required by law, Google will pass along this
            information to third parties. Google will also pass along data to third parties for processing, provided this processing is done
            on behalf of Google. Under no circumstances shall Google connect your IP address with any other data held by Google. If you
            wish, you can adjust your browser settings so as to refuse cookies. Please keep in mind, however, that if you refuse all
            cookies, you will not necessarily have access to all functions of this website. By using this site, you consent to the
            processing of your data by Google as described above, for the aforementioned purpose. If you wish to prevent your IP address
            from being saved now and in the future, you can do so by installing a browser plug in available here:
            https://tools.google.com/dlpage/gaoptout?hl=en/
            <br />
            <br />
            You can find additional information on how Google handles data related to your person in its advertising network here:
            https://policies.google.com/technologies/ads
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Domain Factory</Headline>
          <Paragraph>
            Domain Factory is a provider of web hosting solutions. WakeSys uses Domain Factory to store and backup data. Find more
            information here: https://www.df.eu/int/
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Amazon Web Services</Headline>
          <Paragraph>
            Amazon Web Services is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies
            and governments, on a paid subscription basis. WakeSys uses Amazon Web Services to backup data. Find more information here:
            https://aws.amazon.com/
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Stripe</Headline>
          <Paragraph>
            Stripe is a technology company. Its software allows individuals and businesses to receive payments over the Internet. Stripe
            provides the technical, fraud prevention, and banking infrastructure required to operate on-line payment systems. WakeSys uses
            Stripe to process online payments. Find more information here: https://stripe.com/de
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">PayPal</Headline>
          <Paragraph>
            PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers
            and serves as an electronic alternative to traditional paper methods like checks and money orders. WakeSys uses PayPal to
            process online payments. Find more information here: https://www.paypal.com/uk/webapps/mpp/home
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">SendGrid</Headline>
          <Paragraph>
            SendGrid is a cloud-based email service solving the challenges of reliably delivering emails on behalf of growing companies.
            Today, SendGrid is responsible for sending billions of emails for some of the best and brightest companies in the world. WakeSys
            uses SendGrid for all email notifications. Find more information here: https://sendgrid.com/
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Log information</Headline>
          <Paragraph>
            When you visit a WakeSys Booking System (WakeSys.com, your own WakeSys site or websites of other WakeSys users), the WakeSys
            server automatically saves the information that your browser sends whenever you visit this site. The information includes your
            request, IP address, browser type and language, and the date and time of your request. The information is used solely for
            analyzing and maintaining the technical operation of the servers and network as a whole. It is automatically deleted after 3
            months.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">The communication between you and WakeSys s.a.r.l.</Headline>
          <Paragraph>
            Should you have questions, you can contact us at any time via email or on www.wakesys.com. We save your message so as to reply
            as quickly as possible, and to track and improve our support service. Your information will only be used to process your
            request.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Notification emails</Headline>
          <Paragraph>
            Our notification emails contain links and graphics to help us learn whether you actually read our notification emails. This
            allows us to improve our service and increase quality control.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Visibility and publicly accessible information</Headline>
          <Headline type="h3">Administrative access to your WakeSys Booking System</Headline>
          <Paragraph>
            WakeSys team members are authorized to access the administrative section of your WakeSys Booking System when fulfilling customer
            service requests and tracking errors. In such cases, they are able to view all parts of your WakeSys Booking System, including
            all password-protected areas. All members of our team are trained in privacy concerns and the confidentiality of data according
            to Article 5 of the German Federal Data Protection Act.
            <ul>
              <li>We will not disclose any personal data without your consent, unless:</li>
              <li>We are required by law to do so.</li>
              <li>We are obliged to do so to enforce our Terms of Use or the rights of WakeSys.</li>
              <li>
                We make use of third-party services to provide you with WakeSys products or services. In these cases, we may need to share
                information.
              </li>
            </ul>
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Your Rights</Headline>
          <Headline type="h3">Information</Headline>
          <Paragraph>
            We are happy to give you a summary of all data we have collected from you. This request for information is free of charge and
            will be processed as soon as it is received. Normally, we deliver such requests via email, but you can also request it to be
            sent via snail mail. If you want a detailed breakdown of collected data, please let us know precisely which data you would like
            to learn about. We want to make sure that you are really you and not someone pretending to be you, so we will need a copy or
            scan of your passport or driver’s license to fulfill a request for information. We only use the scan or copy to check your ID
            and respond to your request.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Correction, Deletion or Blocking</Headline>
          <Paragraph>
            In accordance with Article 16 and Article 17 of the European Union’s General Data Protection Regulation (GDPR) on the protection
            of persons with regard to the processing of personal data, you are entitled to request that any data we collect from you be
            corrected, deleted or blocked from further use in cases that fall under the terms of the article. If you want to delete your
            data stored with us, please contact us via email (info@wakesys.com) and we will process your request as soon as it is received.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Lodging a Complaint</Headline>
          <Paragraph>
            In accordance with Article 77 of the European Union’s General Data Protection Regulation (GDPR) every data subject, in our case
            every customer, shall have the right to lodge a complaint with a supervisory authority, in particular in the member state of his
            or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing
            of personal data relating to him or her infringes this regulation.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Consequences of Non-Consent or Revoked Consent</Headline>
          <Paragraph>
            If you do not consent to this privacy policy in whole or in part, now or at a later point in time, you will no longer be able to
            use our services. In this case, you are required to inform us immediately and to delete your WakeSys account at once.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h3">Changes to the Privacy Policy</Headline>
          <Paragraph>
            We may change our privacy policy from time to time. Your rights, however, will not be reduced without good reason. All changes
            to the privacy policy will be listed on this page. If the changes are significant, we will announce the change to users (in form
            of an email notification, for example).
            <br />
            <br />
            If you have questions or concerns about this privacy policy, you can contact us here or by mail at:
            <br />
            <br />
            WakeSys s.a.r.l.
            <br />
            ATTN: Privacy
            <br />
            3, montée St. Hubert
            <br />
            L8387 Koerich
            <br />
            Luxembourg
            <br />
            <br />
            (Last updated: May 4th, 2018)
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">List of integrated services</Headline>
          <AccordionFeatureListItem label="Domainfactory" infoLabel="More information">
            <Headline type="h5">Purpose:</Headline>
            <Paragraph>Server hosting</Paragraph>
            <Headline type="h5">Provider:</Headline>
            <Paragraph>domainfactory GmbH Oskar-Messter-Str. 33 85737 Ismaning Deutschland</Paragraph>
            <Headline type="h5">Privacy policy:</Headline>
            <Paragraph>https://www.df.eu/int/datenschutz/</Paragraph>
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="Google Analytics" infoLabel="More information">
            <Headline type="h5">Purpose:</Headline>
            <Paragraph>User statistics</Paragraph>
            <Headline type="h5">Provider:</Headline>
            <Paragraph>Google</Paragraph>
            <Headline type="h5">Privacy policy:</Headline>
            <Paragraph>Browser Plugin, Opt-Out https://tools.google.com/dlpage/gaoptout?hl=en/</Paragraph>
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="SendGrid" infoLabel="More information">
            <Headline type="h5">Purpose:</Headline>
            <Paragraph>Email notifications</Paragraph>
            <Headline type="h5">Provider:</Headline>
            <Paragraph>SendGrid Inc. 1801 California St #500 Denver CO 80202</Paragraph>
            <Headline type="h5">Privacy policy:</Headline>
            <Paragraph>https://sendgrid.com/policies/privacy/</Paragraph>
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="Stripe" infoLabel="More information">
            <Headline type="h5">Purpose:</Headline>
            <Paragraph>Payment processor</Paragraph>
            <Headline type="h5">Provider:</Headline>
            <Paragraph>Stripe Inc., 185 Berry Street, Suite 550, San Francisco, CA 94107, USA</Paragraph>
            <Headline type="h5">Privacy policy:</Headline>
            <Paragraph>https://stripe.com/de/privacy</Paragraph>
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="PayPal" infoLabel="More information">
            <Headline type="h5">Purpose:</Headline>
            <Paragraph>Payment processor</Paragraph>
            <Headline type="h5">Provider:</Headline>
            <Paragraph>PayPal (Europe) S.à r.l. et Cie, S.C.A. 22-24 Boulevard Royal L-2449 Luxembourg </Paragraph>
            <Headline type="h5">Privacy policy:</Headline>
            <Paragraph>https://www.paypal.com/de/webapps/mpp/ua/privacy-full</Paragraph>
          </AccordionFeatureListItem>
        </SectionWrapper>
      </BasicTemplate>
    );
  }
}
