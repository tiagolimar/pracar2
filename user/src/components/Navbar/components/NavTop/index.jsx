import './style.css'

export const NavTop = () => {
    return (
        <div className="nav-top d-flex justify-content-center gap-2 mb-3 mt-2">
            <div className="navbar-brand nav-logo fs-4">Praça R2</div>
            <div className="nav-search me-3">
                <div className="nav-search-icon"></div>
                <input type="text" className="form-control" />
            </div>
        </div>
    );
};
