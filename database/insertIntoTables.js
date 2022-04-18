
import db from "./createMySQLConnection.js";


db.query(`INSERT INTO electronics (image, name, price, description) VALUES
('elecpic1.jpg','Kea Super Computer v3',1000,'Testwinning computer for larger coding projects'),
('elecpic2.webp','Stretchy-lab-top',560,'The new stretchy labtop from kea-ware'),
('elecpic3.jpg','PS5 controller',103,'The best and most immersive gaming controller'),
('elecpic4.webp','Nintendo Switch',299,'The best portable family gaming console'),
('elecpic5.webp','Flippedy-flop-phone',900,'Why not bottle-flip the new flippy-phone? Always lands perfect')
`);

db.query(`INSERT INTO clothes (image, name, price, description) VALUES
('clothespic1.jpg','T-shirt',20,'Graphic t-shirt with super cool text'),
('clothespic2.jpg','Slim fit shirt',70,'Fancy blue shirt that shows off those the great abs'),
('clothespic3.jpg','Super coazy long sleeve shirt',35,'For the best coazy days at home in front of the tv'),
('clothespic4.avif','Brow fashables',10,'Hottest pants for fall'),
('clothespic5.jpg','Joggedy-walkers',100,'Firm and sturdy hiking pants for long walks')
`);

db.query(`INSERT INTO accessories (image, name, price, description) VALUES
('accpic1.jpg','Thors Hammer necklace',100,'A necklace for the cool thunder nights'),
('accpic2.jpg','Butterfly couple rings',150,'Have a matching ring with your significant other'),
('accpic3.jpg','Gangster glasses of fire storm',10,'To the absolute speedster'),
('accpic4.webp','Ikea hat',5,'Go shopping in ikea as a complete professional'),
('accpic5.jpg','Oak stone bracelet',100,'It really should not be so expensive but it is still very cool')
`);

db.query(`INSERT INTO shoes (image, name, price, description) VALUES
('shoepic1.webp','Super sneaks',50,'We all know a great shoe, this is also a boot'),
('shoepic2.jpg','The boat shoes',80,'Very comfy, very gentleman, very good on a yacht'),
('shoepic3.webp','The agent',1000,'With that price, maybe it has hidden features?'),
('shoepic4.webp','Combat boots',300,'Great all-round boots, for hiking and stuff'),
('shoepic5.webp','Skater-sneaks',10,'Super cheap, destroy them while skating')
`);





db.end();