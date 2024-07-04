function spinWheel() {
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spin-btn');
    const result = document.getElementById('result');

    // Disable button during spin
    spinBtn.disabled = true;

    // Calculate random spin duration
    const spinDuration = Math.floor(Math.random() * 3000) + 5000; // Random time between 5 to 8 seconds

    // Calculate random rotation amount
    const rotation = Math.floor(Math.random() * 3600) + 360; // Random rotation between 1 to 10 full spins

    // Apply CSS transition for smooth spinning
    wheel.style.transition = `transform ${spinDuration / 1000}s ease-out`;

    // Apply rotation to the wheel
    wheel.style.transform = `rotate(${rotation}deg)`;

    // Wait for spin to finish
    setTimeout(() => {
        // Enable button after spin
        spinBtn.disabled = false;

        // Calculate which section is in the center
        const totalRotation = rotation % 360;
        const sectionAngle = 360 / 8; // 8 sections on the wheel image

        // Calculate the index of the section the pointer is pointing to
        const selectedSectionIndex = Math.floor(((totalRotation + sectionAngle / 2) % 360) / sectionAngle);

        // Display result
        result.textContent = `Selected section index: ${selectedSectionIndex}`;
    }, spinDuration);
}
