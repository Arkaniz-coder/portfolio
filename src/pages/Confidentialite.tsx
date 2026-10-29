import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";

const Confidentialite = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <AnimateOnScroll>
          <div className="mb-12">
            <p className="label-mono mb-2">Protection des données</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground">
              Chez Arkaniz, la protection de vos données personnelles est une
              priorité. Cette politique détaille comment vos informations sont
              collectées, utilisées, protégées et quels sont vos droits
              conformément au RGPD (Règlement Général sur la Protection des
              Données — UE 2016/679) et à la loi Informatique et Libertés.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Responsable du traitement */}
        <AnimateOnScroll animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              1. Responsable du traitement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Le responsable du traitement des données collectées sur ce site
                est :
              </p>
              <div className="glass-subtle rounded-xl p-6 space-y-2">
                <p>
                  <strong className="text-foreground">Nom commercial :</strong>{" "}
                  Arkaniz
                </p>
                <p>
                  <strong className="text-foreground">Statut :</strong>{" "}
                  Micro-entreprise
                </p>
                <p>
                  <strong className="text-foreground">SIRET :</strong> 893 151 415 00047
                </p>
                <p>
                  <strong className="text-foreground">Contact :</strong>{" "}
                  <a href="https://wa.me/33744882821" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </p>
                <p>
                  <strong className="text-foreground">Site web :</strong>{" "}
                  arkaniz.com
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Base légale */}
        <AnimateOnScroll animation="fadeUp" delay={0.15}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              2. Base légale du traitement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Conformément à l'article 6 du RGPD, le traitement de vos
                données repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Votre consentement :
                  </strong>{" "}
                  pour le dépôt de cookies non essentiels et l'envoi de
                  formulaires de contact
                </li>
                <li>
                  <strong className="text-foreground">
                    L'exécution d'un contrat :
                  </strong>{" "}
                  pour le traitement de vos données dans le cadre d'une
                  prestation de services
                </li>
                <li>
                  <strong className="text-foreground">
                    L'intérêt légitime :
                  </strong>{" "}
                  pour la sécurité du site et l'amélioration de nos services
                </li>
                <li>
                  <strong className="text-foreground">
                    Les obligations légales :
                  </strong>{" "}
                  pour la conservation de certaines données (facturation,
                  comptabilité)
                </li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Données collectées */}
        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              3. Données personnelles collectées
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  a) Données fournies volontairement
                </h3>
                <p>
                  Lorsque vous remplissez un formulaire de contact ou de
                  demande de devis, nous collectons :
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l'entreprise/organisation (optionnel)</li>
                  <li>Description de votre projet et message</li>
                  <li>Budget et type de prestation souhaités</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  b) Données techniques collectées automatiquement
                </h3>
                <p>
                  Lors de votre navigation, certaines données sont collectées
                  automatiquement par notre hébergeur (Netlify) :
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Adresse IP (anonymisée)</li>
                  <li>Type et version du navigateur</li>
                  <li>Système d'exploitation</li>
                  <li>Pages consultées et durée de consultation</li>
                  <li>URL de provenance (referrer)</li>
                  <li>Date et heure des visites</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  c) Données non collectées
                </h3>
                <p>
                  Nous ne collectons <strong>jamais</strong> de données
                  sensibles telles que : opinions politiques, données de santé,
                  orientation sexuelle, origine ethnique, données biométriques
                  ou données bancaires.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Utilisation des données */}
        <AnimateOnScroll animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              4. Finalités du traitement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Répondre à vos demandes de contact et demandes de devis
                </li>
                <li>
                  Vous fournir les services convenus dans le cadre d'un contrat
                </li>
                <li>Établir et gérer la relation commerciale</li>
                <li>
                  Améliorer l'expérience utilisateur et optimiser le site
                </li>
                <li>
                  Mesurer l'audience du site (si cookies analytiques acceptés)
                </li>
                <li>Respecter nos obligations légales et comptables</li>
              </ul>
              <p className="mt-2">
                Vos données ne font l'objet d'<strong>aucune</strong> décision
                automatisée ni de profilage.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cookies */}
        <AnimateOnScroll animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              5. Cookies et traceurs
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les cookies sont de petits fichiers texte déposés sur votre
                appareil lors de votre visite. Conformément à la directive
                ePrivacy et aux recommandations de la CNIL, nous distinguons :
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  a) Cookies strictement nécessaires
                </h3>
                <p>
                  Ces cookies sont indispensables au fonctionnement du site. Ils
                  ne nécessitent pas votre consentement :
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>
                    <strong>cookie_consent</strong> — Mémorise votre choix
                    concernant les cookies (durée : 12 mois)
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  b) Cookies analytiques (soumis à consentement)
                </h3>
                <p>
                  Ces cookies permettent de mesurer l'audience et d'analyser
                  la fréquentation du site. Ils ne sont déposés que si vous
                  les acceptez via le bandeau de consentement.
                </p>
              </div>
              <p className="mt-4">
                Vous pouvez modifier vos préférences à tout moment en
                cliquant sur le lien « Gérer les cookies » en bas de page, ou
                via les paramètres de votre navigateur.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Partage des données */}
        <AnimateOnScroll animation="fadeUp" delay={0.5}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Destinataires des données
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vos données personnelles ne sont <strong>jamais vendues</strong>{" "}
                ni transmises à des tiers à des fins commerciales. Elles
                peuvent être partagées uniquement avec les prestataires
                techniques suivants, dans le strict cadre de leur mission :
              </p>
              <div className="mt-4 space-y-4">
                <div className="glass-subtle rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-1">
                    FormSubmit.co — Traitement des formulaires
                  </h3>
                  <p>
                    Les données saisies dans le formulaire de contact sont
                    transmises via FormSubmit.co pour permettre l'envoi du
                    message par email. Ce service ne stocke pas vos données
                    au-delà du traitement.
                  </p>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-1">
                    Netlify — Hébergement
                  </h3>
                  <p>
                    Le site est hébergé sur la plateforme Netlify (Netlify Inc.,
                    États-Unis). Netlify peut collecter des données techniques
                    (logs serveur, adresses IP) dans le cadre de l'hébergement.
                    Netlify est conforme aux clauses contractuelles types de
                    la Commission européenne pour les transferts hors UE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Transferts hors UE */}
        <AnimateOnScroll animation="fadeUp" delay={0.55}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              7. Transferts de données hors UE
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Certains de nos prestataires techniques (Netlify, FormSubmit)
                sont basés aux États-Unis. Ces transferts sont encadrés par
                les clauses contractuelles types (CCT) approuvées par la
                Commission européenne, conformément à l'article 46 du RGPD,
                afin de garantir un niveau de protection adéquat de vos données.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Sécurité des données */}
        <AnimateOnScroll animation="fadeUp" delay={0.6}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              8. Sécurité des données
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nous mettons en œuvre les mesures techniques et
                organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  Chiffrement SSL/TLS (HTTPS) pour toutes les communications
                </li>
                <li>
                  Hébergement sécurisé avec mises à jour régulières
                </li>
                <li>
                  Accès aux données limité au strict nécessaire
                </li>
                <li>
                  Aucune base de données utilisateur côté serveur
                </li>
              </ul>
              <p className="mt-2">
                Malgré ces mesures, aucune transmission de données sur Internet
                ne peut être garantie comme totalement sécurisée.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Durée de conservation */}
        <AnimateOnScroll animation="fadeUp" delay={0.7}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              9. Durée de conservation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vos données sont conservées uniquement le temps nécessaire aux
                finalités pour lesquelles elles ont été collectées :
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">
                        Type de données
                      </th>
                      <th className="text-left py-3 text-foreground font-semibold">
                        Durée de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 pr-4">Données de contact</td>
                      <td className="py-3">
                        3 ans après le dernier échange
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Données contractuelles</td>
                      <td className="py-3">
                        5 ans (obligation légale)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Données techniques (logs)</td>
                      <td className="py-3">12 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Cookies de consentement</td>
                      <td className="py-3">12 mois</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Factures</td>
                      <td className="py-3">
                        10 ans (obligation comptable)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Droits RGPD */}
        <AnimateOnScroll animation="fadeUp" delay={0.8}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              10. Vos droits (RGPD)
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez des
                droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-foreground">Droit d'accès</strong>{" "}
                  (art. 15) — Obtenir une copie de vos données
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit de rectification
                  </strong>{" "}
                  (art. 16) — Corriger des données inexactes
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit à l'effacement
                  </strong>{" "}
                  (art. 17) — Demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit à la limitation
                  </strong>{" "}
                  (art. 18) — Restreindre le traitement
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit à la portabilité
                  </strong>{" "}
                  (art. 20) — Recevoir vos données dans un format structuré
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit d'opposition
                  </strong>{" "}
                  (art. 21) — Vous opposer au traitement
                </li>
                <li>
                  <strong className="text-foreground">
                    Droit de retirer votre consentement
                  </strong>{" "}
                  (art. 7) — À tout moment, sans justification
                </li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Exercer vos droits */}
        <AnimateOnScroll animation="fadeUp" delay={0.9}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              11. Exercer vos droits
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pour exercer vos droits, adressez votre demande par email à :
              </p>
              <p className="font-semibold text-primary text-lg">
                <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp : 07 44 88 28 21</a>
              </p>
              <p>
                Nous vous répondrons dans un délai maximum de{" "}
                <strong>30 jours</strong>. Une vérification d'identité pourra
                vous être demandée.
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez introduire une réclamation auprès de la{" "}
                <strong>CNIL</strong> (Commission Nationale de l'Informatique
                et des Libertés) :{" "}
                <span className="text-primary">www.cnil.fr</span>
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Modifications */}
        <AnimateOnScroll animation="fadeUp" delay={1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              12. Modifications de cette politique
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Cette politique peut être mise à jour pour refléter les
                évolutions légales ou techniques. La date de dernière mise à
                jour est indiquée ci-dessous. En cas de modification
                substantielle, un bandeau d'information sera affiché sur le
                site.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact */}
        <AnimateOnScroll animation="fadeUp" delay={1.1}>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              13. Contact
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pour toute question relative à cette politique ou à la
                protection de vos données :
              </p>
              <div className="glass-subtle rounded-xl p-6 space-y-2">
                <p>
                  <strong className="text-foreground">Contact :</strong>{" "}
                  <a href="https://wa.me/33744882821" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp : 07 44 88 28 21</a>
                </p>
                <p>
                  <strong className="text-foreground">Site :</strong>{" "}
                  arkaniz.com
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  to="/mentions-legales"
                  className="text-primary hover:underline text-sm"
                >
                  Mentions légales
                </Link>
                <Link
                  to="/cgv"
                  className="text-primary hover:underline text-sm"
                >
                  CGV
                </Link>
              </div>
              <p className="mt-6 text-xs">
                <strong>Dernière mise à jour :</strong> 17 février 2026
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Confidentialite;
