USE RealEstate;

CREATE TABLE Properties (
    PropertyID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Image NVARCHAR(255) NOT NULL,
    Link NVARCHAR(255) NOT NULL
);


INSERT INTO Properties (Name, Image, Link) VALUES 
('Modern Family Home', 'Buy/Family.png', 'Properties/Family.html'),
('Luxury Condo', 'Buy/condo.png', 'Properties/Condo.html'),
('Architectural Home', 'Buy/archi.png', 'Properties/Architectural.html'),
('Luxury Mansion', 'Buy/mansion.png', 'Properties/Mansion.html'),
('Cozy Apartment', 'Buy/Apartment.png', 'https://example.com/property5'),
('Historic Villa', 'Buy/Townh.png', 'https://example.com/property6'),
('Contemporary Loft', 'Buy/Townhouse.png', 'https://example.com/property7'),
('Beachfront Bungalow', 'Buy/flat.png', 'https://example.com/property8'),
('Mountain Cabin', 'Buy/modern.png', 'https://example.com/property9'),
('Urban Studio', 'Buy/Villa.jpg', 'https://example.com/property10');
