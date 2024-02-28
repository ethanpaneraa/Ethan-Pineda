export default function SectionHeader({ title } : { title : string }) {
    return (
        <div className="max-w-2xl flex items-center">
            <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold mb-10 flex-shrink-0">
                {`</${title}>`}
            </h2>
            <span className="h-px bg-paragraph-gray flex-grow ml-4 mb-8" />
        </div>
    );
};''