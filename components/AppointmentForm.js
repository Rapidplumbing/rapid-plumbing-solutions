import { useState } from 'react';

const UNITS = [
  "Main Sewer Line (multiple drains affected at the same time)",
  "Kitchen Sink",
  "Washer Machine",
  "Bathroom Sink",
  "Shower",
  "Tub",
  "Floor Drain",
  "Storm Drain",
  "Toilet Only",
  "Water Line",
  "Other"
];

export default function AppointmentForm() {
  const [form, setForm] = useState({ unit: UNITS[0] });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <p className="text-green-700 font-semibold text-center">Thank you! Someone will contact you shortly to confirm how soon we can come out.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4 bg-white p-6 rounded-xl shadow">
      <input name="name" placeholder="Your Name" className="p-3 border rounded-xl" onChange={handleChange} required />
      <input name="address" placeholder="Service Address" className="p-3 border rounded-xl" onChange={handleChange} required />
      <div className="grid md:grid-cols-2 gap-3">
        <input name="email" type="email" placeholder="Your Email (optional)" className="p-3 border rounded-xl" onChange={handleChange} />
        <input name="phone" placeholder="Your Phone (optional)" className="p-3 border rounded-xl" onChange={handleChange} />
      </div>
      <select name="unit" className="p-3 border rounded-xl" value={form.unit} onChange={handleChange}>
        {UNITS.map(u => <option key={u}>{u}</option>)}
      </select>
      <input name="memo" placeholder="Short memo" className="p-3 border rounded-xl" onChange={handleChange} />
      <textarea name="description" placeholder="Brief description (optional)" className="p-3 border rounded-xl h-28" onChange={handleChange} />
      <button disabled={loading} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl">
        {loading ? 'Submitting...' : 'Submit Appointment'}
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
