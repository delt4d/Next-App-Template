module.exports = {
    'app/**/*.(ts|tsx)': () => 'npx tsc --noEmit',
    'app/**/*.(ts|tsx|js)': (filenames) => {
        return [
            'npm run lint',
            `npm run test -- --bail --findRelatedTests ${filenames.join(' ')}`,
        ];
    },
};
