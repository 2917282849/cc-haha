import type { Command } from '../../commands.js'

const config = {
  aliases: ['settings'],
  type: 'local-jsx',
  name: 'config',
  description: '打开 config 面板',
  load: () => import('./config.js'),
} satisfies Command

export default config
