import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AdminLogin.css"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setError("")
    setSuccess(false)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (email === "admin@ivera.com" && password === "123456") {
        setSuccess(true)
        localStorage.setItem("adminToken", "true")
        setTimeout(() => navigate("/admin/dashboard"), 1000)
      } else {
        setError("Invalid credentials. Please try again.")
      }
    }, 900)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin()
    setError("")
  }

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Panel */}
        <div className="login-left">
          <div className="ring ring-top" />
          <div className="ring ring-bottom" />
          <div className="brand">Ive<span>r</span>a</div>
          <div className="left-body">
            <div className="tagline">Control<br />your <em>universe</em></div>
            <div className="left-sub">Admin portal — restricted access</div>
          </div>
          <div className="left-footer">© 2026 Ivera. All rights reserved.</div>
        </div>

        {/* Right Panel */}
        <div className="login-right">
          <div className="login-header">
            <div className="eyebrow">Restricted</div>
            <div className="login-title">Sign in to dashboard</div>
          </div>

          <div className="field">
            <label>Admin Email</label>
            <input
              type="email"
              placeholder="admin@ivera.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className={error ? "input-error" : ""}
            />
          </div>

          {error && <p className="msg error">{error}</p>}
          {success && <p className="msg success">Access granted — redirecting…</p>}

          <button className="btn-login" onClick={handleLogin} disabled={loading}>
            {loading ? <span className="spinner" /> : "Access Dashboard"}
          </button>

          <div className="divider" />
          <p className="help-text">Contact your system administrator if you need access.</p>
        </div>

      </div>
    </div>
  )
}