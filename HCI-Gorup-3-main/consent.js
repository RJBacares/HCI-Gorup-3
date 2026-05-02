function loadConsentForm() {
    const container = document.getElementById("consentContent");

    if (!container) return;

    container.innerHTML = `
        <span class="close" onclick="closeModal('consentModal')">&times;</span>

        <div class="consent-wrapper">

            <h1 class="consent-title">
                Usability Evaluation of “BicolWork: Job Matching System for Local Workers”
            </h1>

            <p class="consent-text">
                We are students conducting a study about “BicolWork,” a system designed to assist
                jobseekers in finding employment that matches their skills and preferences. The system
                addresses common challenges such as the overwhelming number of job listings and the
                lack of personalized guidance by providing relevant job listings and tailored recommendations.
            </p>

            <p class="consent-text">
                You are invited to participate in this study to evaluate the system’s usability and
                effectiveness. Your feedback will help improve the system and enhance its user experience.
            </p>

            <div class="consent-author">
                <strong>MICHAEL B. AMATA</strong><br>
                Course Instructor, Computational Sciences Department
            </div>

            <hr>

            <h3 class="consent-subtitle">What you will do:</h3>

            <ul class="consent-list">
                <li>Use or explore the BicolWork system</li>
                <li>Answer a System Usability Scale (SUS) questionnaire based on your experience</li>
            </ul>

            <p class="consent-text">
                Your participation will take approximately 10–15 minutes.
            </p>

            <p class="consent-text">
                Participation is voluntary, and you may withdraw at any time without any consequences.
                All information gathered in this study will be kept confidential. Your identity will not be
                disclosed, and the data will only be used for academic purposes.
            </p>

            <p class="consent-warning">
                There are minimal risks involved, mainly the time required to complete the questionnaire.
                However, your participation will help improve the system and may benefit future users
                by making job searching more efficient and accessible.
            </p>

            <hr>

            <h3 class="consent-subtitle">Contact Information</h3>

            <p class="consent-text">
                Group Leader: Romel P. Bacares Jr.<br>
                Email: rbacares.pbox@parsu.edu.ph
            </p>

            <hr>

            <label class="consent-checkbox">
                <input type="checkbox" id="consentCheck">
                <span>
                    I have read and understood the information provided above.
                    I voluntarily agree to participate in this study.
                </span>
            </label>

            <button class="btn-continue" id="continueBtn" disabled>
                Continue to Questionnaire
            </button>

        </div>
    `;

    const check = document.getElementById("consentCheck");
    const btn = document.getElementById("continueBtn");

    check.addEventListener("change", function () {
        btn.disabled = !this.checked;
    });

    btn.addEventListener("click", function () {
        openForm();
    });
}

function openForm() {
    closeModal('consentModal');
    openModal('surveyModal');
    loadSurvey(); // IMPORTANT
}