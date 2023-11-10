module.exports = {
    '**/*.(ts|tsx|js)': (filenames) => {
        return [
            'npx tsc --noEmit',
            'npm run lint',
            `npm run test -- --bail --findRelatedTests ${filenames.join(' ')}`,
        ]
    },
}
