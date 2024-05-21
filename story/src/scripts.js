document.addEventListener("DOMContentLoaded", function () {
    const scroller = scrollama();
    const video = document.getElementById('backgroundVideo');
    const section1Background = document.getElementById('section1-background');
    const body = document.body;
    let videoDuration;

    video.addEventListener('loadedmetadata', function() {
        videoDuration = video.duration;
    });

    const updateVideoPlayback = (progress) => {
        if (progress >= 0 && progress <= 1) {
            video.currentTime = progress * videoDuration;
            if (video.paused) {
                video.play();
            }
        } else if (progress > 1) {
            video.pause();
            video.currentTime = videoDuration;
        } else {
            video.pause();
            video.currentTime = 0;
        }
    };

    scroller
        .setup({
            step: ".step",
            offset: 0.5,
            debug: true
        })
        .onStepEnter(response => {
            const element = response.element;
            if (element.id === 'section1') {
                section1Background.style.opacity = '1';
                body.classList.remove('dark-mode');
                video.play();
            } else {
                section1Background.style.opacity = '0';
                body.classList.add('dark-mode');
                video.pause();
                video.currentTime = videoDuration;
            }
            element.classList.add('animate-in');
        })
        .onStepExit(response => {
            const element = response.element;
            element.classList.remove('animate-in');
        })
        .onStepProgress(response => {
            if (response.element.id === 'section1') {
                updateVideoPlayback(response.progress);
            }
        });

    window.addEventListener("resize", scroller.resize);
});
