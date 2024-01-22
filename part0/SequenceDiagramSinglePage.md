sequenceDiagram

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa [{content: "kiitos3", date: "2024-01-22T19:08:11.951Z"}]
    activate server
    server-->>browser: [{"message":"note created"}]
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    Note right of browser: The browser executes the callback function that renders the notes
