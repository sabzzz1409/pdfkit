import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

export const createPDF = () => {

    // pagesize 595.28 x 841.89
    // page used 540 x 810
    // margin used 27.64 x 15.945

    const m_x = 27.64;
    const m_y = 15.945;
    const width = 540;
    const height = 810;

    const doc = new PDFDocument({
        size: 'A4',
        margin: 10,
        font: 'Helvetica'
    });

    doc.pipe(createWriteStream('output.pdf'));

    //pdf started

    // text:string,x:number,y:number,options:object
    doc.fontSize(20).text('Invoice Title', 0, 25, { align: 'center', underline: 'black' })
    
    //draw box x:number,y:number,width:number,height:number
    doc.rect(m_x, m_y, width, height).stroke('black')
    
    // draw lne x1,y1 to x2,y2
    doc.moveTo(50, 100)   // starting point (x1, y1)
   .lineTo(300, 150)  // ending point (x2, y2)
   .stroke(); 
    
   // insert image source,x,y,option:{}
    doc.image('logo.png', 50, 150, { width: 200 });



    doc.end();

}

createPDF()