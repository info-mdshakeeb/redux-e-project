
// eslint-disable-next-line react/prop-types
const Section = ({ children, className }) => {
    return (
        <div className={`mx-auto flex flex-col lg:max-w-[70rem] px-4   ${className}`}>
            {children}
        </div>
    );
};

export default Section;