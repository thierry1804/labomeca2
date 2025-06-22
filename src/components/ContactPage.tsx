import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-gray-950 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch">
                {/* Coordonnées à gauche */}
                <div className="flex-1 flex flex-col justify-center text-white md:pr-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#F67122]">Nos coordonnées</h2>
                    <div className="space-y-8 mb-10">
                        <div className="flex items-start gap-5">
                            <MapPin className="w-8 h-8 text-[#F67122] mt-1" />
                            <div>
                                <div className="font-bold text-lg mb-1 text-[#F67122]">ADRESSE :</div>
                                <div className="text-gray-200 leading-relaxed">
                                    Lot 30 Andrefantsena<br />Talatamaty Antananarivo,<br />101 Madagascar
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <Phone className="w-8 h-8 text-[#F67122] mt-1" />
                            <div>
                                <div className="font-bold text-lg mb-1 text-[#F67122]">TELEPHONE :</div>
                                <div className="text-gray-200">(+261) 20 76 441 54/57</div>
                                <div className="text-gray-200">(+261) 32 07 251 32</div>
                                <div className="text-gray-200">(+261) 32 05 440 02</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <Mail className="w-8 h-8 text-[#F67122] mt-1" />
                            <div>
                                <div className="font-bold text-lg mb-1 text-[#F67122]">EMAIL :</div>
                                <div className="text-gray-200">Via notre formulaire ci-contre.</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="LABOMECA Map"
                            src="https://www.google.com/maps/embed/v1/place?q=Lot+30+Andrefantsena+Talatamaty+Antananarivo,+101+Madagascar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            width="100%"
                            height="220"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* Formulaire à droite */}
                <div className="flex-1 bg-[#F67122] rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-center text-black max-w-xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Contactez-Nous</h1>
                    <div className="w-20 h-1 bg-black rounded mb-8" />
                    <p className="mb-8 text-lg text-black/80">
                        L'union entre les idées et le résultat final est le savoir-faire de LABOMECA.
                    </p>
                    <form className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block font-semibold mb-1">Prénom <span className="text-white">*</span></label>
                                <input type="text" name="prenom" required className="w-full rounded-md px-4 py-2 border border-orange-200 focus:border-white bg-white text-black placeholder:text-gray-400 outline-none" placeholder="Votre prénom" />
                            </div>
                            <div className="flex-1">
                                <label className="block font-semibold mb-1">Nom <span className="text-white">*</span></label>
                                <input type="text" name="nom" required className="w-full rounded-md px-4 py-2 border border-orange-200 focus:border-white bg-white text-black placeholder:text-gray-400 outline-none" placeholder="Votre nom" />
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Email <span className="text-white">*</span></label>
                            <input type="email" name="email" required className="w-full rounded-md px-4 py-2 border border-orange-200 focus:border-white bg-white text-black placeholder:text-gray-400 outline-none" placeholder="Votre email" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Message <span className="text-white">*</span></label>
                            <textarea name="message" rows={5} required className="w-full rounded-md px-4 py-2 border border-orange-200 focus:border-white bg-white text-black placeholder:text-gray-400 outline-none" placeholder="Votre message" />
                        </div>
                        <button type="submit" className="mt-2 bg-black text-[#F67122] font-bold rounded-md px-8 py-3 shadow hover:bg-orange-100 transition-colors text-lg">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 