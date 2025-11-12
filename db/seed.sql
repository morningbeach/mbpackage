INSERT OR REPLACE INTO products (id, slug, title, summary, category, cover, size, moq, lead_time) VALUES
('p1','magnetic-rigid-box','Magnetic Rigid Box','Premium rigid box with hidden magnet closure, ideal for luxury gifting.','boxes','https://images.unsplash.com/photo-1617038260897-3f642c20e5cc?q=80&w=1600&auto=format&fit=crop','280×200×80 mm','500','15–20 days'),
('p2','jute-tote-bag','Jute Tote Gift Bag','Natural jute tote with laminated lining; perfect as a reusable gift bag.','gifts','https://images.unsplash.com/photo-1585386959984-a415522316aa?q=80&w=1600&auto=format&fit=crop','320×270×140 mm','1000','20–25 days'),
('p3','holiday-gift-set','Holiday Gift Set','Curated set with candle, tea, and chocolates in a nested rigid box.','sets','https://images.unsplash.com/photo-1512906712448-95b0014892ea?q=80&w=1600&auto=format&fit=crop','340×240×110 mm','300','25–30 days');

INSERT OR REPLACE INTO product_media (product_id, idx, type, src, alt) VALUES
('p1',0,'image','https://images.unsplash.com/photo-1617038260897-3f642c20e5cc?q=80&w=1600&auto=format&fit=crop','Rigid box'),
('p1',1,'image','https://images.unsplash.com/photo-1617038261470-80445df0c2b6?q=80&w=1600&auto=format&fit=crop','Angle'),
('p1',2,'image','https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1600&auto=format&fit=crop','Insert'),
('p2',0,'image','https://images.unsplash.com/photo-1585386959984-a415522316aa?q=80&w=1600&auto=format&fit=crop','Jute tote'),
('p2',1,'image','https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop','Detail'),
('p3',0,'image','https://images.unsplash.com/photo-1512906712448-95b0014892ea?q=80&w=1600&auto=format&fit=crop','Gift set'),
('p3',1,'image','https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop','Candle'),
('p3',2,'image','https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop','Chocolate');

INSERT OR REPLACE INTO product_materials (product_id, material) VALUES
('p1','Paper'),('p1','Greyboard'),('p2','Jute'),('p2','Cotton'),('p3','Paper'),('p3','Greyboard'),('p3','Foam');

INSERT OR REPLACE INTO product_finishes (product_id, finish) VALUES
('p1','Foil'),('p1','UV'),('p2','Sewing'),('p3','Foil'),('p3','Emboss');

INSERT OR REPLACE INTO product_details (product_id, idx, detail) VALUES
('p1',0,'Hidden magnets'),('p1',1,'Die-cut foam insert'),('p1',2,'Custom foil colors'),
('p2',0,'Laminated interior'),('p2',1,'Reinforced handles'),('p2',2,'Screen print up to 2 colors'),
('p3',0,'Nested tray'),('p3',1,'Custom insert cutouts'),('p3',2,'Gold foil + blind emboss');

INSERT OR REPLACE INTO product_badges (product_id, idx, badge) VALUES
('p1',0,'New'),('p1',1,'Luxury'),
('p2',0,'Eco'),
('p3',0,'Set');
