#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const { 
    SLACK_WEBHOOK,
    SLACK_TITLE,
    GITHUB_REPOSITORY,
    GITHUB_AUTHOR_ICON,
    GITHUB_URL,
} = process.env


const exec = require('child_process').exec

const { 
    _: [command, ...params],
} = argv

switch (command) {
    case 'notify':
        const payload = {
            channel: '#dev',
            icon_imoji: ':gitcat:',
            username: 'luke',
            text: `*${SLACK_TITLE}* - <${GITHUB_URL}|[${GITHUB_REPOSITORY}]>`,
            attachments: [
                {
                    color: '#3a3a3a',
                    author_name: "ccc",
                    author_icon: ':gitcat:',
                    fields: [
                        {
                            title: 'Topic',
                            value: 'aaaa'
                        }
                    ],
                    footer: 'footer footer footer',
                    ts: new Date().getTime()
                }
            ]
        }
        const curl = `curl -X POST --data-urlencode 'payload=${JSON.stringify(payload)}' ${SLACK_WEBHOOK}` 

    exec(curl, function(error, stdout, stderr) {
        console.log(stdout)  
        console.log(stderr)  
        if (error !== null) {
            console.log(error)
        }
    })
    break
}
