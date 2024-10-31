const properties = {
    property1: {
        title: "Beautiful House 1",
        image: "Apartment.png",
        description: "This beautiful house located in City A features 4 bedrooms, a spacious garden, and modern amenities."
    },
    property2: {
        title: "Stunning Apartment 2",
        image: "property2.jpg",
        description: "A stunning apartment in the heart of City B, with panoramic views and luxury finishes."
    },
    property3: {
        title: "Luxury Villa 3",
        image: "property3.jpg",
        description: "A luxury villa in City C with a private pool and exquisite design."
    },
    property4: {
        title: "Charming Cottage 4",
        image: "property4.jpg",
        description: "This charming cottage in City D offers a cozy living experience with a rustic touch."
    },
    property5: {
        title: "Modern Loft 5",
        image: "property5.jpg",
        description: "A modern loft in City E, ideal for urban living with an open floor plan."
    },
    property6: {
        title: "Cozy Apartment 6",
        image: "property6.jpg",
        description: "A cozy apartment in City F, perfect for young professionals or couples."
    },
    property7: {
        title: "Spacious Family Home 7",
        image: "property7.jpg",
        description: "This spacious family home in City G features 5 bedrooms and a large backyard."
    },
    property8: {
        title: "Elegant Townhouse 8",
        image: "property8.jpg",
        description: "An elegant townhouse in City H with luxurious interiors and convenient location."
    },
    property9: {
        title: "Stylish Studio 9",
        image: "property9.jpg",
        description: "A stylish studio in City I, perfect for city living with modern amenities."
    },
    property10: {
        title: "Historic Mansion 10",
        image: "property10.jpg",
        description: "A historic mansion in City J, rich with character and charm."
    }
};

function openModal(property) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const image = document.getElementById("modal-image");
    const description = document.getElementById("modal-description");

    title.innerText = properties[property].title;
    image.src = properties[property].image;
    description.innerText = properties[property].description;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
};
