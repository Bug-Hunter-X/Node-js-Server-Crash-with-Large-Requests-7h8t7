# Node.js Server Crash with Large Requests

This repository demonstrates a common issue in Node.js servers: crashing due to large request bodies.  The provided code creates a simple HTTP server that is vulnerable to this issue.  A solution is also provided demonstrating how to handle large requests safely using stream processing.

## Bug

The `bug.js` file contains a simple HTTP server that reads the entire request body into memory before processing.  This works fine for small requests, but for large requests, this can lead to a memory leak and eventual server crash.

## Solution

The `bugSolution.js` file demonstrates a more robust solution that uses streams to process the request body in chunks, preventing excessive memory consumption.  This makes the server significantly more resilient to large requests.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`.
3. Send a large POST request to `http://localhost:3000` using a tool like `curl` or Postman.
4. Observe the server crashing or becoming unresponsive.

## How to run the solution

1. Run `node bugSolution.js`.
2. Send a large POST request to `http://localhost:3000`.
3. Observe that the server handles the request without crashing.