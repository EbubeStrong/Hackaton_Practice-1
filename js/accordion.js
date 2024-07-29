// document.addEventListener('DOMContentLoaded', function() {
//     const accordions = document.querySelectorAll('.accordion');

//     accordions.forEach((accordion, index) => {
//         accordion.addEventListener('click', function() {
//             const panel = this.nextElementSibling;
//             panel.classList.toggle('show');
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const accordions = document.querySelectorAll('.accordion');

//     accordions.forEach((accordion, index) => {
//         accordion.addEventListener('click', function() {
//             const panel = this.nextElementSibling;
//             panel.classList.toggle('show');
//         });
//     });
// });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const accordions = document.querySelectorAll('.accordion');

    //     accordions.forEach((accordion) => {
    //         accordion.addEventListener('click', function() {
    //             const panelId = this.getAttribute('data-target');
    //             const panel = document.querySelector(panelId);
    //             panel.classList.toggle('show');
    //         }    )
    // })
    // })
    
    // document.addEventListener('DOMContentLoaded', function() {
    //     const accordions = document.querySelectorAll('.accordion');

    //     accordions.forEach((accordion) => {
    //         accordion.addEventListener('click', function() {
    //             const panelId = this.getAttribute('data-target');
    //             const panel = document.querySelector(panelId);

    //             // Close all panels
    //             document.querySelectorAll('.panel').forEach(p => {
    //                 if (p !== panel) {
    //                     p.classList.remove('show');
    //                 }
    //             });

    //             // Toggle the clicked panel
    //             panel.classList.toggle('show');
    //             panel.classList.toggle('active');
    //         });
    //     });
    // });

    document.addEventListener('DOMContentLoaded', function() {
        const accordions = document.querySelectorAll('.accordion');
    
        accordions.forEach((accordion) => {
            accordion.addEventListener('click', function() {
                const panelId = this.getAttribute('data-target');
                const panel = document.querySelector(panelId);
    
                // Toggle the clicked panel
                panel.classList.toggle('show');
    
                // Toggle the active class for the button
                this.classList.toggle('active');
    
                // Close all other panels and remove active class from other buttons
                accordions.forEach((otherAccordion) => {
                    if (otherAccordion !== this) {
                        const otherPanelId = otherAccordion.getAttribute('data-target');
                        const otherPanel = document.querySelector(otherPanelId);
                        otherPanel.classList.remove('show');
                        otherAccordion.classList.remove('active');
                    }
                });
            });
        });
    });
    