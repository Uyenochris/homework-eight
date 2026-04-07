const popopop = document.querySelector("#popopop");
const wawawa = document.querySelectorAll("nav a");

const aquaaqua = {
  wishwish: {
    title: "Welcome to Pet Adoption Center",
    image: "images/bigstock-Cat-And-Dog-31061641-scaled.jpg",
    content: "<p>We help pets find loving homes. Every animal deserves a safe place to live and someone to care for them. Our team works hard to make sure each pet is healthy and ready to go home. You can look at our pets and find one that is right for you. We want every pet and family to be happy together.We help pets find loving homes.</p>"
  },

  nonono: {
    title: "About Us",
    image: "images/kitty.green66--2.webp",
    content: "<p>We work to help animals find good homes. Our team takes care of pets and makes sure they are safe and healthy. We spend time with each animal so they feel comfortable and ready to be adopted. We believe every pet deserves love and care. Our goal is to help both pets and families feel happy.We work to help animals find good homes.</p>"
  },

  ihhiih: {
    title: "Our Services",
    image: "images/header_cats_and_dogs.webp",
    content: "<p>We help people adopt pets and learn how to take care of them. We give simple advice about feeding, training, and keeping pets healthy. Our team helps match pets with the right families. We also answer questions and guide new pet owners. We want the adoption process to be easy and smooth.We help people adopt pets and learn how to take care of them.</p>"
  },

  wawawa_contact: {
    title: "Contact Us",
    image: "images/XUGEPVQJJMI6LBP3WAQRGYECEI.jpg",
    content: `
      <p>Feel free to contact us anytime. We are happy to answer your questions and help you find the right pet. Our team is here to guide you through the adoption process. You can send us a message or reach out by phone. We look forward to helping you soon.Feel free to contact us anytime.</p>

      <div class="contact">
        <h2>Send a Message</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Tell us a little about what you're looking for"></textarea>

        <button>Send</button>

        <div class="info">
        
        </div>
      </div>
    `
  }
};

function aquaaquaRender(pageId) {
  const page = aquaaqua[pageId];
  if (!page) return;

  let html = `<h1>${page.title}</h1>`;

  if (page.image) {
    html += `<img src="${page.image}" alt="${page.title}">`;
  }

  html += `<div>${page.content}</div>`;

  popopop.innerHTML = html;

  wawawa.forEach(link => {
    link.classList.remove("active");
  });

  const currentLink = document.getElementById(pageId);
  if (currentLink) {
    currentLink.classList.add("active");
  }
}

wawawa.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    aquaaquaRender(this.id);
  });
});

aquaaquaRender("wishwish");