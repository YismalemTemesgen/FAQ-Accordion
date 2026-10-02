
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {

    const isActive = item.classList.contains('active');

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove('active');
      const otherIcon = otherItem.querySelector('.icon');
      if (otherIcon) {
        otherIcon.src = './assets/images/icon-plus.svg';
      }
    });
    if (!isActive) {
      item.classList.add('active');
      icon.src = './assets/images/icon-minus.svg';
    }
  });
});