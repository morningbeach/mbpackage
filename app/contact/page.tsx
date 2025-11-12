export default function Contact(){
  return (
    <div className="max-w-2xl py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-4">Contact / Request a Quote</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" className="w-full rounded-xl border border-hair px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" className="w-full rounded-xl border border-hair px-3 py-2" placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" className="w-full rounded-xl border border-hair px-3 py-2" rows={5} placeholder="Tell us about your project..." />
        </div>
        <button className="rounded-full bg-brand text-white px-5 py-2.5 shadow-soft" type="submit">Send</button>
      </form>
      <p className="text-sm opacity-70 mt-4">This is a static form. Hook it to your CRM or an API route later.</p>
    </div>
  )
}
