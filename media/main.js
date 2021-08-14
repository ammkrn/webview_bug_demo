(function () {
    const vscode = acquireVsCodeApi();

    document.addEventListener('keydown', takestep);
    function takestep(e) {
        switch (e.key) {
            case 'ArrowRight': case 'l':
                vscode.postMessage({
                    command: 'step_fwd',
                    text: e.key
                })
                return;
            case 'ArrowLeft': case 'h':
                vscode.postMessage({
                    command: 'step_back',
                    text: e.key
                })
                return;
            default:
                vscode.postMessage({
                    command: 'do_nothing',
                    text: 'unrecognized key'
                })
                return;
        }
    }
	
}());