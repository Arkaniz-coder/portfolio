import AnimateOnScroll from "@/components/AnimateOnScroll";

const MentionsLegales = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <AnimateOnScroll>
          <div className="mb-12">
            <p className="label-mono mb-2">Informations légales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-muted-foreground">
              Informations d'identification et conditions d'utilisation du site
              arkaniz.com
            </p>
          </div>
        </AnimateOnScroll>

        {/* Identification */}
        <AnimateOnScroll animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Identification du site</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Propriétaire et éditeur
                </h3>
                <p>
                  <strong>Nom commercial :</strong> Arkaniz
                </p>
                <p>
                  <strong>Statut :</strong> Micro-entreprise
                </p>
                <p>
                  <strong>SIRET :</strong> 893 151 415 00047
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p>
                  <strong>WhatsApp :</strong>{" "}
                  <a href="https://wa.me/33744882821" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">07 44 88 28 21</a>
                </p>
                <p>
                  <strong>Domaine :</strong> arkaniz.com
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Hébergement */}
        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Prestataire d'hébergement
                </h3>
                <p>
                  <strong>Entreprise :</strong> Netlify, Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis
                </p>
                <p>
                  <strong>Site web :</strong> www.netlify.com
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Propriété intellectuelle */}
        <AnimateOnScroll animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              3. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tous les contenus présents sur le site arkaniz.com (textes,
                images, logos, graphiques, structures) sont la propriété
                exclusive d'Arkaniz ou sont utilisés avec autorisation. Toute
                reproduction, représentation, modification ou exploitation du
                site, en totalité ou en partie, sans autorisation expresse est
                strictement interdite.
              </p>
              <p>
                Les codes sources, designs, et créations originales sont
                protégés par les droits d'auteur applicables en France.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contenus et responsabilité */}
        <AnimateOnScroll animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              4. Contenus et responsabilité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les informations et contenus fournis sur ce site sont à titre
                informatif. Bien que nous nous efforçons de maintenir une
                exactitude des informations, Arkaniz ne peut garantir l'absence
                d'erreurs ou l'actualité permanente des contenus.
              </p>
              <p>
                Arkaniz décline toute responsabilité en cas de dommage direct ou
                indirect résultant de l'accès ou de l'utilisation du site, ainsi
                que de l'indisponibilité du site ou de ses services.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Données personnelles et RGPD */}
        <AnimateOnScroll animation="fadeUp" delay={0.5}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              5. Données personnelles et RGPD
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les données personnelles collectées via ce site sont traitées
                conformément à la loi française relative à la protection des
                données personnelles et au Règlement Général sur la Protection
                des Données (RGPD).
              </p>
              <p>
                Pour connaître en détail comment sont traitées vos données,
                veuillez consulter notre politique de confidentialité accessible
                depuis ce site.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Limitation de responsabilité */}
        <AnimateOnScroll animation="fadeUp" delay={0.6}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'accès au site et à ses services est fourni « en l'état ». Arkaniz
                ne garantit pas que le site fonctionnera sans interruption ou que
                tous les défauts seront corrigés.
              </p>
              <p>
                En aucun cas Arkaniz ne sera responsable des dommages indirects,
                accessoires, spéciaux ou consécutifs, y compris la perte de
                bénéfices ou de données.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Liens externes */}
        <AnimateOnScroll animation="fadeUp" delay={0.7}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Liens externes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce site peut contenir des liens vers d'autres sites web. Arkaniz
                ne contrôle pas et ne peut être tenu responsable du contenu de
                ces sites externes. Les liens sont fournis à titre informatif et
                leur présence n'implique pas une validation ou recommandation du
                contenu de ces sites.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cookies et traces */}
        <AnimateOnScroll animation="fadeUp" delay={0.8}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Cookies et traces</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce site utilise des cookies et technologies similaires pour
                améliorer votre expérience. Pour plus d'informations sur les
                cookies utilisés, consultez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Modification des mentions légales */}
        <AnimateOnScroll animation="fadeUp" delay={0.9}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              9. Modification des mentions légales
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arkaniz se réserve le droit de modifier les présentes mentions
                légales à tout moment. Les modifications entrent en vigueur dès
                leur mise en ligne sur le site. Nous vous recommandons de
                consulter régulièrement cette page pour rester informé de tout
                changement.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact */}
        <AnimateOnScroll animation="fadeUp" delay={1}>
          <div>
            <h2 className="text-2xl font-bold mb-4">10. Questions</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pour toute question concernant les mentions légales ou pour
                signaler un problème, veuillez nous contacter à l'adresse :
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

export default MentionsLegales;
