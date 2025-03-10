const { default: Link } = require("next/link")

function LogoLds({style="text-2xl font-bold"}) {
    return (
        <Link href="/" className={style}>
        <pre> LDS Movers</pre>
        <div className="flex flex-row">
            <div className="bg-red-600 w-1/3 h-2 rounded-l-full  relative left-1"></div>
            <div className="bg-yellow-500 w-1/3 h-2  relative right-1"></div>
            <div className="bg-white w-1/3 h-2 rounded-r-full relative right-1"></div>
        </div>
    </Link>
    )
}

export default LogoLds;