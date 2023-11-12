<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/manuellara.png',
    name: 'Manuel Lara',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/manuellara' },
    ],
  }
]
</script>

# Meet the team!


<VPTeamMembers size="small" :members="members" />