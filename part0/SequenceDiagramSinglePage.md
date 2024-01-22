sequenceDiagram

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note [{content: "kiitos2", date: "2024-01-22T19:01:23.123Z"}]
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"message":"note created"}]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
