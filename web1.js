document.addEventListener('DOMContentLoaded', function() {
    const symptoms = document.querySelectorAll('.symptom');
    
    symptoms.forEach(symptom => {
      symptom.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    });
  });
  