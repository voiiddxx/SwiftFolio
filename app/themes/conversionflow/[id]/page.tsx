import ConversionHero from '@/components/themecomponents/conversionflow/ConversionHero'
import ConversionProject from '@/components/themecomponents/conversionflow/ConversionProject'
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
    </div>
  )
}

export default page
