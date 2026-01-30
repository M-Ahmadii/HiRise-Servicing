window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 10) {
    navbar.style.zIndex = "100";
  } else {
    navbar.style.zIndex = "100";
  }
});

function toggleMenu() {
  document.getElementById("responsiveMenu").classList.toggle("hidden");
}
/*********************************************************************************
                                   form
************************************************************************************/

const form = document.getElementById("pmForm");
const statusEl = document.getElementById("pmStatus");
const submitBtn = document.getElementById("pmSubmit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusEl.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const data = {
    name: form.name.value.trim(),
    company: form.company.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    units: form.units.value.trim(),
    service: form.service.value,
    message: form.message.value.trim(),
  };

  try {
    const res = await fetch("http://localhost:5000/api/property-manager", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const out = await res.json();

    if (!res.ok) {
      throw new Error(out?.message || "Something went wrong");
    }

    statusEl.textContent = "✅ Sent successfully. We’ll contact you soon.";
    form.reset();
  } catch (err) {
    statusEl.textContent = "❌ " + err.message;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Request";
  }
});
