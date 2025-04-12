const closeModal = document.getElementById("close");
const containerUser= document.getElementById("container-user");

closeModal.addEventListener("click", function() {
    containerUser.style.display = "none";
});
document.getElementById("openModal").addEventListener("click", function() {
    containerUser.style.display = "block";
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }