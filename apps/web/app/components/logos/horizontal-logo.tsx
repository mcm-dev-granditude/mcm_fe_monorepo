import logo from './logo.svg'
import { Box } from 'lucide-react'
import { cn } from '@repo/ui'
import Image from 'next/image'

interface LogoProps {
  className?: string;
}

export function HorizontalLogo( { className }:LogoProps ) {
  return (
      <Box className={ cn( className ) }>
        <Image src={ logo } alt="Logo" />
      </Box>
  )
}
