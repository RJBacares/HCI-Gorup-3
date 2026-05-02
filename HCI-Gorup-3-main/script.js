// =========================
// MODAL FUNCTIONS
// =========================
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// =========================
// CONSENT → SUS FLOW
// =========================
function openForm() {
    closeModal('consentModal');
    openModal('surveyModal'); // or susModal depende sa HTML mo
}

// =========================
// SUBMIT SUS
// =========================
function submitSUS() {
    alert("SUS responses submitted successfully!");
    closeModal('surveyModal');
}


// =========================
// MODAL CORE FUNCTIONS
// =========================

function openModal(id){
    document.getElementById(id).style.display = "flex";
}

function closeModal(id){
    document.getElementById(id).style.display = "none";
}