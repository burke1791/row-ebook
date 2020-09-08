document.addEventListener('DOMContentLoaded', function(event) {
  let form = document.getElementById('signupForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let email = document.getElementById('emailInput').value;
    let mobi = document.getElementById('mobiCheckbox').checked;
    let epub = document.getElementById('epubCheckbox').checked;
    let pdf = document.getElementById('pdfCheckbox').checked;

    console.log(email, mobi, epub, pdf);
  });
});