  // تحديد جميع العناصر الداخلية للعنصر الأب الذي يحمل كلاس 'content'
  const parent = document.querySelector('.content1');
  const childDivs = parent.querySelectorAll('div');

  // إعداد مراقب باستخدام Intersection Observer API
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // إضافة كلاس 'show' عند ظهور العنصر
        observer.unobserve(entry.target); // وقف مراقبة العنصر بعد ظهوره
      }
    });
  });

  // مراقبة كل 'div' داخل '.content'
  childDivs.forEach(div => observer.observe(div));
