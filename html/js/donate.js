document.getElementById("donationForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let amount = document.getElementById("amount").value.trim();

  if(name === "" || email === "" || phone === "" || amount === ""){
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  if(isNaN(amount) || amount <= 0){
    alert("⚠️ Please enter a valid donation amount.");
    return;
  }

  alert(`🎉 Thank you, ${name}! Your donation of ₦${amount} has been received.`);
  this.reset();
});
