export const List: React.FunctionComponent<{ items: string[], onClick?: (item: string) => void }> = ({ items, onClick }) => {
    return <ul>
        {items.map((item, index) => (
            <li key={index} onClick={() => onClick?.(item)}>{item}</li>
        ))}
    </ul>
}