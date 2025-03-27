interface CssGeneratorConfig {
  /**
   * The relative path to the output directory from the calling script
   */
  outputDir: string;

  /**
   * The filename for the output CSS file
   */
  output: string;
}

/**
 * Generates CSS file from tokens
 * @param callerDir The directory of the calling script (__dirname)
 * @param config Configuration for the CSS generator
 * @returns Promise resolving to the path of the generated CSS file
 */
declare function generateCss(callerDir: string, config: CssGeneratorConfig): Promise<string>;

export default generateCss;