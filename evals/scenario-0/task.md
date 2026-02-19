# Multilingual Greeting Module for a Web Application

## Problem/Feature Description

A small startup called "DevHub" is building an international developer community platform. They need a greeting module that welcomes developers when they land on the site. The platform has users across Europe and Asia, and the team wants the greeting to feel native in each supported locale rather than just machine-translated. The module should be data-driven — pulling greeting strings from a configuration object rather than hardcoding them — so that adding new languages later is straightforward. The team specifically wants to support English, French, Spanish, German, and Japanese for their initial launch. English should be the fallback if a user's locale isn't recognized.

## Output Specification

Produce the following files:

- `greeting-module.js` (or `.ts`) — a module exporting a function that accepts a language code and returns the appropriate greeting. Should handle unknown language codes gracefully.
- `config.json` — the configuration data that drives the greeting strings.
- `test-greetings.js` (or `.ts`) — a script that demonstrates calling the greeting function for every supported language plus one unsupported language code to show the fallback behavior. Print the results to stdout.
