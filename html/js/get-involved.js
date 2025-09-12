document.getElementById("involvedForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let interest = document.getElementById("interest").value;

  if(name === "" || email === "" || interest === ""){
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  alert(`🎉 Thank you, ${name}! We’ll reach out to you about ${interest}.`);
  this.reset();
});
