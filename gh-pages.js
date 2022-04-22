import * as ghpages from 'gh-pages';

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/tessagreiner/tessagreiner.art.git',
        dotfiles: true,
        message: 'publish: `tessagreiner.art`'
    },
    () => console.log('Published to: https://tessagreiner.art')
);
