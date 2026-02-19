# Developer Workday Greeting CLI Tool

## Problem/Feature Description

A DevOps team wants a lightweight command-line tool that greets developers when they open their terminal at the start of their workday. The tool should feel personal — addressing the developer by name — and should adapt its message based on when during the day they're starting work. A developer logging in at 8 AM should get a different vibe than one starting a late evening session. The tool takes the developer's name as a command-line argument and prints a greeting to stdout. It should determine the appropriate time period automatically based on the system clock.

## Output Specification

Produce the following files:

- `greet-cli.js` (or `.ts`) — a Node.js script that can be run with `node greet-cli.js <name>`. It reads the current system time, determines the time of day, and prints a personalized greeting.
- `README.md` — brief usage instructions showing example commands and sample outputs for different times of day (demonstrate at least morning, afternoon, and evening variations).
