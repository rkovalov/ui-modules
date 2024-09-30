import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import failOnConsole from 'vitest-fail-on-console';
import '@testing-library/jest-dom/vitest';

failOnConsole({
  shouldFailOnDebug: true,
});

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
