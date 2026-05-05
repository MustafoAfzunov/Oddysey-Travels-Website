import { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        document.title = title || 'Pamir Peaks | Conquer the Roof of the World';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Leading premium expeditions to the roof of the world.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description || 'Leading premium expeditions to the roof of the world.';
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
