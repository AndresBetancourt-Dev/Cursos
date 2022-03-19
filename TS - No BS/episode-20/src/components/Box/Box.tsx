export const Box = ({ children }: { children: React.ReactNode }) => {
    return (<div style={{
        padding: '1rem',
        fontWeight: 'bold'
    }}>{children}</div>)
}