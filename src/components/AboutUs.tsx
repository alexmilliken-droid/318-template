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
            image: '/pexels-brett-sayles-3633711.jpg',
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
            image: '/pexels-brett-sayles-3633711.jpg',
            imgSize: 'aspect-[16/9]',
            button: { path: '/', text: 'Learn More' }
        },
    ];

    return <PageTemplate heroTitle="What To Expect" heroImage={'/pexels-brett-sayles-3633711.jpg'} sections={sections} />;
}
