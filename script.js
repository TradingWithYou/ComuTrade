document.addEventListener('DOMContentLoaded', function() {
    const totalPot = document.getElementById('total-pot');
    const userContribution = document.getElementById('user-contribution');
    const profitSlider = document.getElementById('profit-slider');
    const profitValue = document.getElementById('profit-value');
    const profitShare = document.getElementById('profit-share');
    const totalPotValue = document.getElementById('total-pot-value');
    const userContributionValue = document.getElementById('user-contribution-value');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateProfit() {
        const pot = parseFloat(totalPot.value);
        const contribution = parseFloat(userContribution.value);
        const profitPercent = parseFloat(profitSlider.value);
        const maxContribution = pot * 0.5;

        if (contribution > maxContribution) {
            userContribution.value = maxContribution;
        }

        const profit = (contribution / pot) * (profitPercent / 100) * pot;
        profitShare.textContent = profit.toFixed(2);

        updateGrowthChart(pot, profitPercent);
    }

    function updateGrowthChart(pot, profitPercent) {
        // Clear previous chart data
        // Example placeholder logic - implement real chart update code here
        console.log('Updating growth chart with pot:', pot, 'and profitPercent:', profitPercent);
    }

    function onScroll() {
        const scrollPos = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                link.classList.add('active');
            }
        });
    }

    totalPot.addEventListener('change', function() {
        totalPotValue.textContent = totalPot.value;
        updateProfit();
    });

    userContribution.addEventListener('input', function() {
        userContributionValue.textContent = userContribution.value;
        updateProfit();
    });

    profitSlider.addEventListener('input', function() {
        profitValue.textContent = profitSlider.value + '%';
        updateProfit();
    });

    // Initial update
    updateProfit();

    // Event listener for scroll
    window.addEventListener('scroll', onScroll);
});
