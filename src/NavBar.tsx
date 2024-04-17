import "./index.css"

interface NavBarProps {
    handleOk: () => void;
    handleBack: () => void;
    disableOk?: boolean;
    // todo: add help and exit
}

export default function NavBar({ handleOk, handleBack, disableOk}: NavBarProps) {

    return (
        <nav className="navBar">
            <button onClick={handleOk} disabled={disableOk}>OK</button>
            <div className="navBar--bottom-container">
                <button onClick={handleBack}>BACK</button>
                <button>HELP</button>
                <button>EXIT</button>
            </div>
        </nav>
    )
}
