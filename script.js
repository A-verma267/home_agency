
tailwind.config = {
    theme: {
        extend: {
            // Extending Tailwind's backgroundColor configuration
            // Adds custom background colors for use with bg-* classes
            backgroundColor: {
                'rgba-blue': '#040e29',      // Dark blue background
                'rgba-skin': 'rgb(255 232 158)', // Light skin/beige background
                'rgba-white': 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
                'blur': 'rgb(119 159 255)',
                'a': '#c19000',
                'azure': '#f0ffff',
                'connect': '#cc51cc',
            },
            // Extending Tailwind's general colors configuration
            // These colors can be used for various properties that accept colors
            colors: {
                'rgba-blue': '#040e29',      // Dark blue color - Use with: text-rgba-blue, bg-rgba-blue, border-rgba-blue
                'rgba-skin': 'rgb(255 232 158)', // Light skin/beige color - Use with: text-rgba-skin, bg-rgba-skin, border-rgba-skin 
                'rgba-white': 'rgba(255, 255, 255, 0.9)', // Semi-transparent white - Use with: text-rgba-white, bg-rgba-white, border-rgba-white
            },
            // Extending Tailwind's text color configuration 
            // Adds custom text colors for use with text-* classes
            textColor: {
                'purple': '#3b0489',
                'royal-blue': '#005197',      // Dark blue text
                'desccolor': '#000089', // Light skin/beige text
                'rgba-white': 'rgba(255, 255, 255, 0.9)', // Light skin/beige text
                'connect': '#f9f9f9', // Semi-transparent white text
                'office': '#2f2679', // Dark blue text
                "linearfrom": '#6b67c3',
                "linearto": '#001b56',
                'timing': '#2f2f2f', // Semi-transparent white text

                'heading': '#181881',      // Dark blue text
                'peach': '#ffd587', // Light skin/beige text
                'beige': '#f5f5dc',
                'stephead': '#771d00',// Semi-transparent white text
                'p': '#c8c8c8'
            },
            // Extending Tailwind's border color configuration
            // Adds custom border colors for use with border-* classes
            borderColor: {
                'rgba-blue': '#040e29',      // Dark blue border
                'rgba-skin': 'rgb(255 232 158)', // Light skin/beige border
                'rgba-white': 'rgba(255, 255, 255, 0.9)', // Semi-transparent white border
            }
        }
    }
}


const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

mobileMenu.addEventListener('click', (e) => {
    // Prevents click events from bubbling up to parent elements
    // This ensures clicks inside the mobile menu don't trigger the document click handler
    // that would close the menu
    e.stopPropagation();
});

document.querySelector('.mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

