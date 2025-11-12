CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  category TEXT CHECK(category IN ('boxes','gifts','sets')) NOT NULL,
  cover TEXT,
  size TEXT,
  moq TEXT,
  lead_time TEXT,
  created_at INTEGER DEFAULT (strftime('%s','now'))
);
CREATE TABLE IF NOT EXISTS product_media (
  product_id TEXT NOT NULL,
  idx INTEGER NOT NULL,
  type TEXT CHECK(type IN ('image','video')) NOT NULL,
  src TEXT NOT NULL,
  alt TEXT,
  PRIMARY KEY (product_id, idx),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS product_materials (
  product_id TEXT NOT NULL,
  material TEXT NOT NULL,
  PRIMARY KEY (product_id, material),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS product_finishes (
  product_id TEXT NOT NULL,
  finish TEXT NOT NULL,
  PRIMARY KEY (product_id, finish),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS product_details (
  product_id TEXT NOT NULL,
  idx INTEGER NOT NULL,
  detail TEXT NOT NULL,
  PRIMARY KEY (product_id, idx),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS product_badges (
  product_id TEXT NOT NULL,
  idx INTEGER NOT NULL,
  badge TEXT NOT NULL,
  PRIMARY KEY (product_id, idx),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
