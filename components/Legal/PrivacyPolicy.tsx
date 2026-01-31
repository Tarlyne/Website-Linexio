'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { PageTransition } from '../Layout/PageTransition';
import { ChevronLeft, Shield, Info, UserCheck, Scale, Building2, Lock, Globe, FileText, BarChart3 } from 'lucide-react';
import { ObfuscatedEmail } from '../ui/ObfuscatedEmail';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Datenschutz & Transparenz
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Datenschutzerklärung</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Sicherheit ist kein Feature, sondern das Fundament von Linexio. Wir nutzen moderne Technologien, um sicherzustellen, dass Ihre Daten dort bleiben, wo sie hingehören: In Ihren Händen.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12 text-slate-300">

          {/* Sektion: Verantwortlicher */}
          <section className="bg-dark-800/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-400" /> Verantwortliche Stelle
            </h2>
            <p className="text-sm mb-4">Verantwortlich für die Datenverarbeitung auf dieser Webseite im Sinne der DSGVO ist:</p>
            <div className="text-slate-200 not-italic">
              <p className="font-bold text-white">Torben Böhm</p>
              <p>Gollacker 14</p>
              <p>35708 Haiger</p>
              <div className="mt-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 mr-1">E-Mail:</span>
                <ObfuscatedEmail variant="text" className="text-sm" />
              </div>
            </div>
          </section>

          {/* Sektion: Kernkonzept */}
          <section className="bg-brand-950/20 border border-brand-500/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Shield className="w-12 h-12 text-brand-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-400" /> "Privacy by Design"
            </h2>
            <p className="text-lg">
              Linexio ist eine <strong>Offline-First Anwendung</strong>. Das bedeutet: Sensible Schülerdaten werden ausschließlich <strong>lokal auf Ihrem Endgerät</strong> verarbeitet. Wir haben technisch keine Möglichkeit, diese Daten einzusehen, zu speichern oder zu übertragen.
            </p>
          </section>

          {/* Sektion: SSL & Sicherheit */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-400" /> 1. Datensicherheit (Verschlüsselung)
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* Sektion: Website-Besuch & Hosting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-brand-400" /> 2. Hosting & Server-Log-Files
            </h2>
            <p className="mb-4">
              Um die Web-App technisch bereitzustellen, nutzen wir Hosting-Dienste (z. B. GitHub Pages). Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-4 text-sm">
              Diese Daten sind nicht bestimmten Personen zuordbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der störungsfreien Bereitstellung der Webseite).
            </p>
          </section>

          {/* Sektion: Web-Analyse (Privacy-First) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-brand-400" /> 3. Web-Analyse (Cloudflare Web Analytics)
            </h2>
            <p className="mb-4">
              Um die Nutzung unserer Marketingseite besser zu verstehen und das Angebot für Lehrkräfte zu optimieren, nutzen wir den Analysedienst "Cloudflare Web Analytics".
            </p>
            <div className="p-5 rounded-xl bg-brand-900/10 border border-brand-500/20">
              <p className="text-sm leading-relaxed mb-3">
                Im Gegensatz zu herkömmlichen Analysetools ist Cloudflare Web Analytics konsequent auf Datenschutz ausgelegt:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li>Es werden <strong>keine Cookies</strong> auf Ihrem Endgerät gespeichert.</li>
                <li>Es findet <strong>kein Tracking</strong> über verschiedene Webseiten hinweg statt.</li>
                <li>Es werden <strong>keine personenbezogenen Daten</strong> erhoben oder Profile erstellt.</li>
                <li>Die IP-Adressen werden unmittelbar anonymisiert.</li>
              </ul>
            </div>
            <p className="mt-4 text-sm">
              Die Erhebung dient ausschließlich statistischen Zwecken (z.B. wie viele Besucher die Seite aufrufen). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Optimierung der Website-Struktur).
            </p>
          </section>

          {/* Sektion: Die App (PWA) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Info className="w-6 h-6 text-brand-400" /> 4. Lokale Datennutzung (PWA-Technologie)
            </h2>
            <p className="mb-4">
              Linexio nutzt moderne Browser-Technologien (IndexedDB / LocalStorage), um Daten direkt auf Ihrem Endgerät zu speichern.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dies ermöglicht die Nutzung ohne Internetverbindung (Offline-Modus).</li>
              <li>Ihre Schülerdaten verlassen niemals Ihr Gerät.</li>
              <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. § 25 Abs. 2 Nr. 2 TTDSG.</li>
            </ul>
          </section>

          {/* Sektion: WICHTIG für Schulleitungen / AVV */}
          <section className="p-6 rounded-2xl border-2 border-brand-500/30 bg-brand-900/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-brand-400" /> 5. Hinweis für Schulleitungen (AVV)
            </h2>
            <p className="mb-4 italic text-brand-200">
              Warum für Linexio kein Auftragsverarbeitungsvertrag (AVV) erforderlich ist:
            </p>
            <p className="text-sm leading-relaxed">
              Ein AVV nach Art. 28 DSGVO ist nur dann notwendig, wenn wir als Betreiber Zugriff auf die Daten hätten oder diese auf unseren Systemen verarbeiten würden. Da Linexio eine reine Offline-Anwendung ist, findet keine Übermittlung personenbezogener Daten an uns statt. Die datenschutzrechtliche Verantwortung für die auf dem iPad gespeicherten Daten verbleibt vollständig bei der Lehrkraft bzw. der Schule.
            </p>
          </section>

          {/* Sektion: Betroffenenrechte */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-brand-400" /> 6. Ihre Rechte als Betroffene(r)
            </h2>
            <p className="mb-6">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (DSGVO) jederzeit folgende Rechte:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Auskunftsrecht", text: "Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO).", icon: FileText },
                { title: "Berichtigung", text: "Sie können unrichtige Daten jederzeit selbst in der App korrigieren (Art. 16 DSGVO).", icon: UserCheck },
                { title: "Löschung", text: "Sie können Ihre Daten modular oder vollständig selbst löschen (Art. 17 DSGVO).", icon: Scale },
                { title: "Datenübertragbarkeit", text: "Exportieren Sie Ihre Daten als PDF zur eigenen Dokumentation (Art. 20 DSGVO).", icon: Globe }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-dark-800/30 border border-slate-800">
                  <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-dark-800/20 border border-slate-800/50">
              <h4 className="font-bold text-white text-sm mb-2">Beschwerderecht bei der Aufsichtsbehörde</h4>
              <p className="text-xs text-slate-400">
                Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Projekt seinen Sitz hat (Hessen).
              </p>
            </div>
          </section>

          {/* Sektion: Datenhoheit & Löschung */}
          <section className="bg-dark-800/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-brand-400" /> Datenhoheit in der Praxis
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Da wir keine Kopien Ihrer Daten besitzen, können wir diese nicht für Sie löschen oder wiederherstellen.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                <p className="text-sm text-slate-400"><strong>Selektive Löschung:</strong> Sie können einzelne Schüler oder ganze Lerngruppen jederzeit innerhalb der App entfernen.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                <p className="text-sm text-slate-400"><strong>Vollständiger Reset:</strong> Durch das Leeren des Browser-Speichers (Website-Daten löschen) in Ihren iPad-Einstellungen werden alle lokalen Linexio-Daten unwiderruflich gelöscht.</p>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-slate-800 text-sm text-slate-500">
            Zuletzt aktualisiert am: {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
          </section>
        </div>
      </div>
    </PageTransition>
  );
};