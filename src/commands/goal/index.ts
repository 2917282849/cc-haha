import type { Command } from '../../commands.js'

const goal = {
  type: 'local-jsx',
  supportsNonInteractive: true,
  name: 'goal',
  description: '设定完成目标',
  argumentHint: '[<condition> | clear]',
  load: () => import('./goal.js'),
} satisfies Command

export default goal