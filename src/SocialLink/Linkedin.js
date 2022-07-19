import React from 'react'
import SocialLink from './SocialLink'
import { AiFillLinkedin } from 'react-icons/ai'

const Linkedin = () => {
  return (
    <SocialLink
          path="https://www.linkedin.com/in/clementseguin/"
          logo={<AiFillLinkedin />}
        />
  )
}

export default Linkedin