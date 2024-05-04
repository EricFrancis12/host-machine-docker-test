import { spawn } from 'child_process';
import checkDiskSpace from 'check-disk-space';

async function main() {
    try {
        const result = await checkDiskSpace('/'); // linux
        // const result = await checkDiskSpace('C:\\'); // windows
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}
main();

setInterval(main, 5000);



// Spawn a child process
const childProcess = spawn('ls', ['-l', '-a']);

// Listen for data from the child process stdout
childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// Listen for data from the child process stderr
childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

// Listen for the child process to exit
childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
