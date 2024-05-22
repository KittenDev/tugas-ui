document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', event => {
      // remove bold from all items
      document.querySelectorAll('.list-group-item').forEach(item => {
        item.classList.remove('bold');
      });
      // add bold to clicked item
      event.target.classList.add('bold');
    })
  });

document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector(`#list-tab a[href="#${id}"]`).classList.add('bold');
            } else {
                document.querySelector(`#list-tab a[href="#${id}"]`).classList.remove('bold');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});