function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected step
    const nextEl = document.querySelector(.quiz-step[data-step="${step}"]);
    if (nextEl) {
        nextEl.classList.add('active');
    }
}

function finishQuiz() {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(el => {
        el.classList.remove('active');
    });

    // PINTEREST TRACKING - LEAD EVENT
    if (window.pintrk) { pintrk('track', 'lead'); }

    // Show loader
    const loadingStep = document.getElementById('loading-step');
    loadingStep.classList.add('active');

    // AFFILIATE REDIRECTION
    const affiliateURL = "https://a.moonmystical.com/optin1724860719225#aff=jefersonkeko15e9cd";

    setTimeout(() => {
        window.location.href = affiliateURL;
    }, 2000);
}