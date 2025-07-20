import { Link } from "react-router";

const BreadCrumb = () => {
    return (
        <div className="flex gap-2 items-center text-grayText">
            {BreadCrumbItem().map((item, index) => (
                <div key={index}>
                    {item?.path ? (
                        <Link to={item.path!}>
                            <h5 className="text-grayText cursor-pointer underline">{item.title}</h5>
                        </Link>
                    ) : (
                        <h5 className="text-black">
                            {index > 0 && " / "}{item.title}</h5>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumb;

const BreadCrumbItem = () => [
    {
        title: "Models",
        path: "/models",
    },
    {
        title: "Files",
    },
];
