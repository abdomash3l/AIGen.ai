        // تحديد جميع عناصر الديف
        const divs = document.querySelectorAll('div');

        // إنشاء مراقب باستخدام Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // إذا دخل العنصر في مجال الرؤية
                    entry.target.classList.add('visible'); // إضافة كلاس visible
                    observer.unobserve(entry.target); // إلغاء المراقبة بعد ظهوره
                }
            });
        });

        // مراقبة كل عنصر ديف
        divs.forEach(div => observer.observe(div));

