window.addEventListener("DOMContentLoaded", function(){

    VANTA.WAVES({
        el: "#waves",
        color: 0x280664,
        shininess: 52.00,
        waveHeight: 22.00,
        waveSpeed: 1.25,
        zoom: 1.1,
        mouseControls: true,
        touchControls: true,
        scale: 1.00,
        scaleMobile: 1.00
    })

    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

    formbutton("create", {
        action: "https://formspree.io/mgenlrlw",
        title: "Make contact",
        description: "Now seeking dreamers, healers, and testers",
        fields: [{
            name: "Email",
            type: "email",
            label: "Your email",
            required: true
        }, {
            name: "Message",
            type: "textarea",
        }, {
            type: "submit",
        }],
        styles: {
            fontFamily: '"Lato", sans-serif',
            title: {
                background: "#5d17d9"
            },
            description: {
                background: "#1695c5",
                padding: "16px 40px 16px 16px",
            },
            button: {
                background: "#1695c5"
            }
        },
    });

    window.addEventListener("scroll", function fadeInFormbutton() {
        var fbc = document.getElementById("formbutton-container");
        if (window.pageYOffset >= 240) {
            if (typeof fbc !== "undefined") {
                fbc.classList.add("shown");
                window.removeEventListener("scroll", fadeInFormbutton);
            }
        }
    })

    window.onload = function() {
        var moar1 = localStorage.getItem("moar1");
        var moar2 = localStorage.getItem("moar2");
        var moar3 = localStorage.getItem("moar3");
        if (moar1 === "true") document.getElementById("moar1").checked = moar1;
        if (moar2 === "true") document.getElementById("moar2").checked = moar2;
        if (moar3 === "true") document.getElementById("moar3").checked = moar3;

        var waveEl = document.getElementById("waves");
        waveEl.classList.add("shown");
    }

    window.onbeforeunload = function() {
        var moar1 = document.getElementById("moar1").checked;
        var moar2 = document.getElementById("moar2").checked;
        var moar3 = document.getElementById("moar3").checked;
        localStorage.setItem("moar1", moar1);
        localStorage.setItem("moar2", moar2);
        localStorage.setItem("moar3", moar3);
    }
})
