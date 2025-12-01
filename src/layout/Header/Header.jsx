import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Icon from "../../components/common/Icon/Icon";
import "./Header.css";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState([]);

  let searchTerm = "";
  const handleSearch = () => {};
  const onChangeSearchTerm = () => {};
  const getUserInitials = () => {};
  const getDisplayName = () => {};

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogin = () => {};

  const handleRegister = () => {};

  const handleLogout = () => {};
  const closeSession = () => {};

  return (
    <header>
      {/* Top strip*/}
      <div className="header-top">
        <div className="container flex-between">
          <span className="delivery-info">
            Envío gratis en pedidos de más de $999
          </span>
          <div className="top-links">
            <a href="/help">Ayuda</a>
            <a href="/track">Rastrear pedido</a>
          </div>
        </div>
      </div>

      {/* Main head body*/}
      <div className="header-main">
        <div className="container header-content">
          <Link to={"/"} className="logo">
            hiveElectronics.com
          </Link>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={onChangeSearchTerm}
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <Icon name="search" size={20}></Icon>
            </button>
          </form>

          {/** User menu */}
          <div className="header-actions">
            <div className="user-menu">
              <button
                className={`user-info ${isUserMenuOpen ? "active" : ""}`}
                onClick={handleUserMenuToggle}
                aria-label="Menú de usuario"
                aria-expanded={isUserMenuOpen}
              >
                <div className="user-avatar">
                  <span className="user-initials">
                    {isAuth ? (
                      getUserInitials(user)
                    ) : (
                      <Icon name="user" size={16} />
                    )}
                  </span>
                </div>
                <div className="user-text">
                  <span className="greeting">
                    {isAuth
                      ? `Hola, ${getDisplayName(user)}`
                      : "Hola, Inicia sesión"}
                  </span>
                  <span className="account-text">
                    {isAuth ? "Mi Cuenta" : "Cuenta y Listas"}
                  </span>
                </div>
                <Icon
                  name="chevronDown"
                  size={14}
                  className={`dropdown-arrow ${
                    isUserMenuOpen ? "rotated" : ""
                  }`}
                />
              </button>
              {isUserMenuOpen && (
                <div className="user-dropdown">
                  {!isAuth ? (
                    <div className="auth-section">
                      <div className="auth-header">
                        <Icon name="user" size={24} />
                        <span>Accede a tu cuenta</span>
                      </div>
                      <Link
                        to="/login"
                        className="auth-btn primary"
                        onClick={handleLogin}
                      >
                        <Icon name="logIn" size={16} />
                        Iniciar Sesión
                      </Link>
                      <button
                        className="auth-btn secondary"
                        onClick={handleRegister}
                      >
                        <Icon name="userPlus" size={16} />
                        Crear Cuenta
                      </button>
                    </div>
                  ) : (
                    <div className="user-section">
                      <div className="user-profile">
                        <div className="user-avatar large">
                          <span className="user-initials">
                            {getUserInitials(user)}
                          </span>
                        </div>
                        <div className="user-details">
                          <span className="user-name">
                            {getDisplayName(user)}
                          </span>
                          <span className="user-email">{user?.email}</span>
                        </div>
                      </div>

                      <div className="user-links">
                        <Link to="/profile" className="user-link">
                          <Icon name="user" size={16} />
                          Mi Cuenta
                        </Link>
                        <Link to="/orders" className="user-link">
                          <Icon name="package" size={16} />
                          Mis Pedidos
                        </Link>
                        <Link to="/wishlist" className="user-link">
                          <Icon name="heart" size={16} />
                          Lista de Deseos
                        </Link>
                        <Link to="/settings" className="user-link">
                          <Icon name="settings" size={16} />
                          Configuración
                        </Link>
                      </div>

                      <div className="logout-section">
                        <button className="logout-btn" onClick={handleLogout}>
                          <Icon name="logOut" size={16} />
                          Cerrar Sesión
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
