import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const inputString = core.getInput("input_string");
    core.debug(`Input string: ${inputString}`);

    // ここで、入力文字列に対して何らかの処理を行います

    const outputString = inputString.toUpperCase();
    core.debug(`Output string: ${outputString}`);
    core.setOutput("output_string", outputString);
  } catch (error: unknown) { // ここで型を指定します
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed("An unexpected error occurred.");
    }
  }
}

run();
