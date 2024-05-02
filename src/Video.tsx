import { useRef, useEffect, useState } from 'react'
import "./index.css"

export interface Subtitle {
    startTime: number;
    endTime: number;
    text: string;
}

export interface VideoProps {
    videoSource: string,
    subtitles?: Subtitle[],
    handleVideoEnding?: () => void | null
}

export default function Video({ videoSource, subtitles, handleVideoEnding }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentSubtitle, setCurrentSubtitle] = useState("")
    const [isPaused, setIsPaused] = useState(false)

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current?.currentTime || 0
        const subtitle = subtitles?.find(sub =>
            currentTime >= sub.startTime && currentTime <= sub.endTime
        );
        setCurrentSubtitle(subtitle ? subtitle.text : '')

        if (videoRef.current?.ended) {
            handleVideoEnding && handleVideoEnding()
        }
    }

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPaused(videoRef.current.paused)
        }
    };

    useEffect(() => {
        // Function to resize the video based on the container size
        const resizeVideo = () => {
            // Get the video container and the video element
            const videoContainer = document.querySelector('.video--container');
            const video = videoRef.current;
            if (videoContainer && video) {
                // Calculate the new width and height for the video to maintain aspect ratio
                const videoWidth = video.videoWidth;
                const videoHeight = video.videoHeight;
                const containerWidth = videoContainer.clientWidth;
                const containerHeight = containerWidth * (videoHeight / videoWidth);
                // Set the new width and height for the video element
                video.style.width = `${containerWidth}px`;
                video.style.height = `${containerHeight}px`;
            }
        };

        // Add event listener for window resize and call resizeVideo
        window.addEventListener('resize', resizeVideo);
        resizeVideo();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', resizeVideo);
        };
    }, []);

    return (
        <div className="video--container" onClick={handleVideoClick}>
            <video
                ref={videoRef}
                src={`/videos/${videoSource}`}
                controls={false}
                autoPlay
                onTimeUpdate={handleTimeUpdate}
                playsInline
            />
            {isPaused && (<div className="paused-overlay">⏸</div>)}
            <h2>{currentSubtitle}</h2>
        </div>
    )
}