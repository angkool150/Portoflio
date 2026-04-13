export default function Logo({ src = "/logo.svg", alt = "Logo", size = "default" }) {
    const sizes = {
        sm: "h-8",
        default: "h-10 sm:h-12",
        lg: "h-14 sm:h-16",
    };

    const isCustomSize = typeof size === "number";

    return (
        <div
            className={`flex items-center ${!isCustomSize ? sizes[size] : ""}`}
            style={isCustomSize ? { height: size } : {}}
        >
            <img src={src} alt={alt} className="h-full w-auto rounded-full" />
        </div>
    );
}