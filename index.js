window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    
    const visual = document.querySelector(".visuals");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];
    //sound functioning goes down here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    //function for creating bubbles
    const createBubble = (i) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[i];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }
});
