import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

export const createPDF = () => {

    const doc = new PDFDocument({
        size: 'A4',
        margin: 10,
        font: 'Helvetica'
    });

    doc.pipe(createWriteStream('output.pdf'));

    //pdf started






    doc.end();

}

createPDF()