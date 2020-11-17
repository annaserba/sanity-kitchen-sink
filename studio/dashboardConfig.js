export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb3f03ae14dcc4739014425',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hrdz9s2m',
                  apiId: '8a3b5c0a-0fe5-413e-bfcc-9fb7ab6b8545'
                },
                {
                  buildHookId: '5fb3f03b3757b546d4149123',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vq8ak3de',
                  apiId: '26062b81-0af5-43b8-8491-bbcbb6311219'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annaserba/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vq8ak3de.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
