-- infra/seed.sql
BEGIN;
INSERT INTO users (name) VALUES
  ('Alice'),
  ('Bob'),
  ('Charlie');
COMMIT;
