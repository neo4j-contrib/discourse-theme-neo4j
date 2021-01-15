

## Development

Install [discourse_theme](https://github.com/discourse/discourse_theme).

Configure.

Sync with remote discourse site:

`discourse_theme watch .`

### Tailwind

[Tailwind CSS](https://tailwindcss.com/) is used for customized styling. 

First, install the tools: `npm i`

To make changes, edit [global.css](./blob/main/tailwind/global.scss)

Then "build" the discourse theme: `npm run tailwind:dev`.
