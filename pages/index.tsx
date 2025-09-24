import Form from "../components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 text-gray-100">
      <div className="w-full max-w-md p-6 rounded-2xl bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">
          Discord Link Processor
        </h1>
        <Form />
      </div>
    </main>
  );
}
