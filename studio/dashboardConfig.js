export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ebd9296482f2b00591bc126',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-wvk13yjf',
                  apiId: 'de0e362f-877f-4b06-9c73-0e17b903f47d'
                },
                {
                  buildHookId: '5ebd92967c8bad567859cc8c',
                  title: 'Landing pages Website',
                  name: 'sanity-test-web-fgmw2485',
                  apiId: '29ab0cc8-6c3b-4eeb-9ff5-4872cd48bbc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Malven/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-fgmw2485.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
