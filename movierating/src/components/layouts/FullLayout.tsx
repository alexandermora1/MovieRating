

interface Props { children: JSX.Element | JSX.Element[] }

const FullLayout = ({ children }: any) => {
    return (
        <>
            {children}
        </>
    )
}

export default FullLayout;