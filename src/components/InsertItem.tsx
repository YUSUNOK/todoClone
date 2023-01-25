import React from 'react';
import { useState } from 'react';
import { Item } from '../types/type';
import uuid from 'react-uuid';
interface Prop {
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
export default function InsertItem({ items, setItems }: Prop) {
    const [itemName, setItemName] = useState<string>("");
    const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setItems((current) => [...current, { itemId: uuid(), itemName, clear: false }]);
        setItemName("");
    };
    const inputChangeItem = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(evt.target.value);
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input className='task-input' type="text" value={itemName} onChange={inputChangeItem} autoFocus />
                <button className='button-add'>{`생성`}</button>
            </form>
        </>
    );
}
