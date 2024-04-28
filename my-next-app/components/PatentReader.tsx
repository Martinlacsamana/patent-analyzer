'use client';

import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

interface PatentReaderProps {
    file: any;
  }

export default function PatentReader({file}:PatentReaderProps) {
  //const [file, setFile] = useState<PDFFile>('./patent-example.pdf');
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="bg-[#F8F8F8] px-4 py-6 border border-[#DAE5EA] rounded-[16px]">
    {/* <div className="Example__container__load">
        <label htmlFor="file">Load from file:</label>{' '}
        <input onChange={onFileChange} type="file" />
    </div> */}
    <div className="Example__container__document" ref={setContainerRef}>
        <Document file={file} options={options}>
        {Array.from(new Array(numPages), (el, index) => (
            <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
            />
        ))}
        </Document>
    </div>
    </div>
  );
}