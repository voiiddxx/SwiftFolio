const Layout = ({children} : {children : React.ReactNode}) => {
     return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-950">
            {children}
        </div>
     )
}

export default Layout