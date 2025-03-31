export const consoleLogScript = `
  (function() {
    // Store the original console methods
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug
    };

    // Override console methods to capture and forward logs
    console.log = function() {
      originalConsole.log.apply(console, arguments);
      sendToReactNative('log', Array.from(arguments));
    };

    console.warn = function() {
      originalConsole.warn.apply(console, arguments);
      sendToReactNative('warn', Array.from(arguments));
    };

    console.error = function() {
      originalConsole.error.apply(console, arguments);
      sendToReactNative('error', Array.from(arguments));
    };

    console.info = function() {
      originalConsole.info.apply(console, arguments);
      sendToReactNative('info', Array.from(arguments));
    };

    console.debug = function() {
      originalConsole.debug.apply(console, arguments);
      sendToReactNative('debug', Array.from(arguments));
    };

    // Helper function to send data to React Native
    function sendToReactNative(level, args) {
      try {
        const serializedArgs = args.map(arg => {
          if (typeof arg === 'object') {
            try {
              return JSON.stringify(arg);
            } catch (e) {
              return String(arg);
            }
          }
          return String(arg);
        });

        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: 'console',
          level,
          data: serializedArgs
        }));
      } catch (err) {
        // If serialization fails, send a fallback message
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: 'console',
          level: 'error',
          data: ['Error serializing console output']
        }));
      }
    }
  })();
`;