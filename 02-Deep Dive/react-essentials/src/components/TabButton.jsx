export default function TabButton({ children, onSelect, isSelected, ...props }){

    return (
        <li>
            <button className={isSelected ? 'active' : null} {...props} onClick={onSelect}>{children}</button>
        </li>
    );
}