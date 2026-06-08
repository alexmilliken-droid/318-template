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
            image: '/churchImages/churchOutside.webp',
            imgSize: 'aspect-[16/9]',
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
            image: '/churchImages/bible.webp',
            imgSize: 'aspect-[16/9]',
        },
        {
            title: "Why 3:18?",
            Description: () => {
                return (
                    <p>
                        I never imagined I would be asked to leave a church I loved.
                        For years, that church was my home—the place where I was taught the Word, where I served faithfully, and where I believed I was growing alongside others in Christ. Until one meeting.
                    </p>
                )
            },
            image: '/churchImages/sign.webp',
            imgSize: 'aspect-[16/9]',
        },
    ];

    return <PageTemplate heroTitle="About Us" heroImage={'/churchImages/churchInside.webp'} sections={sections} />;
}
