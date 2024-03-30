import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // items = [];

  // Hook to manage state in a functional component
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // This empty tag is a Fragment, which is a way to group multiple children without adding extra nodes to the DOM.
    <>
      <h1>{heading}</h1>
      {/* If no items then display a message, this is more concise ternary operator. */}
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
