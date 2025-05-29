const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ali Salahi',
  role: 'Front End Developer',
  description:
    'Front End Developer with a passion for creating responsive and user-friendly web applications. Experienced in modern JavaScript frameworks and UI/UX best practices. Committed to writing clean, maintainable code and building engaging user experiences.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/Optimuss1996',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Tailwind',
  'ShadCN UI',
  'Git',
  'GitHub',
  'GitLab',
  'Next.js',
  'Supabase',
  'Figma',
  'Responsive Design',
  'UI/UX Design',
  'Zustand',
  'Zod',
  'React Hook Form',
  'React Router',
  'React Query',
  'React Hook Form',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alisalahii19951195@gmail.com',
}

export { header, about, projects, skills, contact }
