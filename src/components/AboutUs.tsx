import PageTemplate from "./PageTemplate";

export default function AboutUs() {
    const sections = [
        {
            title: "Who We Are",
            Description: () => (
                <p>
                    We are a body of believers united in Christ, committed to the edification of the saints and the glory of God. As members of one body, we seek to build one another up in love through truth,
                    encouragement, accountability, and prayer. We intentionally spur one another on toward good works, not out of obligation, but as a joyful response to the grace we have received in Christ.
                </p>
            ),
            image: '/churchImages/churchOutside.webp',
            imgSize: 'aspect-[16/9]',
        },
        {
            title: "What We Believe",
            Description: () => (
                <p>
                    We believe that the Church is the body of Christ, made up of believers who have been redeemed by grace through faith in Jesus Christ.
                    As members of one body, we are called to live in loving unity, devoting ourselves to the edification of the saints through the teaching of God’s Word,
                    prayer, fellowship, and mutual accountability.
                </p>
            ),
            image: '/churchImages/bible.webp',
            imgSize: 'aspect-[16/9]',
        },
        {
            title: "Why 3:18",
            Description: () => (
                <p>
                    Why are we called 3:18 Bible Church?
                </p>
            ),
            video: '/video2.mp4', // Update with folder prefix if matching images
            imgSize: 'aspect-[9/16]',
        },
        {
            title: "The Hallmarks of 3:18 Bible Church",
            Description: () => (
                <p>
                    Explore the distinct operational markers and core theological anchors that define our weekly worship, community architecture, and long-term church identity.
                </p>
            ),
            video: '/Hallmarks.mp4', // Update with folder prefix if matching images
            imgSize: 'aspect-[9/16]',
        }
    ];

    return <PageTemplate heroTitle="About Us" heroImage={'/churchImages/churchInside.webp'} sections={sections} />;
}