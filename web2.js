document.addEventListener('DOMContentLoaded', function() {
    const symptoms = document.querySelectorAll('.symptom');

    symptoms.forEach(symptom => {
        symptom.addEventListener('click', function() {
            // Remove 'selected' class from all symptoms
            symptoms.forEach(s => {
                s.classList.remove('selected');
            });
            // Add 'selected' class to the clicked symptom
            this.classList.add('selected');
        });
    });
});