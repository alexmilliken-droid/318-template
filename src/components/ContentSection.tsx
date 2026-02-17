// components/ContentSection.tsx
import React, { ReactNode } from "react";

interface ContentSectionProps {
    title: string;
    time?: string;
    Description: (props: any) => ReactNode | Promise<ReactNode>;
    image: string;
    reverse?: boolean;
    bgColor?: string;
    imgSize: string;
    button?: { path: string, text: string };
}

const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    time,
    Description,
    image,
    reverse = false,
    bgColor = "bg-white",
    imgSize,
    button
}) => {
    return (
        <section className={`max-w-7xl mx-auto px-6 py-16 ${bgColor}`}>
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
            >
                {/* Image */}
                <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full object-cover ${imgSize}`}
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col h-full">
                    <div className="space-y-4">
                        <div className="flex flex-row justify-between">
                            <h3 className="text-2xl sm:text-3xl font-bold text-black">
                                {title}
                            </h3>
                            {time && (
                                <p className="pt-2 text-lg text-black">
                                    {time}
                                </p>
                            )}
                        </div>

                        <p className="text-gray-700">
                            <Description />
                        </p>
                    </div>

                    {button && (
                        <div className="mt-auto pt-6">
                            <button className="px-6 py-3 rounded-lg bg-black text-white">
                                Learn More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
