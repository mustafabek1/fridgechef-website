import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - FridgeChef',
  description: 'Privacy Policy and Data Protection for FridgeChef app',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <Header />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text">
            Privacy Policy
          </h1>
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-8">
            Last updated: December 3, 2025
          </p>

          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 md:p-12 shadow-lg space-y-8 text-light-text dark:text-dark-text">
            {/* Introduction */}
            <section>
              <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                FridgeChef ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                📋 Information We Collect
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                    <li><strong>Account Information:</strong> When you create an account, we collect your email address and password (encrypted)</li>
                    <li><strong>Profile Information:</strong> Optional profile details such as dietary preferences and fitness goals</li>
                    <li><strong>Ingredient Data:</strong> Ingredients you enter manually or captured through photos</li>
                    <li><strong>Recipe History:</strong> Recipes you view, save, or cook</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Information Collected Automatically</h3>
                  <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                    <li><strong>Usage Data:</strong> How you interact with the app, features used, and time spent</li>
                    <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                    <li><strong>Log Data:</strong> App crashes, errors, and performance metrics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Photos and Camera Access</h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    When you use the photo feature, we temporarily process photos to identify ingredients using AI.
                    <strong> Photos are NOT stored permanently</strong> and are only used for real-time ingredient recognition.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🎯 How We Use Your Information
              </h2>

              <ul className="list-disc list-inside space-y-3 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                <li>Provide and maintain the FridgeChef service</li>
                <li>Generate personalized recipe recommendations using AI</li>
                <li>Improve and optimize app performance and features</li>
                <li>Send you updates, notifications, and support messages</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues or security threats</li>
              </ul>
            </section>

            {/* AI and Third-Party Services */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🤖 AI and Third-Party Services
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google Gemini AI</h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    We use Google Gemini AI (via OpenRouter) to analyze ingredients and generate recipe suggestions.
                    Your ingredient data is sent to this service for processing but is not stored by Google Gemini for
                    training purposes. Please review{' '}
                    <a
                      href="https://ai.google.dev/gemini-api/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google's AI Terms
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Supabase</h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    We use Supabase for authentication and database services. All data is encrypted in transit and at rest.
                    Review{' '}
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Supabase's Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🔒 Data Sharing and Disclosure
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                We do not sell your personal information. We may share your information only in these circumstances:
              </p>

              <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service providers:</strong> Third-party services that help us operate the app (AI, database, analytics)</li>
                <li><strong>Legal requirements:</strong> If required by law or to protect rights and safety</li>
                <li><strong>Business transfers:</strong> In case of merger, acquisition, or asset sale (you will be notified)</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🛡️ Data Security
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>

              <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                <li>All data transmission uses HTTPS encryption</li>
                <li>Passwords are hashed using industry-standard algorithms</li>
                <li>Database access is restricted and monitored</li>
                <li>Regular security audits and updates</li>
                <li>Photos are processed in real-time and not permanently stored</li>
              </ul>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mt-4 italic">
                However, no method of transmission over the Internet is 100% secure. While we strive to protect your
                information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                ✅ Your Rights and Choices
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                You have the following rights regarding your personal data:
              </p>

              <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data portability:</strong> Export your data in a common format</li>
                <li><strong>Guest mode:</strong> Use the app without creating an account</li>
              </ul>

              <div className="mt-6 p-4 bg-primary bg-opacity-10 rounded-lg border-l-4 border-primary">
                <p className="text-light-text dark:text-dark-text">
                  <strong>To exercise your rights:</strong> Contact us at{' '}
                  <a
                    href="mailto:privacy@fridgechef.app"
                    className="text-primary hover:underline font-semibold"
                  >
                    privacy@fridgechef.app
                  </a>
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                👶 Children's Privacy
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                FridgeChef is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately at{' '}
                <a
                  href="mailto:privacy@fridgechef.app"
                  className="text-primary hover:underline"
                >
                  privacy@fridgechef.app
                </a>
                .
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                📅 Data Retention
              </h2>

              <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary ml-4">
                <li><strong>Account data:</strong> Retained until you delete your account</li>
                <li><strong>Recipe history:</strong> Retained as long as your account is active</li>
                <li><strong>Photos:</strong> Processed in real-time and immediately discarded (not stored)</li>
                <li><strong>Usage logs:</strong> Retained for up to 90 days for analytics and debugging</li>
                <li><strong>Deleted accounts:</strong> All associated data is permanently deleted within 30 days</li>
              </ul>
            </section>

            {/* International Users */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🌍 International Data Transfers
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Your information may be transferred to and processed in countries other than your own. These countries
                may have different data protection laws. By using FridgeChef, you consent to the transfer of your
                information to our facilities and service providers globally.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                🔄 Changes to This Privacy Policy
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We will also notify you via email
                or in-app notification if the changes are significant.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                📧 Contact Us
              </h2>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-light-cardBg dark:bg-dark-cardBg p-6 rounded-xl space-y-2">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:privacy@fridgechef.app"
                    className="text-primary hover:underline"
                  >
                    privacy@fridgechef.app
                  </a>
                </p>
                <p>
                  <strong>Support:</strong>{' '}
                  <a
                    href="mailto:support@fridgechef.app"
                    className="text-primary hover:underline"
                  >
                    support@fridgechef.app
                  </a>
                </p>
              </div>
            </section>

            {/* Consent */}
            <section className="pt-8 border-t border-light-border dark:border-dark-border">
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                By using FridgeChef, you acknowledge that you have read and understood this Privacy Policy and agree
                to its terms.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
