import "../css/styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".feedback-form");
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;
    const STORAGE_KEY = "feedback-form-state";

    // Önceki verileri geri yükleme
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        emailInput.value = email || "";
        messageInput.value = message || "";
    }

    // Formdaki değişiklikleri kaydetme
    form.addEventListener("input", () => {
        const formData = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    });

    // Formu gönderme işlemi
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!emailInput.value || !messageInput.value) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        console.log({
            email: emailInput.value,
            message: messageInput.value
        });

        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    });
});
