document.addEventListener('DOMContentLoaded', () => {
    // Number counter animation for stats
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const statValues = document.querySelectorAll('.stat-value');

    // Simulate real data animation fetching
    setTimeout(() => {
        statValues.forEach(val => {
            const rawText = val.innerText.replace(',', '');
            const target = parseInt(rawText);
            if (!isNaN(target)) {
                animateValue(val, Math.floor(target * 0.5), target, 1500);
            }
        });
    }, 500);

    // Randomize live map items for "active" feeling
    const hotspots = document.querySelectorAll('.hotspot');

    setInterval(() => {
        hotspots.forEach(spot => {
            // Randomly flash hotspots
            if (Math.random() > 0.7) {
                spot.style.transform = "translate(-50%, -50%) scale(1.3)";
                setTimeout(() => {
                    spot.style.transform = "translate(-50%, -50%) scale(1)";
                }, 300);
            }
        });
    }, 2000);

    // Removed sidebar nav preventDefault hack because we use real links now

    // Simulated Action Buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('outline')) return;
            const originalText = this.innerText;
            this.innerText = 'Processing...';
            this.style.background = '#3b82f6';
            this.style.color = '#fff';

            setTimeout(() => {
                this.innerText = 'Confirmed';
                this.style.background = '#10b981';

                setTimeout(() => {
                    this.innerText = originalText;
                    this.style.background = '';
                }, 2000);
            }, 1000);
        });
    });
});
