module.exports = {
    type: 'blog',
    singular: 'post',
    template: {
        contentPath: `content/blog/{{ slug }}.md`,
        frontmatter: {
            title: `{{ title }}`,
            date: `{{ date }}`,
            categories: argv => argv.categories || [],
        }
    },
    module: {
        command: 'post <title>',
        desc: 'Make a blog post',
        builder: yargs => {
            return yargs
                .options({
                    categories: {
                        alias: 't',
                        type: 'array',
                    }
                })
        },
    }
}
