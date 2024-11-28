const slides = document.querySelector('.slides');
let index = 0;
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();
document.getElementById('copyButton').addEventListener('click', function() {
  const upiID = document.getElementById('upiID').innerText;
  navigator.clipboard.writeText(upiID)
    .then(() => {
      const message = document.getElementById('copyMessage');
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    })
    .catch(err => {
      alert('Failed to copy UPI ID. Please try manually.');
      console.error('Copy failed', err);
    });
});
function showSlide() {
  index++;
  if (index >= slides.children.length) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showSlide, 3000); // Change slide every 3 seconds

