import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Votre nom" className="w-full p-2 border rounded" required />
            <input type="email" placeholder="Votre email" className="w-full p-2 border rounded" required />
            <textarea placeholder="Votre message" className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Envoyer</button>
            {submitted && <p className="text-green-600 mt-4">Message envoyé ✅</p>}
        </form>
    );
}
