
    const menuButton = document.getElementById('menuButton');
        const menuContainer = document.getElementById('menuContainer');

        menuButton.addEventListener('click', () => {
            // Toggle spinning
            menuButton.classList.toggle('spin');
            // Toggle menu visibility
            menuContainer.style.display = menuContainer.style.display === 'block' ? 'none' : 'block';
        });

        function showAbout() {
            document.getElementById("home-section").style.display = "none";
            document.getElementById("about-section").style.display = "block";
        }
        
        function showHome() {
            document.getElementById("home-section").style.display = "block";
            document.getElementById("about-section").style.display = "none";
        }