interface InterstitialScreenProps {
    onClose: () => void;
    text: string;
}

export default function InterstitialScreen({ onClose, text }: InterstitialScreenProps) {
    return (
        <div className="interstitialScreen">
            <div className="interstitial--overlay"></div>
            <div className="interstitial--content">
                <p>{text}</p>
                <button className="navBar--text-button" onClick={onClose}>CLOSE</button>
            </div>
        </div>
    );
};