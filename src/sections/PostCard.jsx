import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const PostCard = () => {
    const videoRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.post-card',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
        }
    })
    return (
        <section className="post-card">
            <div className="animated-gradient-bg" />
                <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700">
                    <img src="/images/overlay.webp" alt="" />
                    <video
                        src="/videos/postcard-vd.mp4"
                        muted
                        autoPlay
                        playsInline
                        ref={videoRef}
                    />
                      <button className="group-hover:bg-yellow transition duration-700">
                    Explore Leonida Keys
                </button>
                </div>
              
        </section>
    )
}

export default PostCard