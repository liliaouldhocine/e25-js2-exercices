fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("app").innerHTML = `
      <ul>${data.users.map((user) => `<li>${user}</li>`).join("")}</ul>
    `;
  });
