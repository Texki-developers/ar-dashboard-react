interface AvatarProps {
    src?: string;
    fullName: string;
}

const Avatar = ({ src, fullName }: AvatarProps) => {
    const names = fullName.split(" ");
    return src ? (
        <img
            className="w-12 h-12 rounded-full object-cover"
            src={src}
            alt=""
        />
    ) : (
        <div className="w-12 h-12 rounded-full text-xl font-bold bg-gray-200 grid place-items-center">
            {names[0]?.charAt(0)?.toUpperCase() + (names[1] ? names[1]?.charAt(0)?.toUpperCase() : "")}
        </div>
    );
};

export default Avatar;
