import GTMTestComponent from "@/components/GTMTestComponent";

export const metadata = {
  title: "GTM Test Page",
  description: "Test page for Google Tag Manager integration",
};

export default function GTMTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Google Tag Manager Integration Test
        </h1>
        <GTMTestComponent />
      </div>
    </div>
  );
}
