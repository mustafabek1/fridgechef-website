import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light-bg to-white dark:from-dark-bg dark:to-dark-card">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl md:text-8xl mb-6 animate-float">
            🍳
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
            Turn Your Fridge Into Delicious Meals
          </h1>
          <p className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary mb-8 animate-slide-up">
            FridgeChef uses AI to transform your available ingredients into personalized recipes.
            Simply snap a photo or enter ingredients manually to discover what you can cook today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="#download"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Download App
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-light-card dark:bg-dark-card border-2 border-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Smart Cooking Made <span className="text-primary">Simple</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Photo Recognition</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Snap a photo of your fridge and our AI will identify all ingredients instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">AI-Powered Recipes</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Get personalized recipe suggestions based on your ingredients and dietary preferences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Fitness Goals</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Customize recipes to match your fitness goals: lose weight, gain muscle, or maintain.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold mb-3 text-success">Dietary Filters</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Filter recipes for vegetarian, vegan, keto, gluten-free, and more dietary needs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-3 text-info">Step-by-Step</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Follow easy step-by-step instructions with cooking mode for a seamless experience.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-warning">Shopping List</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary">
                Automatically create shopping lists for missing ingredients from any recipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-light-bg to-white dark:from-dark-bg dark:to-dark-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            How It <span className="text-primary">Works</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Take a Photo or Enter Ingredients</h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  Open the app and either snap a photo of your fridge or manually enter the ingredients you have available.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">AI Analyzes & Suggests</h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  Our AI powered by Google Gemini instantly analyzes your ingredients and suggests 3-5 creative recipes tailored to your preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-dark-text rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Start Cooking!</h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  Choose a recipe and follow the step-by-step instructions in cooking mode. Missing ingredients? Add them to your shopping list!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary mb-12 max-w-2xl mx-auto">
            Download FridgeChef now and never wonder what's for dinner again!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
