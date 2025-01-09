interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Bubble',
    description: '一个基于WebGPU的实验性渲染库',
    href: 'https://github.com/re-ovo/bubble',
  },
  {
    title: 'unocss-intellij',
    description: '为Unocss提供Intellij IDEA插件支持',
    href: 'https://github.com/re-ovo/unocss-intellij',
  },
]

export default projectsData
