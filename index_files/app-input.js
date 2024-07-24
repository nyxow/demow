const setUp = () => {
    let part1 = document.querySelector("#part1");
    let part2 = document.querySelector("#part2");
    let color = document.querySelector("#color").value;
    let color_placeholder = document.querySelector("#animated");
    color_placeholder.style.backgroundColor = color;
    console.log(color_placeholder)
    let text = document.querySelector("#word").value;
    let word_placeholder = document.querySelector(".word-holder");
    let bgcolor = ["blue-pic.png", "orange-pic.png", "green-pic.jpeg", "grey-pic.jpeg", "pink-pic.png"];
    let first4 = color.substring(0, 4);
    console.log(first4)
    for (let i = 0; i < bgcolor.length; i++) {
        let bg4 = bgcolor[i].substring(0, 4);
        console.log(bg4)
        if(first4.toLowerCase() == bg4.toLowerCase()){
            color_placeholder.style.backgroundImage = `url('img/${bgcolor[i]}')`;
            console.log(`color is: ${color}, bgcolor is: ${bgcolor[i]}`);
            break;
        }
    }
    part1.style.display = "none";
    part2.style.display = "block";
    word_placeholder.innerHTML = text;

    
    // adjust color 
    
    const canvas = document.getElementById('fireflyCanvas');
    const ctx = canvas.getContext('2d');
    

    // Adjust canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;


    const fireflies = [];
    const numFireflies = 11;

    class Firefly {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 15 + 1; // Ensure size is not zero
            this.angle = Math.random() * 2 * Math.PI;
            this.speed = Math.random() * 0.2 + 0.5; // Ensure speed is not zero
        }

        update() {
            this.angle += (Math.random() - 0.5) * 0.2;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(255, 255, 255,0.8)';
            ctx.fill();
        }
    }

    function createFireflies() {
        for (let i = 0; i < numFireflies; i++) {
            fireflies.push(new Firefly());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireflies.forEach(firefly => {
            firefly.update();
            firefly.draw();
        });
        requestAnimationFrame(animate);
    }

    createFireflies();
    animate();


}


