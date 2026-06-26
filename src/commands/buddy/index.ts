import type { Command } from '../../commands.js'

const buddyCommand = {
  type: 'local-jsx',
  name: 'buddy',
  description: '召唤你的伴生伙伴',
  argumentHint: '[hatch|pet|mute|unmute|info]',
  load: () => import('./buddy.js'),
} satisfies Command

export default buddyCommand