import type { CommandSpec } from '../registry.js'

const sleep: CommandSpec = {
  name: 'sleep',
  description: '延迟指定时间',
  args: {
    name: 'duration',
    description: '休眠持续时间（秒，或带后缀如 5s、2m、1h）',
    isOptional: false,
  },
}

export default sleep
