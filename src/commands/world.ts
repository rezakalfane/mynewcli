import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ mynewcli world
hello world from ./src/world.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  wait() {
    return new Promise(resolve => setTimeout(resolve, 1000))
  }

  async run() {
    const {args, flags} = this.parse(Hello)

    cli.action.start('running')
    await this.wait()
    cli.action.stop()

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/commands/world.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
