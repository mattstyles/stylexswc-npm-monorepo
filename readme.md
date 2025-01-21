
# stylexswc npm monorepo

Monorepo using npm to install dependencies.

App folder contains a nextjs application using stylex for styling. Uses [stylex in rust](https://github.com/Dwlad90/stylex-swc-plugin) packages to build the application.

## Notes

* `@urban-ui/theme/theme.stylex` exports vars, same mechanism as open-props.
* `@urban-ui/flex` uses `theme.stylex` to generate styles via `stylex.create`.
* rs-compiler panics with:

```
The application panicked (crashed).
Message:  Cannot resolve file path: @urban-ui/theme/theme.stylex
Location: crates/stylex-shared/src/shared/structures/state_manager.rs:865
```

