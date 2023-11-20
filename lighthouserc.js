module.exports = {
    ci: {
        collect: {
            url: ['https://katiecouric.com/'],
            // staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'temporary-public-storage',
            outputDir: './lighthouse-results',
        },
    },
};
