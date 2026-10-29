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

        {/* Confidentialité */}
        <AnimateOnScroll animation="fadeUp" delay={1.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Confidentialité</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les deux parties s'engagent à garder confidentielles les
                informations sensibles reçues dans le cadre de la prestation.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Droit applicable */}
        <AnimateOnScroll animation="fadeUp" delay={1.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Droit applicable</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les présentes CGV sont régies par la loi française. Tout
                différend sera soumis à la juridiction compétente du tribunal de
                commerce.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact */}
        <AnimateOnScroll animation="fadeUp" delay={1.4}>
          <div>
            <h2 className="text-2xl font-bold mb-4">14. Questions et support</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pour toute question concernant les CGV ou votre contrat, veuillez
                nous contacter :
              </p>
              <p className="font-semibold text-foreground">
                <a href="https://wa.me/33744882821" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp : 07 44 88 28 21</a>
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CGV;
