"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function GTMTestComponent() {
  const handleTestEvent = () => {
    sendGTMEvent({
      event: "testEvent",
      category: "Button",
      value: "Clicked",
    });
    console.log("GTM test event sent!");
  };

  const handleCustomEvent = () => {
    sendGTMEvent({
      event: "customEvent",
      category: "User Interaction",
      action: "Button Click",
      label: "Custom Button",
      value: 1,
    });
    console.log("GTM custom event sent!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Google Tag Manager Test Component
      </h2>
      <p className="text-gray-600 mb-4">
        Click the buttons below to test GTM event tracking. Check your browser
        console and GTM debug mode for events.
      </p>

      <div className="space-y-3">
        <button
          onClick={handleTestEvent}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Test Event
        </button>

        <button
          onClick={handleCustomEvent}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Send Custom Event
        </button>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> This component only works in production mode.
          In development, GTM will not be loaded.
        </p>
      </div>
    </div>
  );
}
