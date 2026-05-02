let currentStep = 1;

function loadSurvey() {
    const container = document.getElementById("surveyContent");

    container.innerHTML = `
    <div class="survey-wrapper">

        <!-- STEP 1 -->
        <div class="survey-step" id="step1">

            <h1 class="survey-title">Demographic Profile</h1>

            <div class="survey-block">
                <label class="survey-label">Age:</label>
                <input type="text" class="survey-input">
            </div>

            <div class="survey-block">
                <label class="survey-label">Gender:</label>
                <div class="survey-options">
                    <label><input type="radio" name="gender"> Male</label>
                    <label><input type="radio" name="gender"> Female</label>

                    <div class="survey-inline">
                        <label><input type="radio" name="gender"> Other:</label>
                        <input type="text" class="survey-inline-input">
                    </div>
                </div>
            </div>

            <div class="survey-block">
                <label class="survey-label">Course Year and Level:</label>
                <input type="text" class="survey-input">
            </div>

            <div class="survey-block">
                <label class="survey-label">Experience with similar systems:</label>
                <div class="survey-options">
                    <label><input type="radio" name="exp"> Yes</label>
                    <label><input type="radio" name="exp"> No</label>
                </div>
            </div>

            <div class="survey-block">
                <label class="survey-label">Frequency of technology use:</label>
                <div class="survey-options">
                    <label><input type="radio" name="freq"> Daily</label>
                    <label><input type="radio" name="freq"> Weekly</label>
                    <label><input type="radio" name="freq"> Monthly</label>
                </div>
            </div>

            <button class="btn-continue" onclick="nextStep()">Next</button>
        </div>

        <!-- STEP 2 -->
        <div class="survey-step hidden" id="step2">

            <h1 class="survey-title">System Usability Scale (SUS)</h1>

            <div class="survey-block">
    <p class="survey-text">
        Please read each statement carefully, select and check the number that best represents your level of agreement based on your experience while using the system.
    </p>

    <p class="survey-scale-title">Use the scale below:</p>

    <div class="survey-scale">
        <span>1 – Strongly Disagree</span>
        <span>2 – Disagree</span>
        <span>3 – Neutral</span>
        <span>4 – Agree</span>
        <span>5 – Strongly Agree</span>
    </div>
</div>

            ${generateSUSQuestions()}

            <button class="btn-back" onclick="prevStep()">Back</button>
            <button class="btn-continue" onclick="nextStep()">Next</button>
        </div>

        <!-- STEP 3 -->
        <div class="survey-step hidden" id="step3">

            <h1 class="survey-title">Feedback</h1>

            <div class="survey-block">
                <label class="survey-label">What did you like about the system?</label>
                <textarea class="survey-input"></textarea>
            </div>

            <div class="survey-block">
                <label class="survey-label">What improvements can you suggest?</label>
                <textarea class="survey-input"></textarea>
            </div>

            <button class="btn-back" onclick="prevStep()">Back</button>
            <button class="btn-submit" onclick="submitSurvey()">Submit</button>
        </div>

    </div>
    `;
}

function generateSUSQuestions() {
    const questions = [
        "I think that I would like to use this system frequently",
        "I found the system unnecessarily complex",
        "I thought the system was easy to use",
        "I think that I would need the support of a technical person",
        "I found the various functions were well integrated",
        "I thought there was too much inconsistency in this system",
        "I would imagine most people would learn this system quickly",
        "I found the system very cumbersome to use",
        "I felt very confident using the system",
        "I needed to learn a lot before I could use this system"
    ];

    let html = "";

    questions.forEach((q, i) => {
        html += `
        <div class="survey-block">
            <label class="survey-label">${i + 1}. ${q}</label>

            <div class="survey-options horizontal">
                ${[1,2,3,4,5].map(n => `
                    <label>
                        <input type="radio" name="q${i}">
                        ${n}
                    </label>
                `).join("")}
            </div>
        </div>
        `;
    });

    return html;
}

function nextStep() {
    document.getElementById("step" + currentStep).classList.add("hidden");
    currentStep++;
    document.getElementById("step" + currentStep).classList.remove("hidden");
}

function prevStep() {
    document.getElementById("step" + currentStep).classList.add("hidden");
    currentStep--;
    document.getElementById("step" + currentStep).classList.remove("hidden");
}

function submitSurvey() {
    alert("Survey Submitted!");
    closeModal("surveyModal");
}