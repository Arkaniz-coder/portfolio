import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CGV = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <AnimateOnScroll>
          <div className="mb-12">
            <p className="label-mono mb-2">Conditions commerciales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-muted-foreground">
              Les présentes CGV régissent les relations contractuelles entre
              Arkaniz et ses clients pour la fourniture de services de
              développement web.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Objet */}
        <AnimateOnScroll animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les présentes conditions définissent les modalités selon lesquelles
                Arkaniz, micro-entreprise, propose ses services de développement web,
                de conception de sites internet et d'accompagnement digital aux
                clients.
              </p>
              <p>
                Elles s'appliquent à tout client, consommateur ou
                professionnel. Les dispositions propres aux consommateurs sont
                regroupées à l'article 12.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Champ d'application */}
        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              2. Champ d'application et services
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les services proposés incluent : développement de sites web,
                intégration de designs, optimisation SEO, maintenance, et tout
                autre service défini dans le devis fourni au client.
              </p>
              <p>
                Les services sont prestés selon les spécifications détaillées
                dans le devis accepté par le client. Tout service supplémentaire
                fera l'objet d'une modification de devis.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Devis et acceptation */}
        <AnimateOnScroll animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Devis et acceptation</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Un devis détaillé est établi après échange avec le client. Ce
                devis précise la nature des services, le tarif, les délais et
                les conditions de paiement.
              </p>
              <p>
                Le devis est valable 30 jours à compter de sa date d'émission.
                L'acceptation du devis par le client constitue la signature du
                contrat et engage les deux parties.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Tarification */}
        <AnimateOnScroll animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Tarification</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les tarifs proposés sont ceux indiqués dans le devis. Ils sont
                établis en fonction de la nature et de la complexité des services
                demandés.
              </p>
              <p>
                Tout service ou modification supplémentaires au devis initial
                sera facturé séparément selon les tarifs en vigueur.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Conditions de paiement */}
        <AnimateOnScroll animation="fadeUp" delay={0.5}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              5. Conditions de paiement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Modalités de paiement
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Acompte initial :</strong> 50% du montant total du
                    devis à la signature du contrat
                  </li>
                  <li>
                    <strong>Solde :</strong> 50% avant la livraison finale du
                    projet
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Moyens de paiement
                </h3>
                <p>
                  Les paiements sont acceptés par virement bancaire ou
                  autre moyen convenu d'un commun accord.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Délai de paiement
                </h3>
                <p>
                  Les factures doivent être réglées dans les 30 jours suivant
                  leur date d'émission, sauf accord contraire préalable.
                </p>
                <p className="mt-3">
                  Pour les clients professionnels, tout retard de paiement
                  entraîne, de plein droit et sans mise en demeure préalable,
                  des pénalités de retard au taux de trois fois le taux
                  d'intérêt légal, exigibles dès le lendemain de la date
                  d'échéance, ainsi qu'une indemnité forfaitaire de 40 € pour
                  frais de recouvrement (articles L. 441-10 et D. 441-5 du Code
                  de commerce). Aucun escompte n'est accordé en cas de paiement
                  anticipé.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Révisions et modifications */}
        <AnimateOnScroll animation="fadeUp" delay={0.6}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Révisions et modifications
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Selon le devis, un nombre défini de révisions et corrections est
                inclus dans le prix.
              </p>
              <p>
                Les révisions au-delà du nombre inclus seront facturées selon les
                tarifs en vigueur. Toute modification substantielle du projet
                nécessitera la signature d'un avenant au devis.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Délais de livraison */}
        <AnimateOnScroll animation="fadeUp" delay={0.7}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Délais de livraison</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les délais de livraison indiqués au devis sont donnés à titre
                indicatif et non contractuel. Arkaniz s'engage à faire ses efforts
                raisonnables pour respecter ces délais.
              </p>
              <p>
                Tout retard ne donnera pas lieu à indemnité et ne justifiera pas
                l'annulation du contrat, sauf si le délai excède 30 jours de
                retard et que le client en fasse la demande écrite.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Livraison et acceptation */}
        <AnimateOnScroll animation="fadeUp" delay={0.8}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              8. Livraison et acceptation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Le projet est considéré comme livré lors de sa mise en ligne ou
                de la remise des fichiers selon les modalités définies dans le
                devis.
              </p>
              <p>
                Le client dispose de 7 jours après livraison pour signaler toute
                non-conformité majeure. Après ce délai, le projet est réputé
                accepté.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Responsabilité et garanties */}
        <AnimateOnScroll animation="fadeUp" delay={0.9}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              9. Responsabilité et garanties
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arkaniz s'engage à fournir des services conformes aux
                spécifications du devis et selon les règles de l'art en vigueur.
              </p>
              <p>
                Arkaniz ne peut être tenu responsable des éventuels
                dysfonctionnements dus à une mauvaise utilisation du site par le
                client, à des modifications non autorisées ou au non-respect des
                recommandations techniques communiquées.
              </p>
              <p>
                La responsabilité de Arkaniz est limitée au montant total du
                contrat. En aucun cas Arkaniz ne sera responsable de dommages
                indirects, de perte de chiffre d'affaires ou de données.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Propriété intellectuelle */}
        <AnimateOnScroll animation="fadeUp" delay={1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              10. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                À la livraison complète et après paiement intégral de la
                facture, tous les droits sur la création (code, design,
                contenus originaux) sont transférés au client.
              </p>
              <p>
                Le client s'engage à ne pas reproduire ou revendre les services
                sans autorisation. Arkaniz conserve le droit d'utiliser les
                réalisations comme exemples dans son portfolio.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Annulation et résiliation */}
        <AnimateOnScroll animation="fadeUp" delay={1.1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              11. Annulation et résiliation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Le client peut annuler le contrat avant le début des prestations
                sans frais. Une fois les prestations commencées, l'annulation
                donnera lieu à facturation de l'acompte versé et des services
                rendus jusqu'à la demande d'annulation.
              </p>
              <p>
                Arkaniz se réserve le droit de résilier le contrat si le client ne
                respecte pas ses obligations financières après une mise en
                demeure restée sans réponse pendant 15 jours.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Clients consommateurs */}
        <AnimateOnScroll animation="fadeUp" delay={1.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Clients consommateurs</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les dispositions suivantes s'appliquent uniquement au client
                consommateur, c'est-à-dire à toute personne physique qui agit à
                des fins qui n'entrent pas dans le cadre de son activité
                professionnelle.
              </p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Droit de rétractation
                </h3>
                <p>
                  Le client dispose d'un délai de <strong>14 jours</strong> à
                  compter de la conclusion du contrat pour se rétracter, sans
                  avoir à justifier de motif (articles L. 221-18 et suivants du
                  Code de la consommation). Pour exercer ce droit, il notifie sa
                  décision à Arkaniz avant l'expiration du délai, par message
                  écrit (WhatsApp) ou au moyen du formulaire ci-dessous.
                </p>
                <p className="mt-3">
                  Si le client demande expressément que la prestation commence
                  avant la fin du délai de rétractation, il reste redevable,
                  s'il se rétracte ensuite, d'un montant proportionnel à ce qui
                  lui a été fourni jusqu'à la notification de sa rétractation
                  (article L. 221-25). Le droit de rétractation ne peut plus
                  être exercé lorsque la prestation a été pleinement exécutée
                  avant la fin du délai, avec l'accord préalable exprès du
                  client, qui reconnaît alors perdre son droit de rétractation
                  (article L. 221-28).
                </p>
                <p className="mt-3">
                  En cas de rétractation, Arkaniz rembourse les sommes versées,
                  déduction faite le cas échéant du montant proportionnel dû, au
                  plus tard 14 jours après avoir été informé de la décision du
                  client, par le même moyen de paiement.
                </p>
              </div>
              <div className="glass-subtle rounded-xl p-6 space-y-2 text-sm">
                <p className="font-semibold text-foreground">
                  Modèle de formulaire de rétractation
                </p>
                <p>
                  À l'attention d'Arkaniz (coordonnées dans les mentions
                  légales) :
                </p>
                <p>
                  Je vous notifie par la présente ma rétractation du contrat
                  portant sur la prestation de services ci-dessous :
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Commandée le :</li>
                  <li>Nom du consommateur :</li>
                  <li>Adresse du consommateur :</li>
                  <li>Date :</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Garanties légales
                </h3>
                <p>
                  Les présentes CGV ne privent pas le client consommateur des
                  droits qu'il tient des dispositions légales impératives du
                  Code de la consommation, notamment de la garantie légale de
                  conformité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Litiges</h3>
                <p>
                  Le client consommateur peut saisir la juridiction
                  territorialement compétente selon les règles de droit commun
                  applicables aux consommateurs, notamment celle du lieu où il
                  demeurait lors de la conclusion du contrat ou de la survenance
                  du fait dommageable.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Confidentialité */}
        <AnimateOnScroll animation="fadeUp" delay={1.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Confidentialité</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les deux parties s'engagent à garder confidentielles les
                informations sensibles reçues dans le cadre de la prestation.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Données personnelles */}
        <AnimateOnScroll animation="fadeUp" delay={1.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">14. Données personnelles</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les données personnelles du client sont traitées conformément à
                la{" "}
                <Link
                  to="/confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>{" "}
                d'Arkaniz, qui précise leur utilisation, leur durée de
                conservation et les droits dont dispose le client.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Droit applicable */}
        <AnimateOnScroll animation="fadeUp" delay={1.5}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">15. Droit applicable</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les présentes CGV sont régies par la loi française. Pour les
                clients professionnels, tout différend relève du tribunal de
                commerce compétent. Pour les clients consommateurs, les règles
                de compétence prévues à l'article 12 s'appliquent.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact */}
        <AnimateOnScroll animation="fadeUp" delay={1.6}>
          <div>
            <h2 className="text-2xl font-bold mb-4">16. Questions et support</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pour toute question concernant les CGV ou votre contrat, veuillez
                nous contacter :
              </p>
              <p className="font-semibold text-foreground">
                <a href="https://wa.me/33744882821" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp : 07 44 88 28 21</a>
              </p>
              <p className="mt-6 text-xs">
                <strong>Dernière mise à jour :</strong> 29 octobre 2026
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CGV;
