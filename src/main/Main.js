import { useState } from "react"
import React from 'react'
import Product from "../product/Product"
import Cart from "../cart/Cart"
import "../main/main.css"

const Main = () => {
    var changeName = () => {
        setName(name.list.price)
    }
    const [name, setName] = useState({
        cart: [],
        list: [{ id: 1, name: "HP", type: "ssd", price: "40,000", value: 1, qty: 1 },
        { id: 2, name: "MAC", type: "Hard disk", price: "40,000", value: 2, qty: 1 },
        { id: 3, name: "DELL", type: "ssd", price: "40,000", value: 3, qty: 1 }
        ],
    });

    function adding(info) {
        var a = name.cart;
        var b = info.id;
        console.log(a);
        var d = a.some((p) => p.id === b);
        console.log(d);
        if (d === false) {
            name.cart.push(info);
            setName({ ...name, info });
            console.log(name.cart);
        } else {
            info.qty += 1;
            setName({ ...name, info });
            console.log(name.cart);
        }
    }



    function remove(prods) {
        var a = name.cart;
        var b = prods.id;
        console.log(a);
        var d = a.some((p) => p.id === b);
        console.log(d);
        if (d === true) {
            let index = a.indexOf(name);
            prods.qty = 1;
            console.log(index);

            a.splice(index, 1);
            setName({ ...name, prods });
            console.log(a);
        } else {
            console.log("not present");
        }
    }
    function qtyadd(data) {
        adding(data);
    }

    function minus(data) {
        if (data.qty == 1) {
            remove(data);
        } else {
            data.qty--;
            setName({ ...name });
        }
    }



    console.log(name.list.name)
    return (
        <div className="main-container">
            <div>
                {name.list.map((product, value) =>
                    <Product key={value} product={product} add={adding} />)

                }
            </div>

            <div>  {name.cart.map((data) => (
                <Cart
                    objs={data}
                    key={data.id}
                    push={remove}
                    adds={qtyadd}
                    minus={minus}
                />
            ))}</div>

        </div>
    )
}

export default Main