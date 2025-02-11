const emojis = [
        "😀",
        "🎉",
        "🚀",
        "🌟",
        "🔥",
        "💖",
        "🍀",
        "🎶",
        "💎",
        "⚡",
      ];
      const sounds = [
        "sounds/bubbles.mp3",
        "sounds/clay.mp3",
        "sounds/confetti.mp3",
        "sounds/corona.mp3",
        "sounds/dotted-spiral.mp3",
        "sounds/flash-1.mp3",
        "sounds/flash-2.mp3",
        "sounds/flash-3.mp3",
        "sounds/glimmer.mp3",
        "sounds/moon.mp3",
        "sounds/pinwheel.mp3",
        "sounds/piston-1.mp3",
        "sounds/piston-2.mp3",
        "sounds/piston-3.mp3",
        "sounds/prism-1.mp3",
        "sounds/prism-2.mp3",
        "sounds/prism-3.mp3",
        "sounds/splits.mp3",
        "sounds/squiggle.mp3",
        "sounds/strike.mp3",
        "sounds/suspension.mp3",
        "sounds/timer.mp3",
        "sounds/ufo.mp3",
        "sounds/veil.mp3",
        "sounds/wipe.mp3",
        "sounds/zig-zag.mp3",
      ];

      document.addEventListener("keydown", () => {
        let emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        // let keys = event.key === " "? "Space" : event.key;
        // emoji.textContent = keys;
        let sound = sounds[Math.floor(Math.random() * sounds.length)];
        let audio = new Audio(sound);
        audio.play();
        emoji.style.position = "absolute";
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emoji.style.top = `${Math.random() * window.innerHeight}px`;
        emoji.style.fontSize = "20px";
        emoji.style.opacity = "1";
        emoji.style.transition = "all 1s ease-out";
        document.body.appendChild(emoji);

        setTimeout(() => {
          emoji.style.transform = "scale(3)";
          emoji.style.opacity = "0";
        }, 50);

        setTimeout(() => {
          emoji.remove();
        }, 1050);
      });