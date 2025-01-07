import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'getting-started/quickstart',
        'getting-started/installation',
        'getting-started/glossary',
      ],
    },
    {
      type: 'category',
      label: 'ETL pipeline tutorial',
      collapsed: false,
      link: {type: 'doc', id: 'etl-pipeline-tutorial/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'etl-pipeline-tutorial'
        }
      ],
    },
    {
      type: 'category',
      label: 'Build',
      collapsed: false,
      link: {type: 'doc', id: 'guides/build/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/build',
        },
      ],
    },
    {
      type: 'category',
      label: 'Automate',
      collapsed: false,
      link: {type: 'doc', id: 'guides/automate/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/automate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Operate',
      collapsed: false,
      link: {type: 'doc', id: 'guides/operate/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/operate'
        }
      ]
    },
    {
      type: 'category',
      label: 'Monitor',
      collapsed: false,
      link: {type: 'doc', id: 'guides/monitor/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/monitor',
        },
      ],
    },
    {
      type: 'category',
      label: 'Test',
      collapsed: false,
      link: {type: 'doc', id: 'guides/test/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/test',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      link: {type: 'doc', id: 'guides/deploy/index'},
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/deploy',
        },
      ],
    },
    {
      type: 'category',
      label: 'Migrate',
      link: {type: 'doc', id: 'guides/migrate/index'},
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides/migrate'
        }
      ]
    },
    {
      type: 'category',
      label: 'About',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'about',
        },
      ],
    },
  ],
  tutorials: [
    'tutorials/index',
    {
      type: 'category',
      label: 'Category one',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials/category-one'
        }
      ]
    },
    {
      type: 'category',
      label: 'Category two',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials/category-two'
        }
      ]
    }
  ],
  integrations: [
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: ['integrations/guides/multi-asset-integration'],
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsible: false,
      link: {type: 'doc', id: 'integrations/libraries/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations/libraries',
        },
      ],
    },
  ],
  dagsterPlus: [
    'dagster-plus/index',
    'dagster-plus/getting-started',
    {
      type: 'category',
      label: 'Features',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'dagster-plus/features',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'dagster-plus/deployment',
        },
      ],
    },
  ],
  api: [
    'api/index',
    'api/api-lifecycle',
    {
      type: 'category',
      label: 'Python API',
      collapsed: false,
      link: {type: 'doc', id: 'api/python-api/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/python-api',
        },
      ],
    },
  ],
};

export default sidebars;
