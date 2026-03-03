function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected step
    const nextEl = document.querySelector(`.quiz-step[data-step="${step}"]`);
    if (nextEl) {
        nextEl.classList.add('active');
    }
}

function finishQuiz() {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(el => {
        el.classList.remove('active');
    });

    // Show loader
    const loadingStep = document.getElementById('loading-step');
    loadingStep.classList.add('active');

    // AFFILIATE REDIRECTION
    // Replace the URL below with your actual Moonreading affiliate link
    const affiliateURL = "https://hop.clickbank.net/?affiliate=YOUR_ID&vendor=moonread";

    setTimeout(() => {
        window.location.href = affiliateURL;
    }, 2000);
}
