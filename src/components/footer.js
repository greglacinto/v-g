import '../styles/footer.css';
const removeBottomMargin = {
    'margin-bottom': '0',
}

function Footer() {
    return (
        <section id='footer-section'>
            <div className='footer-div'>
                <p style={removeBottomMargin}>
                    Valerie & Gregory
                </p>
                <hr />
                <p>26.11.11.2022</p>
            </div>
            
        </section>
    );
}

export default Footer;



