import { useState } from "react";
import axios from "axios";
import "./AdminUpload.css";

const AdminUpload = () => {
  const [form, setForm] = useState({ name: "", price: "", category: "", description: "" });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("category", form.category);
    data.append("description", form.description);
    data.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/products", data);
      setStatus("success");
      setForm({ name: "", price: "", category: "", description: "" });
      setImage(null);
      setPreview(null);
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="upload-page">

      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="sidebar-brand">Ive<span>r</span>a</div>
        <nav className="sidebar-nav">
          <div className="nav-item">Products</div>
          <div className="nav-item active">Upload</div>
          <div className="nav-item">Orders</div>
          <div className="nav-item">Customers</div>
          <div className="nav-item">Settings</div>
        </nav>
        <div className="sidebar-footer">Admin Portal</div>
      </aside>

      {/* Main */}
      <main className="upload-main">

        <header className="upload-header">
          <div className="dash-eyebrow">Inventory</div>
          <h1 className="dash-title">Upload Product</h1>
        </header>

        <div className="upload-grid">

          {/* Left — Form */}
          <div className="upload-form-card">

            <div className="section-label">Product Details</div>

            <div className="field">
              <label>Product Name</label>
              <input
                name="name"
                placeholder="e.g. Silk Evening Gown"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Price (₹)</label>
                <input
                  name="price"
                  placeholder="0.00"
                  value={form.price}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Category</label>
                <input
                  name="category"
                  placeholder="e.g. Dresses"
                  value={form.category}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe the product — material, fit, occasion…"
                value={form.description}
                onChange={handleChange}
                rows={4}
              />
            </div>

          </div>

          {/* Right — Image */}
          <div className="upload-image-card">

            <div className="section-label">Product Image</div>

            <div
              className={`drop-zone ${preview ? "has-preview" : ""}`}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById("fileInput").click()}
            >
              {preview ? (
                <img src={preview} alt="preview" className="preview-img" />
              ) : (
                <div className="drop-placeholder">
                  <div className="drop-icon">↑</div>
                  <div className="drop-text">Drop image here</div>
                  <div className="drop-sub">or click to browse</div>
                </div>
              )}
            </div>

            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImage}
              style={{ display: "none" }}
            />

            {preview && (
              <button className="btn-clear-img" onClick={() => { setImage(null); setPreview(null); }}>
                Remove image
              </button>
            )}

            {image && (
              <div className="file-name">{image.name}</div>
            )}

          </div>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="status-msg status-success">Product uploaded successfully.</div>
        )}
        {status === "error" && (
          <div className="status-msg status-error">Upload failed. Please try again.</div>
        )}

        {/* Submit */}
        <div className="upload-footer">
          <button className="btn-upload" onClick={handleSubmit} disabled={loading}>
            {loading ? <span className="spinner" /> : "Publish Product"}
          </button>
          <button className="btn-reset" onClick={() => {
            setForm({ name: "", price: "", category: "", description: "" });
            setImage(null);
            setPreview(null);
            setStatus(null);
          }}>
            Reset
          </button>
        </div>

      </main>
    </div>
  );
};

export default AdminUpload;