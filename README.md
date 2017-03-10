# eslint-plugin-exclude-nunjuck-tags

A preprocessor to remove nunjuck tags to prevent "Unexpected token {%" errors in .js files.

Nunjuck statements like `{% import 'layout.js' %}` creates eslint "Unexpected token{%" error.

## Under the hood

By fact it just replaces occurrences of `{%...%}` for `` to prevent parsing of nunjuck code. 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint
```

Next, install `eslint-plugin-exclude-nunjuck-tags`:

```
$ npm install eslint-plugin-exclude-nunjuck-tags
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-exclude-nunjuck-tags` globally.

## Usage

Add `exclude-nunjuck-tags` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "exclude-nunjuck-tags"
    ]
}
```

It Replaces `nunjuck` block with empty string.  Consicutive line might have side effect for this. So, in your main code you have to use `eslint-disable` & `eslint-enable` block to by pass sideeffect. 

Sample Code Usage

```
    var test = 1;

    /* eslint-disable */
        {% import 'abc.js' %}
        {% import 'abc.js' %}
    /* eslint-enable* */

    function other() {
    
    }

```


Reference:

-  [1]: https://github.com/Alexnder/eslint-plugin-exclude-php-tags)

