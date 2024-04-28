'use client';

import { useCallback, useState, SyntheticEvent } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './components.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 500;

type PDFFile = string | File | null;

interface PatentReaderProps {
    file: any;
  }

export default function PatentReader({file}:PatentReaderProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);
  

  function onDocumentLoadSuccess({ numPages: nextNumPages }: {numPages: number}): void {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  }

  function nextPage() {
    if (pageNumber < numPages) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        console.log('next');
      }
  }

  function changePage(event:any) {
    setPageNumber(Number(event.target.value));
  }

  return (
    <div className="bg-[#F8F8F8] px-4 py-6 border border-[#DAE5EA] rounded-[16px]">
        <div className="flex gap-4 items-center justify-center pb-4">
            <div className="cursor-pointer" onClick={previousPage}>{"<"}</div>
            <input 
                type="text"
                className="text-sm w-10 border border-[#C1C1C1] rounded-[5px] text-center"
                value={pageNumber}
                onChange={changePage}
            />
            <p className="text-sm">{`/ ${numPages}`}</p>
            <div className="cursor-pointer" onClick={nextPage}>{">"}</div>
        </div>
        <div className="bg-transparent" ref={setContainerRef}>
            <Document file={file} options={options} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    </div>
  );
}