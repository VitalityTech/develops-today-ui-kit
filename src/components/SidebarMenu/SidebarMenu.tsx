import React, { useState } from 'react';
import styles from './SidebarMenu.module.css';

interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, items, title }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay для закриття при кліку на фон */}
      <div className={styles.overlay} onClick={onClose} />
      
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h3>{title || 'Menu'}</h3>
          <button onClick={onClose} className={styles.closeBtn}>✕</button>
        </div>
        
        <nav className={styles.nav}>
          {items.map((item) => (
            <MenuNode key={item.id} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
};

// Підкомпонент для вкладених пунктів (Accordion)
const MenuNode: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={styles.menuNode}>
      <div 
        className={styles.itemLabel} 
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {item.label}
        {hasChildren && <span className={styles.arrow}>{isExpanded ? '▼' : '▶'}</span>}
      </div>
      
      {hasChildren && isExpanded && (
        <div className={styles.submenu}>
          {item.children!.map((child) => (
            <MenuNode key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};