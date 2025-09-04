
export default function TermsAndConditions({ h1 = "Terms and Conditions" }) {
  return (
    <div className="py-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 sm:py-12">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="p-6 mb-8 bg-white rounded-2xl shadow-lg sm:p-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-red-600 sm:text-4xl lg:text-5xl">
            {h1}
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-center text-gray-600 sm:text-lg">
            Welcome to Indo Global Education Foundation. By accessing or using
            our website, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                1
              </span>
              Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Your use of this website constitutes acceptance of these Terms and
              Conditions and any policies referenced herein. If you do not
              agree, please discontinue use of the site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                2
              </span>
              Eligibility
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              This website is intended for individuals seeking information about
              our programs, admissions, and services. Users are responsible for
              ensuring the accuracy of information they submit.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                3
              </span>
              Use of Content
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              All content on this website, including text, images, and graphics,
              is the property of Indo Global Education Foundation or its
              licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or modify content without
              prior written consent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                4
              </span>
              User Submissions
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Information submitted via forms (e.g., admissions, contact,
              careers) must be accurate and lawful. We may use submissions to
              contact you regarding programs and services as per our Privacy
              Policy.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                5
              </span>
              Third-Party Links
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Our website may contain links to third-party websites or services.
              We are not responsible for their content, policies, or practices.
              Access them at your own discretion.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                6
              </span>
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              While we strive for accuracy, we make no guarantees regarding the
              completeness or reliability of site content. Indo Global Education
              Foundation shall not be liable for any direct or indirect damages
              arising from the use of this website.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                7
              </span>
              Changes to Terms
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              We may update these Terms and Conditions from time to time. Any
              changes will be posted on this page with an updated effective
              date.
            </p>
          </div>

          {/* Section 8 */}
          <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 sm:p-8 hover:shadow-lg">
            <h2 className="flex items-center mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
              <span className="flex justify-center items-center mr-3 w-8 h-8 text-sm font-bold text-red-600 bg-red-100 rounded-full">
                8
              </span>
              Contact
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              For questions regarding these terms, please contact us at{" "}
              <a
                href="mailto:contact@igef.net"
                className="font-semibold text-red-600 underline transition-colors duration-200 hover:text-red-700"
              >
                contact@igef.net
              </a>
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
}
