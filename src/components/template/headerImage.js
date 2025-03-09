function HeaderImage({ children }) {
    return (
        <div className="w-screen h-[35vh] relative">
            {/* <img src="https://kenac.co.zw/img/ser.jpeg" alt="img" className="w-full h-full object-cover bg-no-repeat"/> */}
            <div className="relative h-full" style={{ backgroundImage: "url('https://kenac.co.zw/img/ser.jpeg')" }}>
                <div className="absolute bottom-10 left-1/12 text-center text-white font-bold text-3xl">
                {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderImage;