const AuthLayout = ({
    children,
}: {
    children: React.ReactNode;  // This is a React component        
})  => {
    return ( 
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;