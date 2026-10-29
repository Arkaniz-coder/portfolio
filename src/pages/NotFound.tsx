import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <div className="text-center">
      <p className="label-mono mb-4">Erreur 404</p>
      <h1 className="mb-4 text-4xl md:text-5xl font-bold heading-glow">Page introuvable</h1>
      <p className="mb-8 text-muted-foreground">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="text-primary underline hover:text-primary/90">
        Retour à l'accueil
      </Link>
    </div>
  </div>
);

export default NotFound;
