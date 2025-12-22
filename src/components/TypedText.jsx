import React, { useState, useEffect } from 'react';

const TypedText = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(word.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setCurrentText(word.substring(0, currentText.length + 1));
                if (currentText === word) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="text-foreground border-b-2 border-muted/30 pb-1 inline-block min-w-[200px] transition-colors">
            {currentText}
            <span className="animate-pulse border-r-2 border-foreground ml-1"></span>
        </span>
    );
};

export default TypedText;
