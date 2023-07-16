import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import React, { useRef, useState, useEffect } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import Button from '../../components/UIElements/Button/Button';
import resume from '../../assets/Mason-Doherty-Software-Engineer.pdf';
import { Page, Document, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const resumeLink =
  'https://drive.google.com/file/d/1pinDOPriGODttNvXr16ZjUIu1IlBCBp5/view?usp=sharing';
const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
    removeTextLayerOffset();
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document file={resume}>
            <Page pageNumber={1} width={pdfPageWidth} />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
