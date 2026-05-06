'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Clock, Award, Target, Building2, Stethoscope } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">DO</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight uppercase">Clinical</span>
          </div>

          <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#approach" className="hover:text-blue-600 transition-colors">Approach</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <a
            href="mailto:contact@doclinical.com"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden">
        {/* Subtle background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[140px] opacity-70 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Boutique Healthcare Staffing</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
                Precision in <br />
                <span className="italic text-blue-600">Clinical Placement.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
                A boutique partner for healthcare facilities and credentialed
                professionals. We focus on quality matches, not volume.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 text-center"
                >
                  Partner With Us
                </a>
                <a
                  href="mailto:contact@doclinical.com"
                  className="flex items-center justify-center space-x-2 text-slate-900 px-10 py-5 font-bold hover:text-blue-600 transition-colors"
                >
                  <span>Direct Inquiry</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div
              className="lg:col-span-5 relative reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional Healthcare Collaboration"
                  width={600}
                  height={550}
                  className="w-full h-[550px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'Credentialed Professionals' },
              { value: 'National', label: 'Provider Network' },
              { value: '24hr', label: 'Average Response Time' },
              { value: 'Boutique', label: 'White-Glove Service' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
            <div className="reveal">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
                Clinical Excellence <br />by Design.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                DO Clinical serves as a specialized bridge between high-acuity
                facilities and the nation&apos;s most respected providers.
              </p>
            </div>
            <div className="reveal lg:text-right" style={{ transitionDelay: '100ms' }}>
              <div className="inline-block text-left bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-blue-600 font-black text-4xl mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest font-black text-slate-400">
                  Credentialed Professionals
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 reveal group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Locum Tenens</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                Strategic temporary staffing to maintain continuity of care
                during transitions or peak demand.
              </p>
            </div>

            <div
              className="bg-slate-900 p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-8">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Permanent Placement</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                Identifying clinical leaders who align with your facility&apos;s
                long-term culture and mission.
              </p>
            </div>

            <div
              className="bg-blue-600 p-12 rounded-[2.5rem] reveal hover:bg-blue-700 transition-colors duration-300"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-8">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Workforce Strategy</h3>
              <p className="text-blue-100 leading-relaxed text-sm font-medium">
                Consultative approach to staffing mix and recruitment lifecycle
                optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              Who We Serve
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Built for both sides <br />of the relationship.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] reveal">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Building2 size={24} className="text-white" />
              </div>
              <p className="text-blue-400 uppercase tracking-widest text-[10px] font-black mb-3">
                For Facilities
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                Close critical vacancies without compromise.
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>Vetted, credentialed candidates delivered within days</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>Locum and permanent options for any timeline</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>A single point of contact who knows your culture</span>
                </li>
              </ul>
              <a
                href="mailto:contact@doclinical.com?subject=Facility+Inquiry"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-500 transition-colors"
              >
                Inquire as a Facility →
              </a>
            </div>

            <div
              className="bg-blue-600 text-white p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                <Stethoscope size={24} className="text-white" />
              </div>
              <p className="text-blue-200 uppercase tracking-widest text-[10px] font-black mb-3">
                For Providers
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                Find roles that match your clinical ambition.
              </h3>
              <ul className="space-y-3 text-blue-100 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Access to exclusive locum and permanent opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Dedicated support through credentialing and onboarding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Transparent compensation and negotiation guidance</span>
                </li>
              </ul>
              <a
                href="mailto:contact@doclinical.com?subject=Provider+Inquiry"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Inquire as a Provider →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000"
                alt="Physician Specialist"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div
            className="lg:col-span-7 reveal"
            style={{ transitionDelay: '150ms' }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              The DO Distinction
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tighter">
              A personal approach to professional placement.
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Unlike massive agencies, DO Clinical operates with agility and
              deep industry specialization. We don&apos;t just fill slots; we build
              clinical teams that improve patient outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Direct Agent Support</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Work with one dedicated lead who understands your clinical
                  niche and requirements.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>National Network</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Access to a curated pool of top-tier physicians, advanced
                  practitioners, and allied health staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-12 tracking-tighter italic">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you&apos;re a facility with an urgent vacancy or a provider
              exploring your next role, we&apos;re ready to assist.
            </p>

            <a
              href="mailto:contact@doclinical.com"
              className="group inline-flex flex-col items-center space-y-2"
            >
              <span className="text-slate-500 uppercase tracking-widest text-[10px] font-black group-hover:text-blue-500 transition-colors">
                Inquiries
              </span>
              <span className="text-2xl md:text-5xl font-bold tracking-tight group-hover:text-blue-400 transition-all duration-300">
                contact@doclinical.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">DO</span>
              </div>
              <span className="font-bold text-sm tracking-tight uppercase">Clinical</span>
            </div>

            <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
              <a href="#approach" className="hover:text-blue-600 transition-colors">Approach</a>
              <a href="mailto:contact@doclinical.com" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              © {new Date().getFullYear()} DO Clinical Services. Precision Employment.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
