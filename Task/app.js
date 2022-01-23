document.getElementById("btn").addEventListener("click", function () {
  fetch("https://gorest.co.in/public/v1/users")
    .then((response) => response.json())
    .then((data) => {
      let fatchedData = data.data;
      // console.log(fatchedData);

      for (let i of fatchedData) {
        console.log(i.name);
        const showData = document.getElementById("data");
        showData.innerHTML = `
          <p> Name: ${i.name}</p>
          <p>Gender: ${i.gender}</p>
          <p>Email: ${i.email}</p>
          <p>Status: ${i.status}</p>
          `;
      }
    });
});
