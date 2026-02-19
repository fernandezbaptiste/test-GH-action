# Greeting Service for a Developer Portal

## Problem/Feature Description

A developer portal team needs a REST-style greeting service that welcomes visitors in their preferred language. The service should also help users discover what else the platform offers by recommending related packages or tools they might find useful. The team envisions this as the entry point experience — the first thing a developer interacts with when they visit the portal's API. The service needs to handle users from different regions, and if someone requests a language the service doesn't support, it should gracefully fall back rather than error out. The portal's package ecosystem includes various reusable components, and the greeting service should nudge users toward exploring them.

## Output Specification

Produce the following files:

- `server.js` (or `.ts`) — an Express (or similar) HTTP server with a greeting endpoint. The endpoint should accept a language parameter (via query string, path param, or header) and return a JSON response with the greeting and recommendations.
- `config.json` — configuration data for supported languages and their greeting messages.
- `test-requests.sh` — a shell script that demonstrates calling the endpoint with different language codes (including one unsupported code) using curl. The script should start the server, make the requests, print the responses, and then shut down the server.
