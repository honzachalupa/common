# TypeScript Utilities library

This library is part of [`@honzachalupa/common`](https://github.com/honzachalupa/common) monorepo.

## Installation

When using on client-side, you may need to add Node.js fallbacks in your Webpack config.

```
fallback: {
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
},
```

## Documentation

### App

`initServiceWorker(path = "/service-worker.js", scope = "/")`
`removeCachedData()`\
`scrollToTop()`\
`scrollToRef(ref: RefObject<HTMLElement>)`

### Browser

`getBrowserLanguage(fallbackLanguage?: string)`\
`getDeviceInfo()`

### Data

`cleanObject(object: object)`\
`groupObjectsBy(array: any[], key: string)`\
`fillStringVariables(string: string | number, variables: { [key: string]: string | number })`

### Formatting

`formatCurrency(value: number, currencyCode: TCurrencyCodes)`\
`formatPhoneNumber(phoneNumber: string)`\
`boolToLabel(value: boolean | string)`\
`addUnitLabel(value: number, units: | "years" | "days" | "persons-adults" | "persons-children" | "percents" | "pieces")`\
`getRandomHexColor()`

### Hooks

`useLogRocket({ token: string; userId: string | undefined; isEnabled: boolean; })`\
`useDarkMode(defaultValue?: boolean)` (reexported from `usehooks-ts` library)\
`useIsFirstRender()` (reexported from `usehooks-ts` library)\
`useIsMounted()` (reexported from `usehooks-ts` library)\
`useLocalStorage(key: string, initialValue: any)` (reexported from `usehooks-ts` library)\
`useReadLocalStorage(key: string)` (reexported from `usehooks-ts` library)\
`useWindowSize()` (reexported from `usehooks-ts` library)
