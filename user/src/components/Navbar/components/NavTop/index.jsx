import './style.css'

export const NavTop = () => {
    return (
        <div className="nav-top d-flex justify-content-center gap-2">
            <div className="navbar-brand nav-logo">Praça R2</div>
            <div className="nav-search me-3">
                <div className="nav-search-icon"></div>
                <input type="text" className="form-control" />
            </div>
        </div>
    );
};
