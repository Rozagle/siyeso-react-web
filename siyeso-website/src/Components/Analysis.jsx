// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import analysis from '../assets/analysis.json';
import './Analysis.css';
function Analysis() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <div className='analysis-container'>
            <div className='max-width-container'>
                <Lottie className='lottie-animation' animationData={analysis} />
                <div className='text-container'>
                    <p className='title'>
                        {t('analysis.heading')}
                    </p>
                    <h1 className='heading'>
                        {t('analysis.h1')}
                    </h1>
                    <p className='description'>
                        {t('analysis.description')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Analysis;

