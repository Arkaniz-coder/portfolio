/*
  # Système de gestion de disponibilité

  1. Nouvelles Tables
    - `availability`
      - `id` (uuid, primary key)
      - `max_projects` (int) - Nombre maximum de projets simultanés
      - `current_projects` (int) - Nombre de projets en cours
      - `available_slots` (int, computed) - Créneaux disponibles
      - `response_time` (text) - Temps de réponse (ex: "48h")
      - `updated_at` (timestamptz) - Dernière mise à jour
      - `is_active` (boolean) - Configuration active
    
    - `brief_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Nom du client
      - `email` (text) - Email
      - `company` (text) - Entreprise
      - `phone` (text) - Téléphone
      - `project_type` (text) - Type de projet
      - `budget` (text) - Budget estimé
      - `content` (jsonb) - Choix de contenu
      - `design` (jsonb) - Choix de design
      - `features` (jsonb) - Fonctionnalités
      - `urgency` (text) - Urgence
      - `description` (text) - Description
      - `estimated_budget` (numeric) - Budget calculé
      - `status` (text) - Statut (new, reviewed, quoted, etc.)
      - `created_at` (timestamptz) - Date de soumission

  2. Sécurité
    - RLS activé sur toutes les tables
    - Lecture publique de availability (pour afficher les créneaux)
    - Lecture publique de brief_submissions interdite (données sensibles)
    - Insertion publique autorisée pour brief_submissions
*/

-- Table de disponibilité
CREATE TABLE IF NOT EXISTS availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  max_projects int NOT NULL DEFAULT 3,
  current_projects int NOT NULL DEFAULT 0,
  available_slots int GENERATED ALWAYS AS (GREATEST(0, max_projects - current_projects)) STORED,
  response_time text NOT NULL DEFAULT '48h',
  updated_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE availability ENABLE ROW LEVEL SECURITY;

-- Politique : tout le monde peut lire la config active
CREATE POLICY "Anyone can read active availability"
  ON availability
  FOR SELECT
  USING (is_active = true);

-- Insérer la configuration par défaut
INSERT INTO availability (max_projects, current_projects, response_time, is_active)
VALUES (3, 1, '48h', true)
ON CONFLICT DO NOTHING;

-- Table des soumissions de brief
CREATE TABLE IF NOT EXISTS brief_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  project_type text NOT NULL,
  budget text,
  content jsonb DEFAULT '[]'::jsonb,
  design jsonb DEFAULT '[]'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  urgency text,
  description text,
  estimated_budget numeric,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE brief_submissions ENABLE ROW LEVEL SECURITY;

-- Politique : tout le monde peut insérer (pour le formulaire public)
CREATE POLICY "Anyone can submit brief"
  ON brief_submissions
  FOR INSERT
  WITH CHECK (true);

-- Index pour performance
CREATE INDEX IF NOT EXISTS idx_brief_submissions_created_at ON brief_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_brief_submissions_status ON brief_submissions(status);
