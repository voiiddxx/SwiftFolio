import ConversionAbout from '@/components/themecomponents/conversionflow/ConversionAbout'
import ConversionCustom from '@/components/themecomponents/conversionflow/ConversionCustom'
import ConversionFooter from '@/components/themecomponents/conversionflow/ConversionFooter'
import ConversionHero from '@/components/themecomponents/conversionflow/ConversionHero'
import ConversionProject from '@/components/themecomponents/conversionflow/ConversionProject'
import ConversionSkill from '@/components/themecomponents/conversionflow/ConversionSkill'
import Conversionachivement from '@/components/themecomponents/conversionflow/Conversionachivement'
import CoversionQualification from '@/components/themecomponents/conversionflow/CoversionQualification'
import React from 'react'

const page = () => {
  return (
    <div>
      <ConversionHero/>
      <CoversionQualification/>
      <ConversionProject/>
      <Conversionachivement/>
      <ConversionAbout/>
      <ConversionCustom/>
      <ConversionSkill/>
      <ConversionFooter/>
    </div>
  )
}

export default page
