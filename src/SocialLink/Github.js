import React from 'react'
import SocialLink from './SocialLink'
import { AiFillGithub } from 'react-icons/ai'

const Github = () => {
  return (
    <SocialLink
          path="https://www.github.com/ClementS03"
          logo={<AiFillGithub />}
        />
  )
}

export default Github