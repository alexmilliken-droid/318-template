// components/ContentSection.tsx
import React, { ReactNode } from "react";

interface ContentSectionProps {
    title: string;
    time?: string;
    Description: (props: any) => ReactNode | Promise<ReactNode>;
    image?: string;
    video?: string;
    thumbnail?: string;
    reverse?: boolean;
    bgColor?: string;
    imgSize: string; // Will pass custom Tailwind aspect ratio classes here
    button?: { path: string, text: string };
}

const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    time,
    Description,
    image,
    video,
    reverse = false,
    bgColor = "bg-white",
    imgSize,
    button,
    thumbnail
}) => {
    return (
        <section className={`max-w-7xl mx-auto px-6 py-16 ${bgColor}`}>
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
            >
                {/* Visual Media Block */}
                <div className={`rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black w-full ${imgSize.includes('9/16') ? 'max-w-[340px] mx-auto' : 'max-w-full'
                    }`}>
                    {video ? (
                        <div className={`w-full ${imgSize}`}>
                            <video
                                src={video}
                                controls
                                preload="metadata"
                                playsInline
                                className="w-full h-full object-cover block"
                                // Prioritizes the thumbnail prop, falls back to the image prop
                                poster={thumbnail || image}
                            />
                        </div>
                    ) : (
                        <div className={`w-full ${imgSize}`}>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover block"
                            />
                        </div>
                    )}
                </div>

                {/* Text Content Block */}
                <div className="flex flex-col justify-center h-full space-y-6 py-4">
                    <div>
                        <div className="flex flex-row justify-between items-baseline mb-2">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {title}
                            </h3>
                            {time && (
                                <p className="text-lg font-medium text-gray-500">
                                    {time}
                                </p>
                            )}
                        </div>
                        <div className="w-12 h-1 bg-[#7bb0e0] rounded-full mt-2" />
                    </div>

                    <div className="text-gray-600 text-lg leading-relaxed font-normal">
                        <Description />
                    </div>

                    {button && (
                        <div className="pt-4">
                            <button className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors shadow-sm">
                                {button.text || "Learn More"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContentSection;