import path from 'node:path';

export default function configFactory({ projectDir }) {
    const snapshotDir = path.resolve(projectDir, './__snapshots__/');

    return {
        files: ['__obj/**/*.test.*'],
        snapshotDir,
    };
}
