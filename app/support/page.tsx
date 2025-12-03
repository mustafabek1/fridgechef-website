import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Support - FridgeChef',
  description: 'Get help and support for FridgeChef app',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <Header />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-light-text dark:text-dark-text">
            Support Center
          </h1>

          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
            {/* Contact Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                📧 Contact Us
              </h2>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                Need help? We're here for you! Reach out to our support team:
              </p>
              <div className="bg-light-cardBg dark:bg-dark-cardBg p-6 rounded-xl">
                <p className="text-lg">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:support@fridgechef.app"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    support@fridgechef.app
                  </a>
                </p>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-2">
                  We typically respond within 24 hours
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                ❓ Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    How does FridgeChef work?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    FridgeChef uses advanced AI technology powered by Google Gemini to analyze photos of your fridge or manually entered ingredients.
                    It then generates personalized recipe suggestions based on what you have available, your dietary preferences, and fitness goals.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    Yes! We take your privacy seriously. Photos are only used for ingredient recognition and are not stored permanently.
                    All data is encrypted and stored securely. Check our{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    Can I use the app without signing up?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    Absolutely! You can use FridgeChef as a guest without creating an account. However, creating an account allows you to
                    save your recipe history, preferences, and shopping lists across devices.
                  </p>
                </div>

                <div className="border-l-4 border-success pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    What dietary preferences are supported?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    FridgeChef supports a wide range of dietary preferences including Vegetarian, Vegan, Keto, Gluten-Free, Dairy-Free,
                    and Low-Carb. You can select multiple filters to find recipes that match your needs.
                  </p>
                </div>

                <div className="border-l-4 border-info pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    How many recipes does FridgeChef suggest?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    For each query, FridgeChef provides 3-5 creative recipe suggestions. Each recipe includes detailed ingredients list,
                    step-by-step instructions, prep time, calories, and difficulty level.
                  </p>
                </div>

                <div className="border-l-4 border-warning pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    What are daily tokens?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    Tokens are query credits that reset daily. Free users get a limited number of daily tokens.
                    Each photo query uses 1 token, while manual ingredient entry uses 0.5 tokens. Premium users get more tokens or unlimited access.
                  </p>
                </div>

                <div className="border-l-4 border-error pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    The app isn't recognizing my ingredients correctly
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    For best results, make sure photos are well-lit and ingredients are clearly visible. You can also use the manual input
                    feature to enter ingredients directly. If issues persist, please contact our support team.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-bold mb-2">
                    How do I delete my account?
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    You can delete your account and all associated data from the Profile section in the app.
                    Go to Profile → Account Settings → Delete Account. This action is permanent and cannot be undone.
                  </p>
                </div>
              </div>
            </section>

            {/* Platform Support */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                📱 Platform Support
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light-cardBg dark:bg-dark-cardBg p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    iOS
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
                    Requires iOS 14.0 or later
                  </p>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
                    Compatible with iPhone and iPad
                  </p>
                </div>

                <div className="bg-light-cardBg dark:bg-dark-cardBg p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Android
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
                    Requires Android 8.0 or later
                  </p>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
                    Compatible with most Android devices
                  </p>
                </div>
              </div>
            </section>

            {/* Feature Requests */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                💡 Feature Requests
              </h2>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                Have an idea to make FridgeChef better? We'd love to hear from you! Send your feature requests and suggestions to:
              </p>
              <a
                href="mailto:feedback@fridgechef.app"
                className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
              >
                Share Your Ideas
              </a>
            </section>

            {/* Report Bug */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-error">
                🐛 Report a Bug
              </h2>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                Found a bug? Help us improve by reporting it:
              </p>
              <a
                href="mailto:bugs@fridgechef.app"
                className="inline-block px-6 py-3 bg-error hover:opacity-90 text-white font-semibold rounded-lg transition-opacity"
              >
                Report Bug
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
