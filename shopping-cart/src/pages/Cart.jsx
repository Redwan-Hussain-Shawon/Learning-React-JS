import React from 'react'
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, removeCart, updateQty, total } = useCart();
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="container">
        <h2 className="mb-3">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="alert alert-danger">Your Cart is empty</p>
        ) : (
          <div>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td style={{ width: "100px" }}>
                      <input
                        className="form-control text-center"
                        min="1"
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value))
                        }
                      />
                    </td>
                    <td>{item.price * item.qty}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeCart(item.id)}
                      >
                        Remove
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end fw-bold fs-5">Total: {total.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart
