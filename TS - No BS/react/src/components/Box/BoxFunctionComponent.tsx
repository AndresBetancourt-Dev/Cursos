/**
 * 
 * Defines children as well as a return type
 */
export const BoxFunctionComponent: React.FunctionComponent = ({ children }) => {
    return (<div style={{
        padding: '1rem',
        fontWeight: 'bold'
    }}>{children}</div>)
}