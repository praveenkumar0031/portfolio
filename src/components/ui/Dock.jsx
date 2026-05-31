import "./Dock.css";

export default function Dock({ items = [], onSelect, className = "", ...props }) {
  return (
    <nav className={`dock ${className}`} {...props}>
      <ul className="dock-list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="dock-item"
              onClick={() => onSelect?.(item.id)}
            >
              {item.icon && <span className="dock-icon">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
