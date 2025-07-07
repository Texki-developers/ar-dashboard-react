const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-screen overflow-hidden bg-white relative">
            <div className="absolute top-[10%] bg-[#000000] blur-[100px] right-0 rounded-full rotate-[-13deg] w-[1000px] h-[800px] z-1"></div>
            <div className="absolute top-0 left-0 w-full h-full z-2">{children}</div>
        </div>
    );
};

export default AppLayout;
