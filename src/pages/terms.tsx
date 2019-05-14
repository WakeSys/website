import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { Paragraph } from '../components/paragraph/paragraph';

export default class TermsOfService extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header type={HeaderType.GREY}>
          <Headline type="h1">Terms of service</Headline>
        </Header>
        <SectionWrapper alignment="column">
          <Headline type="h2">1. General</Headline>
          <Paragraph>
            1.1. WakeSys is a service provided by WakeSys s.a.r.l. (hereinafter referred to as Service Provider). By registering with
            WakeSys as user, you (hereinafter referred to as WakeSys User) accept these Terms of Service (hereinafter referred to as TOS)
            pertaining to the use of WakeSys.
            <br />
            <br />
            1.2. The Service Provider reserves the right to complement, extend, change, discontinue or improve services offered, in
            particular where such measures will improve the technological standard of the services or are deemed necessary for preventing
            abuse. Such modifications may lead to changes in the appearance of WakeSys. The Service Provider will only make such
            modifications if they are reasonable and acceptable for the WakeSys User or if their implementation is required by law.
            <br />
            <br />
            1.3. Furthermore, the Service Provider may, with the consent of the WakeSys User, amend the contract with the WakeSys User as
            well as these Terms of Service. Consent to the amendment shall be deemed as given if the WakeSys User does not object to the
            amendments within one month after receipt of the amendment notice. In the amendment notice the Service Provider will inform the
            WakeSys User of the consequences of his failing to lodge an objection.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">2. Object of the contract, amendment of the contract</Headline>
          <Paragraph>
            2.1. WakeSys provides an online service allowing WakeSys Users to create their online booking and management solution (referred
            as WakeSys Booking System). The services allow WakeSys Users to adapt the design of their own WakeSys Booking System, to create
            and manage the site’s content, and to operate an online booking and management solution. WakeSys offers different versions of
            this service: (a) a feature limited WakeSys Booking System (referred to below as "WakeSys Free Trial") and (b) more
            comprehensive WakeSys Booking System versions which are subject to a fee (referred to below as "WakeSys for two-tower cable
            parks" and “WakeSys for full-size cable parks”). For updated specifications for these versions please visit
            http://www.wakesys.com
            <br />
            <br />
            2.2. All services provided by the Service Provider free of charge may be discontinued at any time. In such a case the User will
            not be entitled to claim the continuation of this type of service.
            <br />
            <br />
            2.3. Users of paid WakeSys plans (WakeSys for two-tower cable parks and WakeSys for full-size cable parks) agree that the
            invoice for the service will be sent electronically (via email). The invoice is valid without a signature.
            <br />
            <br />
            2.4. In the event that the WakeSys Free Trial User fails to log onto his WakeSys Booking System within 180 days, the Service
            Provider may delete the WakeSys Booking System and its contents permanently and suspend all access to WakeSys by the User.
            <br />
            <br />
            2.5. WakeSys Free Trial Pages may contain advertisements. The WakeSys User is not permitted to edit, remove, or conceal any
            advertisements.
            <br />
            <br />
            2.6. The WakeSys Booking System of WakeSys Users are published under a sub-domain (e.g. https://username.wakesys.com). WakeSys
            Users are not permitted to redirect an externally hosted domain to their WakeSys Booking System or to display the WakeSys
            Booking System on an external Website (e.g. integration via frame or Iframe).
            <br />
            <br />
            2.7. The Service Provider reserves the right to make use of the services of third parties in providing services.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">3. Personal Data</Headline>
          <Paragraph>
            3.1. The WakeSys User confirms that all the personal data provided is true and complete. The WakeSys User hereby agrees to the
            recording and electronic storage of this data by the Service Provider. The Service Provider will not transfer the data to third
            parties unless the WakeSys User expressly agrees to this or the transfer is necessary to fulfill the services (for example,
            sharing of data for domain registration with the domain registrar). The WakeSys User undertakes to keep the personal data
            updated. In order to prevent abuse by unauthorized third parties, the WakeSys User is under an obligation to keep the login data
            confidential.
          </Paragraph>
        </SectionWrapper>

        <SectionWrapper alignment="column">
          <Headline type="h2">4. Contract Length & Termination, Service Termination, Refund of Subscription Fees</Headline>
          <Paragraph>
            4.1 WakeSys Free Trial can be deleted by the User at any time by sending an email to billing@wakesys.com
            <br />
            <br />
            4.2 Unless otherwise stipulated in the subscription description, the duration of WakeSys for two-tower cable parks and WakeSys
            for full-size cable parks contracts is 12 months, and renews for this same period of time unless the User terminates the
            subscription one month before the subscription ends. To cancel via email (billing@wakesys.com), the cancellation request must be
            sent from the contact email address on file for the WakeSys Booking System. The cancellation request must also contain the
            registered user name and date of termination.
            <br />
            <br />
            4.3. The Service Provider may terminate the contracts with the User unilaterally and without stating reasons by giving at least
            one month’s notice. In such a case the Service Provider will refund any fees paid by the User in advance on a pro rata basis.
            The Service Provider reserves the right to terminate the contract without notice in case the WakeSys User fails to fulfill his
            contractual obligations (see section 5). Further, a breach of contractual duties may lead to civil or criminal action. In such a
            case any fees paid in advance on a pro rata basis will not be refunded.
            <br />
            <br />
            4.4. The Service Provider further reserves the right to remove the WakeSys Booking System and block access to WakeSys by the
            User in case fees are not paid. In such a case the Service Provider will inform the WakeSys User accordingly. Furthermore, in
            such a case, the Service Provider is furthermore entitled to delete (“CLOSE”) the user’s domain(s). By accepting these Terms of
            Service, the user grants WakeSys the explicit right to this type of termination.
            <br />
            <br />
            4.5. Termination of optional services in addition to WakeSys for two-tower cable parks or WakeSys for full-size cable parks will
            not affect the overall contractual relationship.
            <br />
            <br />
            4.6. Upon termination of the contractual relationship the Service Provider will have no obligation to perform contractually
            agreed services. Accordingly, the Provider may delete any of the WakeSys Users data on the server, including all the accounting
            data. Transferring the data related to the Users WakeSys Booking System to the server of a third-party provider will not be
            possible. It is therefore the WakeSys Users own responsibility to store and back up the data in due time. In addition, the
            Service Provider may, upon termination of the contract, have any of the WakeSys Users domains which have not been transferred to
            a new provider deleted by the relevant organization for allocation of domain names (CLOSE).
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">5. General obligations of the WakeSys User</Headline>
          <Paragraph>
            5.1. The User is responsible for any contents provided or stored by him on his WakeSys Booking System. The Service Provider is
            under no obligation to inspect the WakeSys Booking System of the WakeSys Users with regard to violations of law.
            <br />
            <br />
            5.2. The user is responsible for complying with all laws for their jurisdiction, as well as the regulations of the Grand Duchy
            of Luxembourg. This also applies explicitly to any additional legal regulations regarding operation of a store.
            <br />
            <br />
            5.3. The User undertakes not to take any actions that may infringe or violate the rights of third parties (including their
            personality rights) when using the WakeSys services.
            <br />
            <br />
            5.4. The User undertakes not to provide any contents which are legally prohibited or contra bonos mores (in particular
            pornographic, racist, xenophobic, extremist or any other reprehensible contents) or may infringe the rights of third parties (in
            particular trademarks, rights to bear a name and copyrights). In the event of claims due to illegal content which the User has
            placed on a WakeSys site, the User agrees to indemnify and hold WakeSys harmless from any claim or demand. The user also agrees
            to assist WakeSys in every manner in responding to and in defense of such claims.
            <br />
            <br />
            5.5. The WakeSys User undertakes to observe all legal requirements pertaining to the provision of contact details or any
            equivalent legislation in the country of use.
            <br />
            <br />
            5.6. The WakeSys User is under an obligation to regularly back up all data files and software settings to which he has access.
            In all cases the WakeSys User is required to take appropriate data backup measures before making changes to his WakeSys Booking
            System and, provided that the Service Provider has notified the User in due time, before maintenance work is carried out by the
            Service Provider. Under no circumstances may backup copies be saved on WakeSys’s servers.
            <br />
            <br />
            5.7. The WakeSys User is prohibited from sending large numbers of emails with the same content without the consent of the
            recipients (spam) via systems or servers of the Service Provider.
            <br />
            <br />
            5.8. The WakeSys User will use the designs provided by WakeSys exclusively for his WakeSys Booking System. The WakeSys User is
            expressly prohibited from storing the WakeSys Booking System and transferring it to and using it on an external server.
            <br />
            <br />
            5.9. Any default of payment of an amount owed by the WakeSys User authorizes the Service Provider to suspend access to the
            Wakesys services immediately and to refuse access to the WakeSys User’s data, until full payment.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">6. Domain Name Registration, Domain Name Cancellation, and Change of Registrar</Headline>
          <Paragraph>
            6.1. Some of the service packages include an optional domain name. For the purpose of procuring and/or maintaining domains, the
            Service Provider will act only as the agent between the WakeSys User and the organization responsible for domain name allocation
            (registrar). Top-level domains (e.g. .COM, .US) are predominantly managed by a large number of different organizations, mostly
            at the national level. Each of these organizations has its own terms and conditions pertaining to the registration and
            management of domain names. The registration terms and conditions of the relevant domain registrar will therefore apply
            complementarily to these Terms of Use. Accordingly, the respective allocating organizations terms and conditions will apply in
            the same way. On request the Service Provider will send a copy of such terms and conditions to the WakeSys User. Alternatively
            they may be accessed online from the respective allocating organization.
            <br />
            <br />
            6.2. The WakeSys User is in particular responsible for providing correct and complete data regarding the domain name holder
            (registrant) and the administrative contact (admin-C) when registering the domain name. The technical contact in all cases will
            be WakeSys s.a.r.l.. Irrespective of the relevant registration terms and conditions, such data must include the name of the
            domain name holder, an physical mailing address (PO boxes or anonymous addresses are not permissible), a valid email address and
            telephone number. If this information changes, the WakeSys User must immediately inform the Service Provider of this change by
            updating it online.
            <br />
            <br />
            6.3. Upon formation of the contract, the Service Provider will make the option available to register the desired domain name
            with the responsible registrar. The Service Provider may defer activation of a domain name until payment of the agreed fees for
            the registration services has been received. The Service Provider is in no position to influence the allocation of the domain
            name by the relevant organization. The Service Provider can neither guarantee that the requested domain names will be allocated
            to the WakeSys User and/or that allocated domain names are free of third-party rights nor guarantee their continued existence.
            Any information given by the Service Provider regarding the availability of a domain name is based on the data provided by third
            parties and only refers to the time that information is requested. The domain will not be deemed as allocated before
            registration of the domain in the name of the WakeSys User and its entry in the database of the registrar.
            <br />
            <br />
            6.4. Before applying for a domain name, the WakeSys User will check that the domain name does not violate the rights of any
            third party or contravene existing legislation. The WakeSys User affirms that he has fulfilled this obligation and that during
            this check there was no indication for such infringement or violation.
            <br />
            <br />
            6.5. Any changes to the requested domain name after registration with the relevant registrar are precluded. In case that during
            the time needed for forwarding the domain name request to the registrar, the domain name has already been allocated otherwise,
            the WakeSys User will be entitled to choose a different domain name. This will not apply if, in case of a change of providers,
            the previous provider declines this change. In such a case the WakeSys User will make the required arrangements for the release
            of the domain name by the previous provider or apply for a further domain name through the Service Provider for an additional
            fee. Should certain domain names have been cancelled by the WakeSys User or due to binding decisions in domain name disputes,
            the WakeSys User will not be entitled to apply for a free substitute domain name.
            <br />
            <br />
            6.6. Subject to these TOS and those of the relevant allocating organization, the WakeSys User may transfer all domain names
            registered through the Service Provider to another registrar, provided that the new registrar offers the corresponding top-level
            domain name (e.g. .COM, .DE) and, as circumstances require and based on technical requirements, supports the change in
            registrar. The service contract will remain unaffected by such a change in provider. However, the User is required to provide
            notice of cancellation. All declarations concerning the domain name, in particular any domain name cancellation, change of
            registrars, and deletion of a domain name must be made in writing. Should the Service Provider, due to failure on the part of
            the WakeSys User or the new registrar to make timely arrangements or because the conditions for the change have not been met, be
            unable to grant the change of registrars (domain transfer) to the WakeSys User’s new registrar, the Service Provider is
            expressly entitled to have the cancelled domain name deleted (CLOSE) by the relevant allocating organization after the
            cancellation date has lapsed. The Service Provider reserves the right to allow domain transfers only if the WakeSys User has
            settled all undisputed pending claims with the Provider.
            <br />
            <br />
            6.7. The WakeSys User must notify the Service Provider immediately should he lose the rights to a domain name registered on his
            behalf.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">7. Service Disruption</Headline>
          <Paragraph>
            7.1. The Service Provider will endeavor to ensure that the services are available and function properly at all times. The User
            acknowledges, however, that for technical reasons as well as due to the Service Provider's dependence on external factors, e.g.
            telecommunications networks, the uninterrupted availability of individual WakeSys Booking System cannot be guaranteed. The
            WakeSys User can therefore not assert a claim for continual access to the WakeSys Booking System. Access restrictions of only a
            temporary nature shall not constitute grounds for warranty claims nor a right to extraordinary termination. In addition to the
            possible access restrictions due to circumstances beyond the Service Providers control, the Service Provider also reserves the
            right to impose temporal and/or complete access restrictions, particularly where the WakeSys Booking System is temporarily
            disabled for the purpose of installing technical improvements or eliminating errors and defects, etc.
            <br />
            <br />
            7.2. In order to ensure the proper operability of the WakeSys Booking System editing function, a number of system requirements
            are required. A list of these requirements is available here. The Service Provider is not liable for disruptions caused by
            different system configurations.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">8. Liability</Headline>
          <Paragraph>
            8.1. The Service Provider is not liable for loss of data by the User or for unauthorized access to personal user data by
            third-parties (e.g. hackers).
            <br />
            <br />
            8.2. The Service Provider also cannot be held liable for misuse by third parties of data and information made available to them
            by the Users themselves.
            <br />
            <br />
            8.3. The Service Provider shall not be liable for any activities of or contents posted by the Users.
            <br />
            <br />
            8.4. The Service Provider cannot be held liable for lost revenue or other damages arising from malfunction or unavailability of
            the WakeSys systems. Excepting injury to life, limb, or health, WakeSys s.a.r.l. is not liable for other damage claims. This
            exclusion does not apply to damages resulting from gross negligence on the part of WakeSys s.a.r.l. or deliberate or gross
            negligence of WakeSys s.a.r.l.’s legal representatives or agents.
            <br />
            <br />
            8.5. The Service Provider cannot be held liable for any indirect or unforeseeable damages resulting hereof. By express agreement
            between the parties, and without this list being exhaustive, is considered indirect prejudice any financial or commercial loss,
            loss of profit, loss of production, data, control, or customer, damage to the image and / or reputation, and any action, claim
            for personal injury or any demand for reimbursement against the WakeSys User by a third party.
            <br />
            <br />
            8.6. Any liability on the part of the Service Provider or affiliated providers will be limited to the equivalent amount of a
            yearly user fee.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">9. Data Protection</Headline>
          <Paragraph>
            9.1. The Service Provider will collect, process and use personal data concerning the WakeSys Users. For further information
            regarding the Service Providers data processing and data protection policies, visit our privacy statement.
            <br />
            <br />
            9.2. The WakeSys User is aware of the fact that from a technical point of view the Service Provider is able to view any of the
            data saved on the WakeSys server and that there is a theoretical possibility that the WakeSys Users data may be accessed by
            unauthorized third-parties when transmitting the data over the Internet.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">10. Cancellation Policy</Headline>
          <Paragraph>
            10.1 The User may cancel his agreement to this service contract in writing (for example, by letter, fax, or email) without
            stating any reasons within 7 days. This period begins at the day of conclusion of the contract , in accordance withArticles 53
            to 55 of the law of 14 August 2000 on electronic commerce Timely submission of the cancellation notification is sufficient to
            ensure cancellation. Cancellation notices should be sent to billing@wakesys.com or
            <br />
            <br />
            WakeSys s.a.r.l.
            <br />
            3, montée St. Hubert
            <br />
            L8387 Koerich
            <br />
            Luxembourg.
            <br />
            <br />
            <br />
            Cancellation Effects In the event of a valid cancellation, any services received by either party are to be returned and any
            benefits accrued (e.g. Interest) issued. If you are unable to release the rendered service either in full or in party or only in
            deteriorated condition, you may be liable for compensation. This may mean that you need to fulfill the contractually obligated
            payments for the time period. Refunds and reimbursements must be paid within 30 days. The period begins for you with submission
            of the cancellation notice, and for WakeSys with its receipt.
            <br />
            <br />
            Special Notes: Your right to cancellation expires if the contract has been fulfilled to the explicit satisfaction of both
            parties before you exercise your right to cancel.
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">11. Final Provisions</Headline>
          <Paragraph>
            11.1. Should any individual provision of this contract be or become void, the validity of the remaining provisions shall remain
            unaffected. As required by 33, Para. 1 of the Federal Data Protection Act (BDSG) and 4 of the Teleservice Data Protection
            Ordinance (Teledienst Datenschutz-Verordung), notice is herewith given that data of users will be computer processed in
            machine-readable form.
            <br />
            <br />
            11.2. Protection of personal data. Definitions. The User shall in an express and clear way, give its consent and approval for
            the processing of personal data by the Service Provider. By virtue of the law of 2 August 2002 regarding the protection of
            persons with regard to the processing of personal data (hereinafter called the « Law of 2 August 2002 »), the processing
            includes any operations or set of operations carried out or not through automatic proceedings on data as for instance
            collecting, recording, organizing, safekeeping, adapting or modifying, extracting, consulting, using, communicating by
            transmission, distributing or any other form of putting at disposal, linking and interconnecting as well as blocking, deleting
            and destroying such data.
            <br />
            <br />
            This processing is necessary for the execution of pre-contractual measures taken at the request of the User and the execution of
            agreements, which the User has signed. It is also necessary to comply with a legal obligation imposed on the Service Provider.
            <br />
            <br />
            Processing purpose and methods. The User declares to have been informed that the Service provider will determine the purpose and
            methods of processing. Processing of personal data is deemed to be part of an archiving system with the Service Provider in
            order to allow it to provide the services requested to the User and to comply with its legal obligations. Unless otherwise
            instructed or in case the communication of personal data is required by legal provisions, the Service Provider shall not
            communicate any personal data to third parties. The User is free to answer or not to the questions asked, the absence of an
            answer however constitutes an obstacle preventing the Service Provider to enter or continue its relationship with the User.
            <br />
            <br />
            Safeguard of data. The User declares to have been informed by the Service Provider that personal data of the User will be kept
            for the period of time required by the applicable regulatory and legal provisions.
            <br />
            <br />
            Right to access data. The User declares to have been informed by the Service Provider about the existence of a right to access
            data regarding the User and to request the modification thereof. Upon request to be submitted to the Service Provider, the User
            or its beneficiaries proving a legitimate interest may receive free of charge, at reasonable intervals and in reasonable time,
            access to such data, the confirmation that such data relate to the User or will not be processed as well as information about
            the purpose of such processing the categories of data which are concerned and the recipient or categories of recipients to which
            data is communicated, the communication in intelligible form of data subject to such processing as well as any information
            available regarding the origin of data and the knowledge of the logic underlying any authorized processing of data regarding the
            User. The Service Provider may however limit or delay the exercise of the access right of the User if such measure is necessary
            for the safekeeping of the State security, defence, public security, prevention, research, acknowledgment and pursuit of
            criminal offences inclusive the fight against money laundering or other legal procedures in accordance with article 8, paragraph
            (1), and article 17 of the Law of 2 August 2002, an important economic or financial interest of the State or the European Union
            inclusive in the monetary, budget or tax field, the protection of the person concerned or rights and freedoms of others, freedom
            of expression and if such exceptional measure is taken in accordance with article 28, paragraph (4) of the Law of 2 August 2002,
            as well as a mission of control, inspection and regulation, even on an occasional basis, taken by the a public authority in the
            cases provided above.
            <br />
            <br />
            Right to oppose to processing. The User declares to have been informed that it has the right to oppose at any time for
            prevailing and legitimate reasons with regard to its particular situation, to such data processing unless in case such
            processing is expressly provided by legal provisions. In case of a justified opposition, the processing carried out by the
            Service Provider may not cover such data.
            <br />
            <br />
            11.3. These TOS and the contract shall be governed by the laws of the Grand-Duchy of Luxembourg. This shall also apply in case
            the User registers from another country. The place of jurisdiction is the location of the Service Provider’s registered office,
            without prejudice of the right for the Service Provider to pursue the User in any other location where he is resident,
            established or has assets
            <br />
            <br />
            (Last updated: April 4th, 2013)
          </Paragraph>
        </SectionWrapper>
      </BasicTemplate>
    );
  }
}
