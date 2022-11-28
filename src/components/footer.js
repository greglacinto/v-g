import '../styles/footer.css';
const removeBottomMargin = {
    'margin-bottom': '0',
}

function Footer() {
    const hrStyle = {
        "width": "15%"
    }
    return (
        <section id='footer-section'>
            <div className='footer-div'>
                <p style={removeBottomMargin}>
                    Valerie & Gregory
                </p>
                <hr style={hrStyle}/>
                <p>26.12.22.2022</p>
            </div>
            
        </section>
    );
}

export default Footer;



