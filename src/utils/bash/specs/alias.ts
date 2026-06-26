import type { CommandSpec } from '../registry.js'

const alias: CommandSpec = {
  name: 'alias',
  description: '创建或列出命令别名',
  args: {
    name: 'definition',
    description: 'Alias definition in the form name=value',
    isOptional: true,
    isVariadic: true,
  },
}

export default alias
