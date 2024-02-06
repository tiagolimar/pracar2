import { NavTop } from './components/NavTop';
import { NavBottom } from './components/NavBottom';

export const Navbar = () => {
    return (
        <nav className="navbar justify-content-center gap-3 shadow-sm">
            <NavTop />
            <NavBottom />
        </nav>
    );
};
