// import './js/burger.js';
// import registration from './js/registration';
// import './js/stars.js';
// import "./js/map.js";
// import "./js/accordion.js";

// // * Get DOM element
// const registrationForm = document.getElementById('js-registration-form');
// console.log('registrationForm: ', registrationForm);

// // * Event listeners(підписка на події)
// registrationForm.addEventListener('submit',registration);
// registrationForm.addEventListener('reset', registration);



function initMap() {
  // The location of Uluru
  const Hall = { lat: 34.05307596521662, lng: -118.24356410187639 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    mapId: '5ca393f1e87a7b5d',
    center: Hall,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Hall,
    map: map,
    icon: 'assets/images/marker.png',
    title: 'Find us here!',
  });
}

// * Accordion
const aci = document.getElementsByClassName("accordion__item");
let i = 0;

for (let i = 0; i < aci.length; i++) {
  aci[i].addEventListener("click", function() {
    this.firstChild.classList.toggle("active");
    let body = this.lastChild;

    if (body.style.display == "block") {
      body.style.display = "none";
      // this.style.transform = "rotate(-180deg)";
    } else {
      body.style.display = "block";
      // this.style.transform = "rotate(-180deg)";
    }
  });
}


// * Swiper
const swiper = new Swiper('.js-swiper', {
  speed: 400,
  spaceBetween: 50,
  effect: 'cards',
  cardsEffect: {
    // ...
  },
})

document.getElementById('js-prev').addEventListener('click', () => {
  swiper.slidePrev()
})

document.getElementById('js-next').addEventListener('click', () => {
  swiper.slideNext()
})




// * Modal
const button = document.getElementById("js-button");
const closeBtn = document.getElementById("js-close-btn");

const modal = document.getElementById("js-modal");
const modalBody = document.getElementById("js-modal-body");

button.addEventListener("click", () => {
  modal.classList.toggle("modal__open");
});

modal.addEventListener("click", (some) => {
  if (some.target != modalBody) {
    modal.classList.remove("modal__open");
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal__open");

});



// * burger 
const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active')
  headerNavigation.classList.toggle('open')
})



// * Registration
const innerText = (id, value) =>
  (document.getElementById(id).innerText = value);

const item = {
  firstName: {
    id: "js-registration-first-name-error",
    errors: {
      noName: "Введіть, будь ласка, ім'я",
      minLenght: "Має бути не менше 3 символів",
    },
    minLenght: 3,
  },
  lastName: {
    id: "js-registration-last-name-error",
    errors: {
      noName: "Введіть, будь ласка, прізвище",
      minLenght: "Має бути не менше 3 символів",
    },
    minLenght: 3,
  },
};
// * Перевірка електронної пошти
const regPost = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
// * Перевірка на пробіли
const regSpace = /\w+\s/g;

// const resetForm = ;

const registration = (event) => {
  event.preventDefault();

  // Створили форму
  const form = new FormData(event.target);

  // * Перевірки поля First Name
  const firstName = form.get("firstName");
  if (!firstName) {
    innerText(item.firstName.id, item.firstName.errors.noName);
  } else if (firstName.length < item.firstName.minLenght) {
    innerText(item.firstName.id, item.firstName.errors.minLenght);
  } else {
    innerText(item.firstName.id, "");
  }

  // * Перевірки поля Last Name
  const lastName = form.get("lastName");
  if (!lastName) {
    innerText('js-registration-last-last-error', 'Введіть, будь ласка, прізвище');
  } else  if (lastName.length < 3) {
    innerText('js-registration-last-last-error', 'Має бути не менше 3 символів');
  } else if (lastName.test(regSpace)) {
    innerText('js-registration-last-last-error', 'Не має бути пробілів');
  } else {
    innerText('js-registration-last-last-error', '');
  }
  

  // if (!lastName) {
  //   innerText(item.lastName.id, item.lastName.errors.noName);
  // } else if (lastName.length < item.lastName.minLenght) {
  //   innerText(item.lastName.id, item.lastName.errors.minLenght);
  // } else {
  //   innerText(item.lastName.id, "");
  // }

  // * Перевірка поля E-mail
  const email = form.get("email");
  if (!email) {
    innerText('js-registration-email-error', 'Введіть, будь ласка, пошту');
  } else if (!regPost.test(email)) {
    innerText('js-registration-email-error', 'не коректно введена пошта');
  } else {
    innerText('js-registration-email-error', '');
  }

  // * Перевірка поля Username
  const username = form.get("username");

  // * Перевірка поля Password
  const password = form.get("password");
  if (!password) {
    innerText('js-registration-password-error', 'Введіть, будь ласка, пароль');
  } else if (password.length < 8) {
    innerText('js-registration-password-error', 'Пароль має бути не менше 8 символів');
  } else {
    innerText('js-registration-password-error', '');
  }

  // * Перевірка поля Language
  const language = form.get("language");

  // * Збираємо масив даних
  const requestData = {
    role: 1,
    firstName,
    lastName,
    email,
    username,
    password,
    disabledSeasonAnimation: true,
    language,
  };

  const URL =
    "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";
  console.log("Data:", requestData);

  fetch(URL, {
    method: "post",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json)
    .then((response) => {
      console.log("response:", response);
      if (response.success) {
        //
      }
    });
};
