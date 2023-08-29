import { useState } from "react";
import AppHeader from "../components/AppHeader"
import PdfForm from "../components/PdfForm"
import PdfInfo from "../components/PdfInfo";
import Viewer from "../components/Viewer";
import ErrorMsg from "../components/ErrorMsg";
import BtnsPanel from "../components/BtnsPanel";

const HomePage = () => {


    const [pdfFile, setPdfFile] = useState('');
    const [pdfError, setPdfError] = useState('');

    return (
        <>
            <AppHeader />
            <PdfForm setPdfFile={setPdfFile} setPdfError={setPdfError} />
            {pdfError && <ErrorMsg>{pdfError }</ErrorMsg>}
            {pdfFile && (
                <main>
                    <PdfInfo pdfError={pdfError} pdfFile={pdfFile} />
                    <BtnsPanel/>
                    <Viewer pdfFile={pdfFile} />
                </main>
            )}
        </>
    )
}

export default HomePage