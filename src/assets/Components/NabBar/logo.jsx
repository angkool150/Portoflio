export default function Logo({ src = "/logo.svg", alt = "Logo", size = "default", isLight = false }) {
    const sizes = {
        sm: "h-8",
        default: "h-10 sm:h-12",
        lg: "h-14 sm:h-16",
    };

    const isCustomSize = typeof size === "number";

    return (
        <div
            className={`flex items-center justify-center ${!isCustomSize ? sizes[size] : ""} ${isLight ? 'bg-white rounded-full p-2' : ''}`}
            style={isCustomSize ? { height: size, width: size } : {}}
        >
            <img src={src} alt={alt} className="h-full w-full object-contain rounded-full" />
        </div>
    );
}