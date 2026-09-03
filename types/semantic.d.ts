/// <reference types="semver" />

declare module 'conventional-changelog-conventionalcommits' {
  function conventionalChangelogConventionalcommits(config?: {
    types?: any[];
    [key: string]: any;
  }): Promise<{ parserOpts: any; writerOpts: any; [key: string]: any }>;
  export = conventionalChangelogConventionalcommits;
}

declare module '@semantic-release/commit-analyzer' {
  export function analyzeCommits(
    config: {
      preset?: string;
      config?: string;
      parserOpts?: any;
      releaseRules?:
        | string
        | {
            type: string;
            release: string;
            scope?: string;
          }[];
      presetConfig?: string;
    },
    args: {
      commits: { message: string; hash: string | null }[];
      logger: { log: (args: any) => void };
    }
  ): Promise<any>;
}

declare module '@semantic-release/release-notes-generator' {
  export function generateNotes(
    config: {
      preset?: string;
      config?: string;
      parserOpts?: any;
      writerOpts?: any;
      releaseRules?:
        | string
        | {
            type: string;
            release: string;
            scope?: string;
          }[];
      presetConfig?: any; // Depends on used preset
    },
    args: {
      commits: { message: string; hash: string | null }[];
      logger: { log: (args: any) => void };
      options: {
        repositoryUrl: string;
      };
      lastRelease: { gitTag: string };
      nextRelease: { gitTag: string; version: string };
      cwd?: string;
    }
  ): Promise<string>;
}
