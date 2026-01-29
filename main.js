
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberCircles = document.querySelectorAll('.number-circle');

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers);
    }

    function displayNumbers(numbers) {
        numberCircles.forEach((circle, index) => {
            circle.textContent = ''; // Clear previous numbers
            setTimeout(() => {
                circle.textContent = numbers[index];
                // You can add a class here for animation
            }, index * 200); // Stagger the appearance of numbers
        });
    }
});
