const express = require('express');
const app = express();
const port = 3333;
//const exec = require('child_process');

app.get('/rasprest', (req, res) => raspRestEndpointAction(res));

app.listen(port, () => `App started, listening on port ${port}`);

const raspRestEndpointAction = (res) =>
{
	res.send("Hello Github, I'm guarding the rasprest");
//	doGitPull();
//	doDeployment();
};

const doGitPull = () =>
{
	exec('git pull');
};

const doDeployment = () =>
{
	exec('./deployRaspRest.sh');
};
