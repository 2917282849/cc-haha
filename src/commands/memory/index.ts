import type { Command } from '../../commands.js'

const memory: Command = {
  type: 'local-jsx',
  name: 'memory',
  description: '编辑 Claude memory 文件',
  load: () => import('./memory.js'),
}

export default memory
