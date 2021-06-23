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
                  buildHookId: '60d3805a82f45700efd8dadd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-up2qe3kq',
                  apiId: '4cd4b193-0cdd-482d-85fa-aaf420141c28'
                },
                {
                  buildHookId: '60d3805aaac28c00c3c98341',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1ew29k9y',
                  apiId: '6630b225-a922-4672-b567-7d19a9e5f63a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steve904/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1ew29k9y.netlify.app', category: 'apps'}
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
