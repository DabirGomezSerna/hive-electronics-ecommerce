import "./Header.css";

export default function Header() {
  let searchTerm = "";
  const handleSearch = () => {};
  const onChangeSearchTerm = () => {};
  let showUserMenu = false; //changing this to false hides the user menu
  const toggleUserEvent = () => {
    if (showUserMenu) showUserMenu = true;
    else showUserMenu = false;
  };
  const closeSession = () => {};

  return (
    <header>
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

      <div className="header-main">
        <div className="container header-content">
          <a href="/" className="logo">
            hiveElectronics.com
          </a>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={onChangeSearchTerm}
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Search">
              🔍
            </button>
          </form>
          <div className="header-actions">
            <button className="action-btn" aria-label="Wishlist">
              <span className="icon">❤️</span>
              <span className="action-text">Favoritos</span>
            </button>
            <button className="action-btn" aria-label="Shopping Cart">
              <span className="icon">🛒</span>
              <span className="action-text">Carrito</span>
              <span className="badge">3</span>
            </button>
            <div className="user-menu">
              <div className="user-dropdown">
                <button
                  className="action-btn user-btn"
                  onClick={toggleUserEvent}
                  aria-label="User menu"
                >
                  <span className="icon">👤</span>
                  <span className="action-text">Mi cuenta</span>
                  <span className="dropdown-arrow">🔻</span>
                </button>
                {showUserMenu && (
                  <div className="dropdown-menu">
                    <a href="/profile">Mi perfil</a>
                    <a href="/orders">Mis pedidos</a>
                    <a href="/addresses">Direcciones</a>
                    <a href="/payment">Métodos de pago</a>
                    <hr />
                    <button onClick={closeSession}>Cerrar sesión</button>
                  </div>
                )}
              </div>
              <div className="auth-buttons">
                <button className="btn-primary">Iniciar Sesión</button>
                <button className="btn-primary">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
