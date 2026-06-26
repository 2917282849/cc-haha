import type { CommandSpec } from '../registry.js'

export default {
  name: 'pyright',
  description: 'Type checker for Python',
  options: [
    { name: ['--help', '-h'], description: 'Show help message' },
    { name: '--version', description: 'Print pyright version and exit' },
    {
      name: ['--watch', '-w'],
      description: '继续运行并监视更改',
    },
    {
      name: ['--project', '-p'],
      description: '使用此位置的配置文件',
      args: { name: 'FILE OR DIRECTORY' },
    },
    { name: '-', description: 'Read file or directory list from stdin' },
    {
      name: '--createstub',
      description: '创建类型存根文件用于导入',
      args: { name: 'IMPORT' },
    },
    {
      name: ['--typeshedpath', '-t'],
      description: 'Use typeshed type stubs at this location',
      args: { name: 'DIRECTORY' },
    },
    {
      name: '--verifytypes',
      description: 'Verify completeness of types in py.typed package',
      args: { name: 'IMPORT' },
    },
    {
      name: '--ignoreexternal',
      description: 'Ignore external imports for --verifytypes',
    },
    {
      name: '--pythonpath',
      description: 'Path to the Python interpreter',
      args: { name: 'FILE' },
    },
    {
      name: '--pythonplatform',
      description: 'Analyze for platform',
      args: { name: 'PLATFORM' },
    },
    {
      name: '--pythonversion',
      description: 'Analyze for Python version',
      args: { name: 'VERSION' },
    },
    {
      name: ['--venvpath', '-v'],
      description: '包含虚拟环境的目录',
      args: { name: 'DIRECTORY' },
    },
    { name: '--outputjson', description: 'Output results in JSON format' },
    { name: '--verbose', description: 'Emit verbose diagnostics' },
    { name: '--stats', description: '打印详细性能统计' },
    {
      name: '--dependencies',
      description: 'Emit import dependency information',
    },
    {
      name: '--level',
      description: 'Minimum diagnostic level',
      args: { name: 'LEVEL' },
    },
    {
      name: '--skipunannotated',
      description: 'Skip type analysis of unannotated functions',
    },
    {
      name: '--warnings',
      description: 'Use exit code of 1 if warnings are reported',
    },
    {
      name: '--threads',
      description: 'Use up to N threads to parallelize type checking',
      args: { name: 'N', isOptional: true },
    },
  ],
  args: {
    name: 'files',
    description:
      'Specify files or directories to analyze (overrides config file)',
    isVariadic: true,
    isOptional: true,
  },
} satisfies CommandSpec
