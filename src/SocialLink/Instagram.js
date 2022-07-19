import React from 'react'
import SocialLink from './SocialLink'
import { AiFillInstagram } from 'react-icons/ai'

const Instagram = () => {
  return (
    <SocialLink
          path="https://www.instagram.com/clem.codes/"
          logo={<AiFillInstagram />}
        />
  )
}

export default Instagram