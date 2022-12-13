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

export default registration;
