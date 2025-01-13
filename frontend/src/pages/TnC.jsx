
import './TnC.css';  

function TermsAndConditions () {
  return (
    <div className="tnc-container">
      <h1>Terms and Conditions for MovieVault</h1>
      <p className="effective-date"><strong>Effective Date:</strong> [13 Janaury 2024]</p>

      <section>
        <h2>1. Use of the App</h2>
        <p>
          You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the App, including its features, data, and content provided from external sources like TheMovieDB (TMDb), solely for personal, non-commercial purposes.
        </p>
      </section>

      <section>
        <h2>2. Content and Data</h2>
        <p>
          Our App integrates data from TheMovieDB API, which includes movie listings, descriptions, images, ratings, and other metadata. This content is provided for informational purposes only, and we make no representations or warranties regarding the accuracy, completeness, or reliability of such data.
        </p>
        <ul>
          <li>The data accessed through the App is subject to TheMovieDB's own terms and conditions and privacy policies.</li>
          <li>We are not responsible for the accuracy or availability of any third-party data or services.</li>
        </ul>
      </section>

      <section>
        <h2>3. Search and Filter Features</h2>
        <p>
          Our App offers users a search feature to explore and filter movies based on various criteria, such as title, genre, release date, and rating. While we strive to offer an enhanced and user-friendly experience, we cannot guarantee that the search results will always reflect the most current or complete information due to the nature of external data.
        </p>
      </section>

      <section>
        <h2>4. User Account and Responsibilities</h2>
        <h3>Account Creation</h3>
        <p>
          Some features may require you to create an account. You agree to provide accurate and complete information when creating an account and to keep your account details secure.
        </p>
        <h3>User Conduct</h3>
        <p>
          You agree not to misuse or abuse the App, including but not limited to violating any laws, engaging in fraudulent activities, or disrupting the App's operation.
        </p>
      </section>

      <section>
        <h2>5. Prohibited Uses</h2>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use the App in any manner that could damage, disable, overburden, or impair the App or interfere with other users' enjoyment.</li>
          <li>Use automated systems or bots to extract data from the App.</li>
        </ul>
      </section>

      <section>
        <h2>6. Privacy Policy</h2>
        <p>
          We value your privacy. Our use and handling of personal data is governed by our  Privacy Policy, which explains how we collect, use, and protect your information.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p>
          All content, features, and functionality of the App, including but not limited to the design, text, graphics, logos, icons, images, and software, are owned by us or our licensors and are protected by intellectual property laws.
        </p>
        <p>
          <strong>TheMovieDB Content:</strong> The data provided by TheMovieDB API remains the property of TMDb. You may not use, copy, or distribute TMDb data without proper attribution and permission where necessary.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          We do not guarantee the uninterrupted or error-free operation of the App. You use the App at your own risk, and we are not responsible for any damages, losses, or issues arising from the use of our App or any third-party services linked to it.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the App at any time, without notice, for any reason, including but not limited to violations of these Terms.
        </p>
      </section>

      <section>
        <h2>10. Modifications</h2>
        <p>
          We may modify, update, or remove features of the App at our discretion. We will update this document to reflect any significant changes. We encourage you to review the Terms periodically.
        </p>
      </section>

      <section>
        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [South Africa (ECTA)], without regard to its conflict of law principles.  
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          For any questions or concerns about these Terms and Conditions, please contact us at:
        </p>
        <ul>
          <li>Email: katisodev@gmail.com</li>
          {/*<li>Website: <a href=""></a></li>*/}
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
