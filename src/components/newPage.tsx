import PageTemplate from "./PageTemplate";

export default function NewPage() {
    const sections = [
        {
            title: "Service",
            Time: () => {
                return (
                    <p>Starts at <strong className="font-bold">11:00 AM</strong> Sunday</p>
                )
            },
            Description: () => {
                return (
                    <>
                        <strong className="font-bold">Our services are typically about 60 minutes and involve:</strong>
                        <ul className="mt-10">
                            <li><strong className="font-bold">Singing:</strong> We’ll praise God and encourage each other with songs.</li>
                            <li><strong className="font-bold">Scripture Reading:</strong>  We love the Bible, so we’ll stand to read the passage that we’re studying.</li>
                            <li><strong className="font-bold">Preaching:</strong>  We’ll preach the unchanging truth of Scripture and seek to apply the Gospel to the core concerns of our lives.</li>
                            <li><strong className="font-bold">Communion:</strong>  We’ll celebrate the Lord’s Supper as a reminder of Jesus’ death as a sacrifice for sins.</li>
                            <li><strong className="font-bold">Giving:</strong>  We’ll give as a response to God’s grace to extend the church’s ministry to our community and world.</li>
                        </ul>
                    </>
                )
            },
            image: '/pexels-jibarofoto-2014775.jpg',
            imgSize: 'md'
        },
        {
            title: "Sunday Meal",
            time: "Starts at 11:00AM Sunday",
            Description: () => {
                return (
                    <ul>
                        <li><strong className="font-bold">Weekly Gathering:</strong> We come together every Sunday at noon to share a meal as a way to connect beyond Sunday service.</li>
                        <li><strong className="font-bold">Biblical Pattern:</strong> Following the early Church, we break bread together to express unity and shared life in Christ.</li>
                        <li><strong className="font-bold">Building Relationships:</strong> Eating together allows friendships to grow, burdens to be shared, and encouragement to flow naturally.</li>
                        <li><strong className="font-bold">Hospitality & Welcome:</strong> The table becomes a place where newcomers feel included and everyone experiences God’s love in a tangible way.</li>
                        <li><strong className="font-bold">Living as One Body:</strong> This practice reminds us that our fellowship is rooted in Christ and not just programs or schedules.</li>
                    </ul>
                )
            },
            image: '/pexels-fauxels-3184183.jpg',
            imgSize: 'md'
        },
    ];

    return <PageTemplate heroTitle="What To Expect" heroImage={'/pexels-jibarofoto-2014775.jpg'} sections={sections} />;
}
