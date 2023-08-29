
function viewer({ pdfFile }) {
    return (
        <section className='viewer'>
            {pdfFile && (<embed src={pdfFile} />)}
        </section>
    )
}

export default viewer