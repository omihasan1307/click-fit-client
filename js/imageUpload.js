const imageInput = document.getElementById("imageInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click", function (event) {
  const selectedFile = imageInput.files[0];
  if (selectedFile) {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(formData);

    // Make a POST request to your server-side script
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Image uploaded successfully!");
        } else {
          alert("Image upload failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please select an image first.");
  }
});
