import { useState, useEffect } from "react";
import axios from "axios";
import '../style/style.scss'

function CreateNotes() {
    const [item, setItem] = useState({
        name: "",
        imageUrl: "",
        description: "",
        price: "",
        countInStock: ""
    });
    const [items, setItems] = useState([
        {
            name: "",
            imageUrl: "",
            description: "",
            price: "",
            countInStock: "",
            _id: "",
        },
    ]);

    const [isPut, setIsPut] = useState(false);
    const [updatedItem, setUpdatedItem] = useState({
        name: "",
        description: "",
        countInStock: "",
        price: "",
        imageUrl: "",
        id: "",
    });

    useEffect(() => {
        fetch("/items")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((jsonRes) => setItems(jsonRes))
            .catch((err) => console.log(err));
    }, [items]);

    function handleChange(event) {
        const { name, value } = event.target;
        setItem((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
    }

    function addItem(event) {
        event.preventDefault();
        const newItem = {
            name: item.name,
            description: item.description,
            imageUrl: item.imageUrl,
            price: item.price,
            countInStock: item.countInStock
            
        };

        axios.post("/newitem", newItem);
        console.log(newItem);
        alert("item added");

        setItem({
            name: item.name,
            imageUrl: item.imageUrl,
            price: item.price,
            description: item.description,
            countInStock: item.countInStock
        });
    }

    function deleteItem(id) {
        axios.delete("/delete/" + id);
        alert("item deleted");
        console.log(`Deleted item with id ${id}`);
    }

    function openUpdate(id) {
        setIsPut(true);
        setUpdatedItem((prevInput) => {
            
            return {
                ...prevInput,
                id: id,
                
            };
        });
    }

    function updateItem(id) {
        axios.put("/put/" + id, updatedItem);
        alert("item updated");
        console.log(`item with id ${id} updated`);
    }

    function handleUpdate(event) {
        const { name, value } = event.target;
        setUpdatedItem((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
        console.log(updatedItem);
    }

    return (
        <div className="App">
            {!isPut ? (
                <div className="main">
                    <input
                        onChange={handleChange}
                        name="name"
                        value={item.name}
                        placeholder="name"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="imageUrl"
                        value={item.imageUrl}
                        placeholder="imageUrl"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="description"
                        value={item.description}
                        placeholder="description"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="price"
                        value={item.price}
                        placeholder="price"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="countInStock"
                        value={item.countInStock}
                        placeholder="countInStock"
                    ></input>

                    <button onClick={addItem}>ADD ITEM</button>
                </div>
            ) : (
                <div className="main">
                    <input
                        onChange={handleUpdate}
                        name="name"
                        value={updatedItem.name}
                        placeholder="name"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="imageUrl"
                        value={item.imageUrl}
                        placeholder="imageUrl"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="description"
                        value={item.description}
                        placeholder="description"
                    ></input>
                    <input
                        onChange={handleUpdate}
                        name="price"
                        value={updatedItem.price}
                        placeholder="price"
                    ></input>
                    <input
                        onChange={handleChange}
                        name="countInStock"
                        value={item.countInStock}
                        placeholder="countInStock"
                    ></input>


                    <button onClick={() => updateItem(updatedItem.id)}>
                        UPDATE ITEM
                    </button>
                </div>
            )}
            <div className="container">
                {items.map((item) => {
                    return (
                        <div className="row note"
                            key={item._id}>
                            <p>Назва: {item.name}</p>
                            <p className="imageurl">{item.imageUrl}</p>
                            <p>Опис: {item.description}</p>
                            <p>Ціна: {item.price}$</p>
                            <p>Є в наявності: {item.countInStock}</p>
                            <button className="button__create" onClick={() => openUpdate(item._id)}>UPDATE</button>
                            <button className="button__create" onClick={() => deleteItem(item._id)}>DELETE</button>

                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CreateNotes;