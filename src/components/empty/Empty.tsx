const Empty = ({ title }: { title?: string }) => {
    return (
        <div className="grid place-items-center h-full w-full" >
            <h1>{title ?? "No Data Found"}</h1>
        </div>
    );
};

export default Empty;
