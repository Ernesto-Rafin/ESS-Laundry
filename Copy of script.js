// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
document.querySelector('#contact form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required. Please fill out the form completely.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for reaching out! We will get back to you shortly.');
    this.reset();
});

// Machine Availability Simulation
function updateMachineAvailability() {
    const machineStatus = ['Available', 'In Use', 'Out of Order'];
    const servicesGrid = document.querySelector('.services-grid');

    if (servicesGrid) {
        const machineStatusDiv = document.createElement('div');
        machineStatusDiv.className = 'service-item';
        machineStatusDiv.innerHTML = `
            <h3>Machine Availability</h3>
            <p>Status: <span id="machine-status">${machineStatus[Math.floor(Math.random() * machineStatus.length)]}</span></p>
            <button id="check-status" class="btn">Check Again</button>
        `;
        servicesGrid.appendChild(machineStatusDiv);

        document.getElementById('check-status').addEventListener('click', () => {
            const randomStatus = machineStatus[Math.floor(Math.random() * machineStatus.length)];
            document.getElementById('machine-status').textContent = randomStatus;
        });
    }
}

// Initialize Features
updateMachineAvailability();

// Function to display the advertisement after a delay
function showAd() {
    var adPopup = document.getElementById('ad-popup');
    adPopup.style.display = 'block';
}

// Delay of 5 seconds before showing the ad
setTimeout(showAd, 5000);