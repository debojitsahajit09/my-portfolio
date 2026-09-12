"use client";

import React, { useState } from "react";
import { site } from "@/data/site";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageSquare,
  Globe,
  BookOpen,
  Send,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Contact Form Submission: ${formData.category || 'General Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <main className="section min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="wrap">
        <div className="eyebrow mb-4 text-emerald-500 font-semibold uppercase tracking-wider">
          07 / Contact
        </div>
        
        <h1 className="title text-4xl md:text-5xl font-bold mb-4">
          {site.contact.title || "Get In Touch."}
        </h1>
        <p className="text text-lg text-muted-foreground mb-12 max-w-2xl">
          {site.contact.text || "Feel free to reach out for collaborations, research inquiries, or just a friendly chat."}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Phone / WA */}
            <div className="flex items-start gap-4 p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phone / WhatsApp</h3>
                <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-emerald-500 transition-colors">
                  (+880) 1700-000000
                </a>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-4 p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</h3>
                <div className="flex flex-col gap-1">
                  {site.email && (
                    <a href={`mailto:${site.email}`} className="text-base font-semibold hover:text-emerald-500 transition-colors">
                      {site.email}
                    </a>
                  )}
                  <a href="mailto:debojitsahajit@gmail.com" className="text-sm hover:text-emerald-500 transition-colors">
                    debojitsahajit@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Address</h3>
                <p className="text-base font-semibold">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Connect With Me - All Social & Academic Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Connect With Me:</h3>
              <div className="flex flex-wrap gap-3">
                {site.social?.github && (
                  <a href={site.social.github} target="_blank" rel="noreferrer" title="GitHub" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                    <Github size={18} />
                  </a>
                )}
                {site.social?.linkedin && (
                  <a href={site.social.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                    <Linkedin size={18} />
                  </a>
                )}
                {site.social?.facebook && (
                  <a href={site.social.facebook} target="_blank" rel="noreferrer" title="Facebook" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                    <Facebook size={18} />
                  </a>
                )}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  <Youtube size={18} />
                </a>
                <a href="https://orcid.org" target="_blank" rel="noreferrer" title="ORCID" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all font-bold text-xs flex items-center justify-center w-[44px] h-[44px]">
                  iD
                </a>
                <a href="https://researchgate.net" target="_blank" rel="noreferrer" title="ResearchGate" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  <BookOpen size={18} />
                </a>
                <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" title="WhatsApp" className="p-3 rounded-full border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Share Your Thoughts Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-emerald-500">
              Share your thoughts..!
            </h2>
            <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
              Is there something you love? Something you loathe? Or maybe you just want to tell me about your project. I will be happy to listen! Drop your thoughts and let's make things awesome together.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <select
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Robotics / Hardware Design">Robotics / Hardware Design</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Type your message here."
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
