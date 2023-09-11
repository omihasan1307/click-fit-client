document.getElementById("submitBtn").addEventListener("click", () => {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const typeField = document.getElementById("type");
  const activeField = document.getElementById("active");

  const email = emailField.value;
  const password = passwordField.value;
  const type = typeField.value;
  const active = activeField.value;

  fetch("http://localhost:5000/addUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, type, active }),
  }).then((e) => {
    emailField.value = "";
    passwordField.value = "";
    typeField.value = "";
    activeField.value = "";
    alert("User add Successfull");
    getUsers();
  });
});

function getUsers() {
  var url = "http://localhost:5000/addUsers";
  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      var dataList = $("#data-list");
      dataList.empty();

      $.each(data, function (index, item) {
        dataList.append(
          `<li class="mb-2">
            <h6>Email: ${item.email}</h6>
            <p>Type : ${item.type}</p>
          </li>`
        );
      });
    },
    error: function (error) {
      console.log("Error:", error);
    },
  });
}

$(document).ready(getUsers);
