document.getElementById('resource-category').addEventListener('change', function () {
    const selectedCategory = this.value;
    const resources = document.querySelectorAll('.resource-card');

    resources.forEach(function (resource) {
        if (selectedCategory === 'all' || resource.getAttribute('data-category') === selectedCategory) {
            resource.classList.remove('hidden');
        } else {
            resource.classList.add('hidden');
        }
    });
});
