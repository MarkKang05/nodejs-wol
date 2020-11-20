const shell = require('shelljs')
 
shell.cd('~')
 
if(shell.exec('wakeonlan BC:5F:F4:5C:85:B9').code !== 0) {
      shell.echo('Error: command failed')
      shell.exit(1)
}


