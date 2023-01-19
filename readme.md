

## Development

Install [discourse_theme](https://github.com/discourse/discourse_theme).

Configure.

Sync with remote discourse site:

`discourse_theme watch .`

### Tailwind

[Tailwind CSS](https://tailwindcss.com/) is used for customized styling. 

First, install the tools: `npm i`

To make changes, edit [global.scss](./blob/main/tailwind/global.scss)

Then "build" the discourse theme: `npm run tailwind:dev`.

#### Debugging

Tailwind produces some advanced CSS which may break the Discourse preprocessor. 

For example, this includes an [attribute case sensitivity](https://css4-selectors.com/selector/css4/attribute-case-sensitivity/):

```
type
        on line 799 of common.scss
>> .topic-body .cooked :where(ol[type="A" s]):not(:where([class~="not-prose"] *
   -----------------------------------^
```

You'll have to manually correct the produced CSS in such cases.