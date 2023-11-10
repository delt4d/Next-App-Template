module.exports = {
    '**/*.(ts|tsx|js)': (filenames) => {
        return [
            'npx tsc --noEmit',
            `npm run test -- --bail --findRelatedTests ${filenames.join(' ')}`,
            'npm run lint',
        ]
    },
}
