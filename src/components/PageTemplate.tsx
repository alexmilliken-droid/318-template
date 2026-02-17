// components/PageTemplate.tsx
import React, { ReactNode } from "react";
import ContentSection from "./ContentSection";
import Header from "./Header";

interface SectionData {
    title: string;
    time?: string;
    Description: (props: any) => ReactNode | Promise<ReactNode>;
    image: string;
    bgColor?: string;
}

interface PageTemplateProps {
    heroTitle: string;
    heroImage: string;
    sections: SectionData[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    heroTitle,
    heroImage,
    sections,
}) => {
    return (
        <>
            <Header />

            <div className="w-full overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] min-h-[250px] w-full">
                    <img
                        src={heroImage}
                        alt={heroTitle}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-end">
                        <div className="max-w-7xl mx-auto w-full px-6 pb-10 md:pb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                {heroTitle}
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                {sections.map((section, index) => (
                    <ContentSection
                        imgSize={""}
                        key={index}
                        {...section}
                        reverse={index % 2 === 1} // zigzag: alternate sides
                    />
                ))}
            </div>
        </>
    );
};

export default PageTemplate;
