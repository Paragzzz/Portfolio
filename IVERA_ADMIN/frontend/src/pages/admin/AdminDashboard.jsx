import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [deletingId, setDeletingId] = useState(null);
  const [saving, setSaving] = useState(false);
const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
const res = await axios.get(`${API}/api/products`);    setProducts(res.data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const deleteProduct = async (id) => {
    setDeletingId(id);
await axios.delete(`${API}/api/products/${id}`);    setDeletingId(null);
    fetchProducts();
  };

  const startEdit = (p) => {
    setEditing(p._id);
    setForm(p);
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm({});
  };

  const updateProduct = async () => {
    setSaving(true);
    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("category", form.category);
    data.append("description", form.description);
    if (form.newImage) data.append("image", form.newImage);

await axios.put(`${API}/api/products/${editing}`, data);    setSaving(false);
    setEditing(null);
    fetchProducts();
  };

  return (
    <div className="dash-page">

      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="sidebar-brand">Ive<span>r</span>a</div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Products</div>
          <div className="nav-item">Orders</div>
          <div className="nav-item">Customers</div>
          <div className="nav-item">Analytics</div>
          <div className="nav-item">Settings</div>
        </nav>
        <div className="sidebar-footer">Admin Portal</div>
      </aside>

      {/* Main */}
      <main className="dash-main">

        {/* Header */}
        <header className="dash-header">
          <div>
            <div className="dash-eyebrow">Management</div>
            <h1 className="dash-title">Products</h1>
          </div>
          <div className="header-meta">
            {products.length} <span>items</span>
          </div>
        </header>

        {/* Table Header */}
        <div className="table-head">
          <div className="col-img" />
          <div className="col-name">Product</div>
          <div className="col-cat">Category</div>
          <div className="col-price">Price</div>
          <div className="col-actions">Actions</div>
        </div>

        {/* Product Rows */}
        <div className="product-list">
          {products.map((p) => (
            <div key={p._id} className={`product-row ${editing === p._id ? "is-editing" : ""}`}>

              {editing === p._id ? (
                /* ── Edit Mode ── */
                <div className="edit-form">
                  <img src={form.newImage ? URL.createObjectURL(form.newImage) : p.image} className="edit-thumb" alt="" />

                  <div className="edit-fields">
                    <div className="edit-row">
                      <div className="edit-field">
                        <label>Name</label>
                        <input
                          value={form.name || ""}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Product name"
                        />
                      </div>
                      <div className="edit-field">
                        <label>Category</label>
                        <input
                          value={form.category || ""}
                          onChange={(e) => setForm({ ...form, category: e.target.value })}
                          placeholder="Category"
                        />
                      </div>
                      <div className="edit-field edit-field--sm">
                        <label>Price</label>
                        <input
                          value={form.price || ""}
                          onChange={(e) => setForm({ ...form, price: e.target.value })}
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div className="edit-row">
                      <div className="edit-field edit-field--full">
                        <label>Description</label>
                        <textarea
                          value={form.description || ""}
                          onChange={(e) => setForm({ ...form, description: e.target.value })}
                          placeholder="Product description"
                          rows={2}
                        />
                      </div>
                    </div>

                    <div className="edit-row">
                      <div className="edit-field">
                        <label>Replace Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setForm({ ...form, newImage: e.target.files[0] })}
                        />
                      </div>
                    </div>

                    <div className="edit-actions">
                      <button className="btn-save" onClick={updateProduct} disabled={saving}>
                        {saving ? <span className="spinner" /> : "Save Changes"}
                      </button>
                      <button className="btn-cancel" onClick={cancelEdit}>Cancel</button>
                    </div>
                  </div>
                </div>

              ) : (
                /* ── View Mode ── */
                <>
                  <div className="col-img">
                    <img src={p.image} alt={p.name} className="product-thumb" />
                  </div>
                  <div className="col-name">
                    <div className="product-name">{p.name}</div>
                    {p.description && (
                      <div className="product-desc">{p.description.slice(0, 60)}{p.description.length > 60 ? "…" : ""}</div>
                    )}
                  </div>
                  <div className="col-cat">
                    <span className="badge">{p.category}</span>
                  </div>
                  <div className="col-price">₹{p.price}</div>
                  <div className="col-actions">
                    <button className="btn-edit" onClick={() => startEdit(p)}>Edit</button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteProduct(p._id)}
                      disabled={deletingId === p._id}
                    >
                      {deletingId === p._id ? <span className="spinner spinner--dark" /> : "Delete"}
                    </button>
                  </div>
                </>
              )}

            </div>
          ))}

          {products.length === 0 && (
            <div className="empty-state">No products found.</div>
          )}
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;