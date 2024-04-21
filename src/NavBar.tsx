import "./index.css"

interface NavBarProps {
    handleOk?: () => void | null;
    handleBack?: () => void | null;
    handleSkip?: () => void | null;
    handleHelp?: () => void | null;
    handleExit?: () => void | null;
    disableOk?: boolean;
}

export default function NavBar({ handleOk, handleBack, handleSkip, handleHelp, handleExit, disableOk}: NavBarProps) {

    return (
        <nav className="navBar">
            <div className="navBar--bottom-container">
                <div className="navBar--button-wrapper">
                    <button className="navBar--round-button" onClick={handleBack} disabled={!handleBack}>{"<"}</button>
                </div>
                <div className="navBar--button-wrapper">
                    <button className="navBar--round-button" onClick={handleSkip} disabled={!handleSkip}>{">>"}</button>
                </div>
                <div className="navBar--button-wrapper">
                    <button className="navBar--text-button" onClick={handleOk} disabled={!handleOk || disableOk}>OK</button>
                </div>
                <div className="navBar--button-wrapper">
                    <button className="navBar--round-button" onClick={handleHelp} disabled={!handleHelp}>{"?"}</button>
                </div>
                <div className="navBar--button-wrapper">
                    <button className="navBar--round-button" onClick={handleExit} disabled={!handleExit}>{"X"}</button>
                </div>
            </div>
        </nav>
    )
}
