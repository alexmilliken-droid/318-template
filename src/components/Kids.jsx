import PageTemplate from "./PageTemplate";

export default function Kids() {
    const sections = [
        {
            title: "A Family Integrated Church",
            Description: () => (
                <div className="space-y-4">
                    <p>
                        At 3:18 Bible Church, we love having families worship together! We believe that children benefit immensely from watching their parents pray, sing, and listen to the teaching of God's Word. 
                    </p>
                    <p>
                        Wiggling and small noises don't phase us—they are signs of a growing, vibrant church family. We welcome your children in the main service with open arms.
                    </p>
                </div>
            ),
            image: '/churchImages/Kids.webp', // Replace with a family/kids photo if you have one
            imgSize: 'aspect-[16/9]',
        },
        {
            title: "Comfort for Moms & Little Ones",
            Description: () => (
                <div className="space-y-4">
                    <p>
                        We know that training young hearts takes time, and sometimes babies or toddlers just need a change of scenery or a quiet space to settle down. 
                    </p>
                    <p>
                        Our nursery room is fully available for moms with infants and young kids. It offers a comfortable, private space to nurse, play, or soothe your little ones without feeling isolated from the body.
                    </p>
                </div>
            ),
            // Your vertical kids walkthrough video
            video: '/Nuresery.mp4', 
            imgSize: 'aspect-[9/16]',
        },
        {
            title: "Never Miss a Moment",
            Description: () => (
                <div className="space-y-4">
                    <p>
                        You don't have to sacrifice hearing the sermon just because you stepped out of the sanctuary. 
                    </p>
                    <p>
                        Our nursery room features a live video feed of the main service. You can care for your children in a relaxed environment while remaining completely connected to the worship and teaching happening next door.
                    </p>
                </div>
            ),
            image: '/churchImages/Nursery.webp', // Replace with a nursery room preview photo if available
            imgSize: 'aspect-[16/9]',
        }
    ];

    return (
        <PageTemplate 
            heroTitle="3:18 Kids & Families" 
            heroImage="/churchImages/churchInside.webp" // Choose an energetic, warm hero image for this page
            sections={sections} 
        />
    );
}