import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">DOSE Academy — Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: April 3, 2026</p>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">By accessing or using the DOSE Academy application and services provided by DOSE/ODISHON Corp. ("we," "our," or "us"), you — and where applicable, your parent, legal guardian, or authorized institutional partner — agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Eligibility and Parental Consent</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">DOSE Academy is designed for use by individuals between the ages of 10 and 17 ("Adolescent Users"). Use of DOSE Academy requires verifiable consent from a parent, legal guardian, school, or licensed provider ("Authorized Adult").</p>
            <p className="text-muted-foreground leading-relaxed mb-3">By registering an Adolescent User for DOSE Academy, the Authorized Adult represents and warrants that:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>They have the legal authority to consent on behalf of the Adolescent User</li>
              <li>They have reviewed these Terms and agree to them on the Adolescent User's behalf</li>
              <li>They will supervise the Adolescent User's use of DOSE Academy in accordance with these Terms</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">Adolescent Users may not register independently. All accounts must be created or approved by an Authorized Adult.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Children's Privacy and COPPA Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">DOSE Academy is committed to protecting the privacy of Adolescent Users. We comply with the Children's Online Privacy Protection Act (COPPA) and applicable state privacy laws. We do not collect personal information from users under the age of 13 without verifiable parental consent.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">For users under 13, we collect only the minimum information necessary to provide our services. Parents and guardians may review, request deletion of, or refuse further collection of their child's personal information at any time by contacting us at <a href="mailto:support@getdose.app" className="text-primary hover:underline">support@getdose.app</a>.</p>
            <p className="text-muted-foreground leading-relaxed">For a full description of what data we collect, how we use it, and how it is protected, please review our DOSE Academy Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">DOSE Academy provides cognitive tools and structured support resources designed for adolescents with ADHD, including crisis intervention frameworks, emotional regulation tools, executive function support, and peer accountability features. Services are intended to complement — not replace — support provided by parents, educators, and licensed clinical professionals.</p>
            <p className="text-muted-foreground leading-relaxed">We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Institutional and Partner Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Schools, healthcare providers, and other licensed organizations ("Partner Organizations") may access DOSE Academy on behalf of Adolescent Users under a separate partner agreement. Partner Organizations are responsible for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Obtaining appropriate consent from parents or guardians prior to Adolescent User enrollment</li>
              <li>Ensuring use of DOSE Academy complies with applicable laws, including FERPA and HIPAA where applicable</li>
              <li>Supervising Adolescent User activity within their organization's account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">All accounts must be created by an Authorized Adult or Partner Organization. Account holders agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the security of account credentials</li>
              <li>Notify us immediately of any unauthorized access at <a href="mailto:support@getdose.app" className="text-primary hover:underline">support@getdose.app</a></li>
              <li>Accept responsibility for all activities that occur under their account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Authorized Adults, Partner Organizations, and Adolescent Users agree not to use DOSE Academy to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute harmful, inappropriate, or abusive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Collect or harvest user data without consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">DOSE Academy's peer accountability features (including Squad Focus) are intended for constructive, supportive use only. Any behavior that is harassing, bullying, or harmful to other users may result in immediate account suspension.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">All content, features, and functionality of DOSE Academy, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of DOSE/ODISHON Corp. and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Subscription and Payments</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Certain features of DOSE Academy may require a paid subscription, purchased by an Authorized Adult or Partner Organization. By subscribing, the account holder agrees to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Pay all applicable fees as described at the time of purchase</li>
              <li>Authorize us to charge their payment method on a recurring basis</li>
              <li>Notify us of any changes to payment information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">Refunds are handled in accordance with our refund policy. Subscription cancellations take effect at the end of the current billing period. Adolescent Users may not independently purchase subscriptions or make in-app purchases.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure. DOSE Academy is not a medical or clinical service and should not be used as a substitute for professional mental health care, diagnosis, or treatment. If an Adolescent User is experiencing a mental health crisis, please contact a licensed professional or call <strong className="text-foreground">988</strong> (Suicide & Crisis Lifeline) immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by law, DOSE/ODISHON Corp. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to use of DOSE Academy, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">Authorized Adults and Partner Organizations agree to indemnify, defend, and hold harmless DOSE/ODISHON Corp. and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of their use of DOSE Academy or violation of these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">We reserve the right to suspend or terminate any account at any time, with or without cause, and with or without notice. Upon termination, the right to use DOSE Academy will immediately cease. Authorized Adults may also request account closure and data deletion at any time by contacting <a href="mailto:support@getdose.app" className="text-primary hover:underline">support@getdose.app</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which DOSE/ODISHON Corp. is incorporated, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">We reserve the right to modify these Terms of Service at any time. We will notify Authorized Adults of material changes by email or in-app notification, and will update the "Last updated" date above. Continued use of DOSE Academy after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">If you have any questions about these Terms of Service, or to exercise any parental or guardian rights regarding your child's data, please contact us at: <a href="mailto:support@getdose.app" className="text-primary hover:underline">support@getdose.app</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
