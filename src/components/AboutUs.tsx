import PageTemplate from "./PageTemplate";

export default function AboutUs() {
    const sections = [
        {
            title: "Who We Are",
            Description: () => {
                return (
                    <p>
                        We are a body of believers united in Christ, committed to the edification of the saints and the glory of God. As members of one body, we seek to build one another up in love through truth,
                        encouragement, accountability, and prayer. We intentionally spur one another on toward good works, not out of obligation, but as a joyful response to the grace we have received in Christ.
                    </p>
                )
            },
            image: '/pexels-danielwells67-35608646.jpg',
            imgSize: 'aspect-[16/9]',
            button: { path: '/', text: 'Learn More' }
        },
        {
            title: "What We Believe",
            Description: () => {
                return (
                    <p>
                        We believe that the Church is the body of Christ, made up of believers who have been redeemed by grace through faith in Jesus Christ.
                        As members of one body, we are called to live in loving unity, devoting ourselves to the edification of the saints through the teaching of God’s Word,
                        prayer, fellowship, and mutual accountability.
                    </p>
                )
            },
            image: '/pexels-jmark-272337.jpg',
            imgSize: 'aspect-[16/9]',
            button: { path: '/', text: 'Learn More' }
        },
        {
            title: "Our Story",
            Description: () => {
                return (
                    <p>
                        I never imagined I would be asked to leave a church I loved.
                        For years, that church was my home—the place where I was taught the Word, where I served faithfully, and where I believed I was growing alongside others in Christ. Until one meeting.
                    </p>
                )
            },
            image: '/pexels-wolfgang-weiser-467045605-32900729.jpg',
            imgSize: 'aspect-[16/9]',
            button: { path: '/', text: 'Learn More' }
        },
    ];

    return <PageTemplate heroTitle="About Us" heroImage={'/pexels-divinetechygirl-1181438.jpg'} sections={sections} />;
}
