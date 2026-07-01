import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Redefining Urban Living in Bengaluru</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          We are on a mission to eliminate brokers, hidden costs, and house-hunting stress for students and tech professionals.
        </p>
      </div>

      {/* 2. Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
            alt="Team collaboration" 
            className="rounded-lg shadow-md w-full object-cover h-96"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Born Out of the House-Hunting Struggle</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Moving to India's Silicon Valley is an exciting step, but finding a decent place to live shouldn't feel like a second job. 
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded by a group of ex-techies, NammaPG was created after experiencing the worst of local broker loops, mismatched photos, and unfair security deposit cuts. We realized the PG rental market desperately needed transparency.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we bridge the gap between verified property hosts and modern tenants, putting a reliable, completely digital booking ecosystem right at your fingertips.
          </p>
        </div>
      </div>

      {/* 3. Core Pillars / Why Us */}
      <div className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The Pillars of Our Platform</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">100% Digital Experience</h3>
              <p className="text-gray-600 text-sm">
                From 360° virtual tours to e-signing your tenancy agreements and instant token payments, handle everything right from your mobile phone.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Strict Verification</h3>
              <p className="text-gray-600 text-sm">
                No bad surprises on move-in day. Every PG on our system is physically audited for hygiene, reliable Wi-Fi, biometric safety, and meal quality.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Zero Brokerage</h3>
              <p className="text-gray-600 text-sm">
                What you see is what you pay. We deal directly with property operators to offer absolute price transparency with zero broker margins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Stats Ribbon */}
      <div className="bg-teal-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">10k+</div>
            <div className="text-sm opacity-75 mt-1">Happy Residents</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-sm opacity-75 mt-1">Verified PGs</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">15+</div>
            <div className="text-sm opacity-75 mt-1">Localities Covered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">₹0</div>
            <div className="text-sm opacity-75 mt-1">Brokerage Charged</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;