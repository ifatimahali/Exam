let nameU = document.getElementById('name')
let username = document.getElementById('username')
let email = document.getElementById('email')
let Password = document.getElementById('Password')
let btn = document.getElementById('btn').addEventListener("click" , () =>
    {
})



fetch('https://666078ae5425580055b40fca.mockapi.io/Exam', {
  method: 'POST',
  body: JSON.stringify({
    nameU: nameU.value,
    username : username.value,
    email: email.value,
    Password: Password.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

