import { injectGlobal } from './deps.js'

injectGlobal`
    * {
        -webkit-tap-highlight-color: transparent;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
`
