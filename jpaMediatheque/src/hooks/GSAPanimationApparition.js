import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPanimationApparition(items) {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container?.children.length) return;

        const animation = gsap.fromTo(
            container.children,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.2,
                stagger: 0.05,
                ease: "power1.out"
            }
        );

        return () => animation.kill();
    }, [items]);

    return containerRef;
}
