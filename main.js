const { ToadScheduler, SimpleIntervalJob, Task } = require("toad-scheduler");
const { spawn } = require("child_process");

const scheduler = new ToadScheduler();

// Create Task
const task = new Task("Main task", () => {
  console.log("Check Exams just begin...");

  const cypressrun = spawn("npx", ["cypress", "run"]);
  // run cypress command
  cypressrun.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  cypressrun.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  cypressrun.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });
});

// Scheduler Main
const job = new SimpleIntervalJob({ seconds: 20 }, task);
scheduler.addSimpleIntervalJob(job);
