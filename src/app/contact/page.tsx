export default function Contact() {
  return (
    <section className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form
        action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full border rounded p-2"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            required
            className="w-full border rounded p-2"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full border rounded p-2"
            rows={5}
            placeholder="How can I help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
