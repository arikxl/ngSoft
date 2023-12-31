/* eslint-disable react/prop-types */

const PdfForm = ({ setPdfError, setPdfFile }) => {

    const handleFile =  (e) => {
        const file = e.target.files[0];
        if (file.type !== 'application/pdf') {
            setPdfError('Pdf file is required');
        } else {
            // getItems(file);

            const formData = new FormData();
            formData.append('cvFile', file)
            fetch('/extract-pdf', { 
                method: 'POST',
                body: formData
            }).then(response => {
                return response.text()
            }).then(extractedFile => {
                console.log('extractedFile:', extractedFile)
                // resultText.value = extractedFile
            })


            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setPdfError('');
                setPdfFile(e.target.result);
            };
        }
    };


    return (
        <form >
            <label >Upload here your PDF file:</label>
            &nbsp;
            <input type="file"
                onChange={handleFile} />
        </form>
    );
};

export default PdfForm;