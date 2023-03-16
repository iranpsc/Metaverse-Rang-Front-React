export default function FooterTextBox({ className, Text }) {
    return (
        <div className={`footer-value white-box-shadow text-success text-center text-bold ${className}`}>
            <p>{Text}</p>
        </div>
    )
}