---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/16713018?v=4',
    name: 'mobytang',
    title: '联系人',
    links: [
      { icon: 'github', link: 'https://github.com/baobaomi900901' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About Us
    </template>
    <template #lead>
      KingAutomate is an automation toolkit designed to help developers improve work efficiency, enhance software quality, and boost software delivery efficiency.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
