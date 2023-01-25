import { captureRejectionSymbol } from 'events';
import React from 'react';
import { Item } from '../types/type';

interface Prop {
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
}
export default function ItemList({ items, setItems }: Prop) {
    const itemDelete = (data: Item) => {
        setItems(items.filter((item: Item) => item.itemId !== data.itemId));
    };
    const itemClearChange = (data: Item) => {
        setItems(
            items.map((item: Item) => {
                if (item.itemId === data.itemId) {
                    return { ...item, clear: !(item.clear) };
                }
                else {
                    return item;
                }
            }
            )
        );
    };
    return (
        <div>
            <ul>
                {items.map((item: Item) => {
                    return (
                        <li className="list-item" key={item.itemId}>
                            <p className={item.clear ? `complete` : ``}>{item.itemName}</p>
                            <div>
                                <button className="button-delete" onClick={() => itemDelete(item)}>{`삭제`}</button>
                                <button className="button-complete" onClick={() => itemClearChange(item)}>{`완료`}</button>
                            </div>
                        </li>);
                })}
            </ul>
        </div >
    );
}
